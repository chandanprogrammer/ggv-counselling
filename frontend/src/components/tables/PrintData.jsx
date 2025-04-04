import React from "react";

const PrintData = (props) => {
  const cuetData = props.data;
  const header = props.header;

  return (
    <>
      {/* ----------- Data Tables ----------- */}
      <div className="flex flex-col max-h-[78vh]  bg-white p-3 rounded-2xl">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle overflow-hidden">
            <table className="min-w-full divide-y divide-gray-700 tracking-wide">
              {/* ----------- Table header ----------- */}

              <thead className="bg-indigo-300 ">
                <tr className="text-left text-sm text-stone-950 uppercase">
                  {props.header.map((value, index) => (
                    <th className="px-6 py-3 " key={index}>
                      {value}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* ----------- Table Body ----------- */}

              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700 max-h-full ">
                {cuetData.map((row, index) => (
                  <tr
                    key={index}
                    className="even:bg-gray-200 odd:bg-white whitespace-nowrap text-sm font-medium text-gray-800"
                  >
                    <td className="px-6 py-3">{index + 1}</td>
                    <td className="px-6 py-3">{row.formNumber}</td>
                    <td className="px-6 py-3">{row.applicantName}</td>
                    <td className="px-6 py-3">{row.fatherName}</td>
                    <td className="px-6 py-3">{row.motherName}</td>
                    <td className="px-6 py-3">{row.category}</td>
                    <td className="px-6 py-3">{row.gender}</td>
                    <td className="px-6 py-3">{row.email}</td>
                    <td className="px-6 py-3">{row.mobile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintData;
