import React from "react";
import LoginForm from "@/components/Auth/LoginForm";

export default function Login() {
  return (
    <>
      <div className="bg-gradient-to-t from-[#FAFAFA] to-[#4397BB] w-full h-lvh flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
