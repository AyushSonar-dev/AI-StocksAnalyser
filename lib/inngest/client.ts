import {Inngest} from "inngest";

export const inngest= new Inngest({
    id: "signalist-dev-1",
    ai:{gemini:{apikey:process.env.GEMINI_API_KEY || ""}}

})

