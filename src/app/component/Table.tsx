import React from "react";
import Button from "./Button";
import usePagination from "../../hook/usePagination";

const CustomTable: React.FC<{
	headers: string[];
	tableItems: { [key: string]: string }[];
}> = ({ headers, tableItems }) => {
	const {
		currentPageData,
		pageCount,
		currentPage,
		goToNextPage,
		goToPreviousPage,
	} = usePagination(tableItems);
	return (
		<div className="p-4 bg-white border border-gray-100 rounded-xl shadow sm:p-6">
			<div className="relative overflow-x-auto border rounded-xl border-gray-100 shadow-sm">
				<table className="w-full text-lg text-left text-gray-500">
					<thead className="text-gray-700 uppercase bg-gray-50">
						<tr>
							{headers.map((title, i) => (
								<th key={i} scope="col" className="px-6 py-3">
									{title}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="table-row-group bg-gray-100">
						{currentPageData?.map((data, i) => (
							<tr className="bg-white border-t border-gray-100" key={i}>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
								>
									{data.firstName}
								</th>
								<td className="px-6 py-4">{data.lastName}</td>
								<td className="px-6 py-4">{data.phoneNumber}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="mt-4 flex justify-end gap-4 items-center">
				<span className="font-semibold mb-2 text-xs">
					{currentPage} of {pageCount}
				</span>

				<div className="inline-flex rounded-md shadow-sm gap-2">
					{/* <Button
						className={`${
							currentPage === 1 ? "bg-gray-100 text-gray-200" : ""
						} " border"`}
						handleSubmit={goToPreviousPage}
						disabled={currentPage === 1}
					/> */}
					{/* 
					<Button
						className={`${
							currentPage === pageCount ? "bg-gray-100 text-gray-200" : "border"
						} text-black`}
						// handleSubmit={goToNextPage}
						// disabled={currentPage === pageCount}
					/> */}
				</div>
			</div>
		</div>
	);
};

export default CustomTable;
