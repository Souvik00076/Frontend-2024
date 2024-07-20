import { FC } from "react";
import { useTheme } from "../../hooks";
import {
  ImageRupeeDarkIcon,
  ImageRupeeLightIcon,
} from "../../constants/image-index";
type TGenericCard = {
  title: string;
  butttonText: string;
  onClick: () => void;
  loading: boolean;
  balance: number;
};
export const GenericCard: FC<TGenericCard> = ({
  title,
  butttonText,
  balance,
  onClick,
}) => {
  const themeContext = useTheme();
  return (
    <div
      className="
    mt-4
    w-[400px] 
    min-h-[170px] 
    rounded-xl
    card-shadow
    relative
    items-center
    px-4 py-2
    "
    >
      <p className="text-xl font-semibold translate-x-1">{title}</p>
      <div className="flex gap-x-2 mt-6">
        <img
          src={themeContext.theme ? ImageRupeeLightIcon : ImageRupeeDarkIcon}
          srcSet="RupeeImage Icon"
        />
        <p>{balance}</p>
      </div>

      <button
        className={`absolute 
      bottom-[20px] 
      left-[15%] 
      right-[15%] 
      bg-light-secondary 
      text-gray-50
      px-2
      py-1
      rounded-md
      hover:bg-light-secondary-hover
      hover:text-white
      transition
      ease-out
      delay-150
      `}
        onClick={onClick}
      >
        {butttonText}
      </button>
    </div>
  );
};
