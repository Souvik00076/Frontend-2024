import { FC, useState } from "react";
import { GenericCard } from "../cards";
import { FinanceModal } from "../modals";
import { TModalHeader } from "../../@types";
type TDashboardWrapper = {
  loading: boolean;
  currentBalance: number;
  totalIncome: number;
  totalExpense: number;
};
export const DashboardCardWrapper: FC<TDashboardWrapper> = ({
  loading,
  totalIncome,
  totalExpense,
  currentBalance,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalHeader, setModalHeader] = useState<TModalHeader>("Add Income");

  const onClick = (flag: number) => {
    if (flag === 0) {
      return;
    } else if (flag === 1) {
      setModalHeader("Add Income");
    } else setModalHeader("Add Expense");

    setShowModal(true);
  };

  return (
    <>
      <div className="flex justify-evenly mt-8">
        <GenericCard
          title={"Current Balance"}
          butttonText={"Reset Balance"}
          onClick={() => onClick(0)}
          balance={currentBalance}
          loading={loading}
        />

        <GenericCard
          title={"Total Income"}
          butttonText={"Reset Balance"}
          onClick={() => onClick(1)}
          balance={totalIncome}
          loading={loading}
        />

        <GenericCard
          title={"Total Expense"}
          butttonText={"Reset Balance"}
          onClick={() => onClick(2)}
          balance={totalExpense}
          loading={loading}
        />
      </div>
      {showModal && (
        <FinanceModal
          onClose={() => setShowModal(false)}
          modalHeader={modalHeader}
        />
      )}
    </>
  );
};
