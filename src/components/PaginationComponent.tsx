import type { FC } from 'react'
import PageButtonComponent from './PageButtonComponent'

interface PaginationProperties {
	currentPage: number
	pageSize: number
	totalItems: number
	onChangePage: (page: number) => void
}

const STYLE = 'space-x-2.5  mb-2 text-2xl font-bold tracking-tight'
const STYLE_BUTTON =
	'hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 active:text-black disabled:text-gray-900'

const styleButton = {
	'hover:bg-gray-100': true,
	'dark:bg-gray-800': true,
	'dark:border-gray-700': true,
	'dark:hover:bg-gray-700': true,
	'active:text-black': true,
	'disabled:text-gray-900': true
}

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
			<PageButtonComponent
				currentPage={currentPage}
				end={START}
				text='Back'
				style={styleButton}
				disabled={add}
				onChangePage={(): void => onChangePage(currentPage - add)}
			/>
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
			<PageButtonComponent
				currentPage={currentPage}
				end={END}
				text='Next'
				style={styleButton}
				disabled={totalPages}
				onChangePage={(): void => onChangePage(currentPage + add)}
			/>
		</div>
	)
}

export default PaginationComponent
