import React from "react";

interface PropItem {
  name: string;
  description: string;
  default: string;
}

interface PropsTableProps {
  props: PropItem[];
}

export const PropsTable: React.FC<PropsTableProps> = ({ props }) => {
  return (
    <div className="mt-12 w-full overflow-x-auto">
      <table className="w-full border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden text-sm">
        <thead className="bg-gray-100 dark:bg-gray-900 backdrop-blur-sm">
          <tr>
            <th className="px-6 py-3 text-left text-gray-800 dark:text-gray-100 font-semibold uppercase tracking-wide text-xs">
              Prop
            </th>
            <th className="px-6 py-3 text-left text-gray-800 dark:text-gray-100 font-semibold uppercase tracking-wide text-xs">
              Description
            </th>
            <th className="px-6 py-3 text-left text-gray-800 dark:text-gray-100 font-semibold uppercase tracking-wide text-xs">
              Default
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, index) => (
            <tr
              key={prop.name}
              className={`transition-colors ${
                index % 2 === 0
                  ? "bg-white dark:bg-gray-800"
                  : "bg-gray-50 dark:bg-gray-700"
              } hover:bg-pulse-500/10`}
            >
              <td className="px-6 py-3 text-gray-900 dark:text-gray-100 font-medium whitespace-nowrap">
                {prop.name}
              </td>
              <td className="px-6 py-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                {prop.description}
              </td>
              <td className="px-6 py-3 text-gray-500 dark:text-gray-400 italic whitespace-nowrap">
                {prop.default}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic text-center">
        • Generated for better developer documentation •
      </div>
    </div>
  );
};
