import { FC, useState } from "react";
import { TextInput } from "../inputs";
import { AuthButton } from "../buttons";
export const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="flex flex-col gap-y-2 w-[300px] h-[400px]">
      <TextInput
        placeHolder={"Enter your email here"}
        onStateChange={() => {}}
      />
      <TextInput
        placeHolder={"Enter your password here"}
        onStateChange={() => {}}
      />
      <AuthButton text={"Login"} onClick={() => {}} />
    </div>
  );
};
