import { FC } from "react";
import { DASHBOARD_TABLE_HEADERS } from "../../constants";
import { DUMMY_DATA } from "../../constants/dummyData";
export const DashboardTable: FC = () => {
  return <table className="container mx-auto h-[500px] ">
    <thead >
      <tr className="flex items-center justify-evenly bg-gray-200 py-2 rounded-xl">
        {
          DASHBOARD_TABLE_HEADERS.map(header => {
            return <th>{header}</th>
          })
        }
      </tr>
    </thead>
    <tbody className="table-border">
      {
        DUMMY_DATA.map(data => {
          return <tr className={`flex items-center justify-evenly   border-t-2 py-2`}>
            <td>{data.Name}</td>
            <td>{data.amount}</td>
            <td>{data.Tag}</td>
            <td>{data["Type "]}</td>
            <td>"hello"</td>
          </tr>
        })
      }
    </tbody>
  </table>

}
