import { FC } from "react";
import { RegisterForm } from "@/components";

const RegisterPage: FC = () => {
  return (
    <div className="bg-primary">
      <div className="relative z-0 flex flex-col items-center h-screen pt-32 mx-auto max-w-screen-2xl">
        <h1 className="font-bold leading-[5.5rem] text-7xl max-w-3xl text-center">
          Create your account and start moving
        </h1>
        <div className="py-32">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
