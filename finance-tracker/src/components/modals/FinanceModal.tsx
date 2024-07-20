import { FC, useState, useEffect, useRef } from "react";
import { TextInput } from "../inputs";
import { useTheme } from "../../hooks";
import { TModalHeader } from "../../@types";
type TFinanceModal = {
  onClose: () => void;
  modalHeader: TModalHeader;
};
export const FinanceModal: FC<TFinanceModal> = ({ onClose, modalHeader }) => {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number | null>(null);
  const [date, setDate] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const divRef = useRef<HTMLDivElement | null>(null);
  const themeContext = useTheme();

  useEffect(() => {
    const handleOutsideClickListener = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mouseup", handleOutsideClickListener);
    return () =>
      document.removeEventListener("click", handleOutsideClickListener);
  }, [onClose]);
  return (
    <div
      className="h-screen 
    w-screen  
    backdrop-blur-sm
    flex
    items-center
    justify-center
    "
    >
      <div
        ref={divRef}
        className={`
      ${!themeContext.theme ? "bg-light-secondary" : "bg-white"}
      w-[400px] 
      h-[400px] 
      rounded-xl 
      px-6 
      py-2
      modal-shadow
      flex 
      flex-col
      gap-y-4
      items-center
      justify-center
      `}
      >
        <p className="text-xl font-semibold text-center py-4">{modalHeader}</p>
        <TextInput
          onStateChange={(e) => {}}
          placeHolder={"Enter Action Name"}
        />
        <TextInput onStateChange={(e) => {}} placeHolder={"Enter Amount"} />
        <TextInput onStateChange={(e) => {}} placeHolder={"Enter Date here"} />
        <div className="flex justify-around gap-x-2 items-center">
          <button
            className="bg-green-700
          hover:bg-green-600
          px-4 
          w-[70px]
          py-2 
          transition
          ease-out
          delay-150
          text-white rounded-md"
          >
            Save
          </button>
          <button
            className="bg-red-700
          hover:bg-red-500
          transition
          ease-out
          delay-150
          px-4
          w-[70px]
          py-2 
          text-white rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
