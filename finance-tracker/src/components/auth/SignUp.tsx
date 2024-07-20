import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { TextInput } from "../inputs";
import { AuthButton } from "../buttons";
import { useToast } from "../../hooks/useToast";
import { signUpUser } from "../../firebase";

export const SignUp: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confPassword, setConfPassword] = useState<string>("");
  const { toastSuccess } = useToast();
  const authButtonClick = useCallback(async () => {
    await signUpUser(email, password);
  }, [email, password]);
  const oauthButtonClick = useCallback(() => {}, [email, password]);

  return (
    <div className="flex flex-col gap-y-2 w-[300px] h-[400px]">
      <TextInput
        onStateChange={(e: ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value);
        }}
        placeHolder={"Enter your email here"}
      />

      <TextInput
        placeHolder={"Enter password here"}
        onStateChange={(e: ChangeEvent<HTMLInputElement>) => {
          setPassword(e.target.value);
        }}
      />

      <AuthButton text={"Login"} onClick={authButtonClick} />
      <AuthButton text={"Sign Up With Google"} onClick={oauthButtonClick} />
    </div>
  );
};
