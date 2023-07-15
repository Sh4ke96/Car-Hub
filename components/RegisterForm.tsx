import { FC } from "react";
import { Input, Button } from "@/components/index";
import Link from "next/link";

const RegisterForm: FC = () => {
  return (
    <form className="flex flex-col max-w-5xl gap-y-12">
      <div className="flex gap-x-32">
        <Input label="First Name" />
        <Input label="Last Name" />
      </div>
      <div>
        <Input label="E-mail Adress" />
      </div>
      <div className="flex gap-x-32">
        <Input label="Password" />
        <Input label="Retype Password" />
      </div>
      <div className="pt-12">
        <p>
          By creating an account you agree to ours{" "}
          <Link
            href="/privacy"
            className="font-bold underline underline-offset-4"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/terms"
            className="font-bold underline underline-offset-4"
          >
            Terms of Use
          </Link>
        </p>
      </div>
      <div className="flex gap-x-4">
        <Button
          type="submit"
          title="Sign up"
          containerStyles="bg-black text-white rounded-full min-w-[130px] uppercase duration-300 hover:text-primary"
        />
        <Button
          title="Add details"
          containerStyles="bg-black text-white rounded-full min-w-[130px] uppercase duration-300 hover:text-primary"
        />
        <p className="max-w-[220px]">
          * You can skip next steps and add personal data later
        </p>
      </div>
      <div>
        <p>
          Already a member?{" "}
          <Link
            href="/login"
            className="font-bold underline underline-offset-4"
          >
            Log in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
