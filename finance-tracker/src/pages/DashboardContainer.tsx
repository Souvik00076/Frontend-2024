import { FC, useEffect, useState } from "react";
import { DashboardNav } from "../components";
import { DashboardCardWrapper } from "../components/dashboard-components";
import { DashboardTransactionWrapper } from "../components/dashboard-components/DashboardTransactionWrapper";


export const DashboardContainer: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentBalance, setCurrentBalance] = useState<number>(0);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [totalExpense, setTotalExpense] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (search.length === 0) return;
    console.log(search);
  }, [search]);

  return (
    <>
      <DashboardNav />
      <DashboardCardWrapper
        currentBalance={currentBalance}
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        loading={loading}
      />
      <DashboardTransactionWrapper
        setSearch={(arg: string) => setSearch(arg)}
      />
    </>
  );
};
