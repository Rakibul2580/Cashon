import React from "react";
import { TableData } from "../../Data/Table";

const History = () => {
  return (
    <div className="w-[97%] pl-5">
      <div className="flex justify-between my-5">
        <h1 className="text-xl font-semibold">Transaction History</h1>
        <button className="font-semibold text-blue-500">Show All</button>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full !text-gray-400">
                <thead className="bg-white h-14 border-y-2 ">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">date</th>
                    <th scope="col">Catergory</th>
                    <th scope="col">Payment Method</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {TableData.map((item, i) => (
                    <tr key={i} className="text-sm">
                      <td className="pl-10">{item.id}</td>
                      <td className="flex items-center justify-start py-5 -mr-10 space-x-3">
                        <div className="w-10 h-10 bg-gray-500 rounded-xl"></div>
                        <div className="flex flex-col">
                          <span>{item.text}</span>
                          <span className="font-semibold text-black">
                            {item.name}
                          </span>
                        </div>
                      </td>
                      <td>{item.price}</td>
                      <td>{item.data}</td>
                      <td>{item.catergory}</td>
                      <td>{item.method}</td>
                      <td className="flex items-center !-mb-10 space-x-3">
                        <div
                          className={`h-2 w-2 rounded-full ${item.bg}`}
                        ></div>
                        <span className={`${item.textColor} text-sm`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
