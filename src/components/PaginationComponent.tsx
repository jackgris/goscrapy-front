import type { FC } from 'react'

interface PaginationProperties {
	currentPage: number
	pageSize: number
	totalItems: number
	onChangePage: (page: number) => void
}

const STYLE = 'p-5'

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

	return (
		<div className={`${STYLE}`}>
			{pages.map(
				(page: number): JSX.Element => (
					<button
						type='button'
						key={page}
						onClick={(): void => onChangePage(page)}
						disabled={currentPage === page}
					>
						{page}
					</button>
				)
			)}
		</div>
	)
}

export default PaginationComponent
