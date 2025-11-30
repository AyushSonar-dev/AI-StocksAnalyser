"use client";

import FooterLink from "@/components/FooterLink";

import Inputfield from "@/components/forms/inputfield";

import { useForm} from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    defaultValues: {
     
      email: "",
      password: "",
    },
    mode: "onBlur",
  });
  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log(data);
    } catch (e) {
      console.error("SignIn error:", e);
    }
  };
  return (
    <div>
      <h1 className="form-title">Login with your Details</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
       
  
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
     
      
        <button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Logging In...." : "Sign In"}
        </button>
        <FooterLink href='/sign-up' text="Don't have an Account?" linkText="Sign up"/>
      </form>
    </div>
  );
};

export default Signup;
