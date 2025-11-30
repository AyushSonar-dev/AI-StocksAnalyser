"use client";

import FooterLink from "@/components/FooterLink";
import { CountrySelectField } from "@/components/forms/countryList";
import Inputfield from "@/components/forms/inputfield";
import SelectFieldComponent from "@/components/forms/selectfieldComponent";
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from "@/lib/constants";
import { error } from "console";
import { useForm, SubmitHandler } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "US",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });
  const onSubmit = async (data: SignupFormData) => {
    try {
      console.log(data);
    } catch (e) {
      console.error("Signup error:", e);
    }
  };
  return (
    <div>
      <h1 className="form-title">Signup and Personalise</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Form fields go here */}
        <Inputfield
        
          name="Fullname"
          label="Full Name"
          placeholder="John Doe"
          register={register}
          error={errors.fullName}
          validation={{ require: "Full name is required", minLength: 2 }}
        />
        <Inputfield
          name="email"
          label="Email"
          placeholder="xyz@gmail.com"
          register={register}
          error={errors.email}
          validation={{ require: "email is required", pattern: /^\S+@\S+$/i, message: "Invalid email address" }}
        />
        <Inputfield
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
          register={register}
          error={errors.password}
          validation={{ require: "Password is required", minLength: 6 }}
        />
        {/* Country */}
        <CountrySelectField name='country' label="Country" required error={errors.country} control={control}/>
        
          
         
          
        <SelectFieldComponent 
           name="investmentGoals"
           label="Investment Goals"
           placeholder="Select your investment goals"
           options={INVESTMENT_GOALS}
           control={control}
           error={errors.investmentGoals}
           required
        />
        <SelectFieldComponent 
           name="riskTolerance"
           label="Risk Tolerance"
           placeholder="Select your risk tolerance"
           options={RISK_TOLERANCE_OPTIONS}
           control={control}
           error={errors.riskTolerance}
           required
        />
        <SelectFieldComponent 
           name="preferredIndustry"
           label="Preferred Industry"
           placeholder="Select your preferred industry"
           options={PREFERRED_INDUSTRIES }
           control={control}
           error={errors.preferredIndustry}
           required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Signing Up..." : "Sign Up"}
        </button>
        <FooterLink href='/sign-in' text="Already have an Account?" linkText="Sign in"/>
      </form>
    </div>
  );
};

export default Signup;
