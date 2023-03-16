import type { FC } from 'react'

interface PaginationProperties {
	currentPage: number
	pageSize: number
	totalItems: number
	onChangePage: (page: number) => void
}

const STYLE = 'space-x-2.5  mb-2 text-2xl font-bold tracking-tight'
const STYLE_BUTTON =
	'hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 active:text-black disabled:text-gray-900'

const PaginationComponent: FC<PaginationProperties> = ({
	currentPage,
	pageSize,
	totalItems,
	onChangePage
}): JSX.Element => {
	// Calculate the total number of pages
	const totalPages: number = Math.ceil(totalItems / pageSize)

	const add = 1
	// Generate an array of page numbers to display
	const pages: number[] = Array.from(
		{ length: totalPages },
		(_, index) => index + add
	)
	const START = 0
	const END = totalPages + add

	return (
		<div className={`${STYLE}`}>
			<button
				className={`${STYLE_BUTTON}`}
				type='button'
				key={START}
				onClick={(): void => onChangePage(currentPage - add)}
				disabled={currentPage === add}
			>
				Back
			</button>
			{pages.map(
				(page: number): JSX.Element => (
					<button
						className={`${STYLE_BUTTON}`}
						type='button'
						key={page}
						onClick={(): void => onChangePage(page)}
						disabled={currentPage === page}
					>
						{page}
					</button>
				)
			)}
			<button
				className={`${STYLE_BUTTON}`}
				type='button'
				key={END}
				onClick={(): void => onChangePage(currentPage + add)}
				disabled={currentPage === totalPages}
			>
				Next
			</button>
		</div>
	)
}

export default PaginationComponent
