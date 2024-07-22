import { useState } from "react";

const usePagination = (data: any[], initialPage = 1, perPage = 10) => {
	const [currentPage, setCurrentPage] = useState(initialPage);

	const offset = (currentPage - 1) * perPage;

	const currentPageData = data?.slice(offset, offset + perPage);

	const pageCount = Math.ceil(data?.length / perPage);

	const goToNextPage = () =>
		setCurrentPage((page) => Math.min(page + 1, pageCount));

	const goToPreviousPage = () =>
		setCurrentPage((page) => Math.max(page - 1, 1));

	return {
		currentPageData,
		pageCount,
		currentPage,
		goToNextPage,
		goToPreviousPage,
	};
};

export default usePagination;
