import { ChangeEvent, FC } from "react";
import { TextInput } from "../inputs";
type TDashboardTransactionWrapper = {
  setSearch: (arg: string) => void;
}
export const DashboardTransactionWrapper: FC<TDashboardTransactionWrapper> = ({
  setSearch
}) => {

  return <div className="flex items-center justify-evenly ">
    <TextInput
      style={" max-w-4xl"}
      onStateChange={(e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
      }}
      placeHolder={"Search here"}
    />

    <div className="dropdown dropdown-bottom">
      <div tabIndex={0} role="button" className="btn m-1">
        All Records
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-2/5 p-2 shadow"
      >
        <li>Income</li>
        <li>Expense</li>
      </ul>
    </div>
  </div>
}
