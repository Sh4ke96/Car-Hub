import { FC } from "react";
import { Input, Button } from "@/components/index";
import Link from "next/link";

const LoginForm: FC = () => {
  return (
    <form className="flex flex-col max-w-5xl gap-y-12">
      <div className="flex gap-x-32">
        <Input label="E-mail Adress" />
        <Input label="Password" />
      </div>
      <div className="flex pt-12 gap-x-4">
        <Button
          type="submit"
          title="Sign in"
          containerStyles="bg-black text-white rounded-full min-w-[130px] uppercase duration-300 hover:text-primary"
        />
        <Link href="/forgot">
          <Button
            title="Forgot password"
            containerStyles="bg-black text-white rounded-full min-w-[130px] uppercase duration-300 hover:text-primary"
          />
        </Link>
      </div>
      <div>
        <p>
          Don`t have account?{" "}
          <Link
            href="/register"
            className="font-bold underline underline-offset-4"
          >
            Register
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
