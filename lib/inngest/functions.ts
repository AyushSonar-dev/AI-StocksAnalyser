import { success } from "better-auth";
import { inngest } from "./client";
import { PERSONALIZED_WELCOME_EMAIL_PROMPT } from "./prompts";
import { send } from "process";
import { sendWelcomeEmail } from "../nodemailer/transporter";

export const sendSingUpEmail = inngest.createFunction(
  {
    id: "send-signup-email",
  },
  { event: "app/user.created" },
  async ({ event, step }) => {
    const userProfile = `
        -Country=${event.data.country}
        -Invesment goals=${event.data.investmentGoals}
        -Risk tolerance=${event.data.riskTolerance}
        -Preferred industry=${event.data.prefferedIndustry}
        `;
    const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace(
      "{{userProfile}}",
      userProfile
    );
    const response = await step.ai.infer("generate-welcome-intro", {
      model: step.ai.models.gemini({ model: "gemini-2.5-flash-lite" }),
      body: {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      },
    });
    await step.run("send-welcome-email", async () => {
      const part = response.candidates?.[0]?.content?.parts?.[0] ?? null;

      const introText =
        typeof part === "object" &&
        part !== null &&
        "text" in part &&
        typeof part.text === "string"
          ? part.text
          : "Welcome to Signalist!";

      const {
        data: { email, name },
      } = event;

      return await sendWelcomeEmail({
        name,
        email,
        intro: introText,
      });
    });
    return {
      success: true,
      message: "welcome email sent successfully",
    };
  }
);
