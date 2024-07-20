import { ChangeEvent, FC } from "react";
import { mergeStyles } from "../../utils";

type TTextInputProps = {
  style?: string;
  onStateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
};
export const TextInput: FC<TTextInputProps> = ({
  style,
  onStateChange,
  placeHolder,
}) => {
  return (
    <input
      onChange={(e) => onStateChange(e)}
      type="text"
      placeholder={placeHolder ? placeHolder : "Type Here"}
      className={mergeStyles(
        "input input-bordered w-full max-w-xs",
        style ? style : "",
      )}
    />
  );
};

//const [email,setEmail]=useState("hello")
