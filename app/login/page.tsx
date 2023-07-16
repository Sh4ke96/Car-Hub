import { FC } from "react";
import { LoginForm } from "@/components";

const LoginPage: FC = () => {
  return (
    <div className="bg-primary">
      <div className="relative z-0 flex flex-col items-center min-h-screen pt-32 mx-auto max-w-screen-2xl">
        <h1 className="font-bold leading-[5.5rem] text-7xl max-w-3xl text-center">
          Log in into your account
        </h1>
        <div className="py-32">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
