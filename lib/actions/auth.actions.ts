"use server";

import { success } from "better-auth";
import { auth } from "../better-auth/auth";
import { inngest } from "../inngest/client";
import { headers } from "next/headers";

export const signUpWithEmail=async({email,password,fullName,country,investmentGoals,riskTolerance,preferredIndustry}:SignupFormData)=>{
    try{
        console.log("Starting sign-up process for:", email);
        const response=await auth.api.signUpEmail({
            body:{
                email,name:fullName,password
            }
        
        })
        if(response){
            await inngest.send({
                name:"app/user.created",
                data:{
                    email,
                    name:fullName,
                    country,
                    investmentGoals,
                    riskTolerance,
                    preferredIndustry
                }
            })
        }
        return{success:true,data:response}

    }catch(error){
        console.error("Error during sign-up:",error)
        return{success:false,message:"Sign-up failed"}
    }
}
export const signOut=async()=>{
    try {
        await auth.api.signOut({headers:await headers()});
    } catch (error) {
        console.error("Error during sign-out:",error)
        return {success:false,message:"Sign-out failed"}
        
    }

}

export const signInWithEmail=async({email,password}:SignInFormData)=>{
    try{
        console.log("Starting sign-in process for:", email);
        const response=await auth.api.signInEmail({
            body:{
                email,password
            }
        
        })
 
        return{success:true,data:response}

    }catch(error){
        console.error("Error during sign-in:",error)
        return{success:false,message:"Sign-in failed"}
    }
}
