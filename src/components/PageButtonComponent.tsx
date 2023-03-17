import type { FC } from 'react'
import classNames from 'classnames'

interface PageButtonProperties {
	currentPage: number
	end: number
	text: string
	style: object
	disabled: number
	onChangePage: () => void
}

const PageButtonComponent: FC<PageButtonProperties> = ({
	currentPage,
	end,
	text,
	style,
	disabled,
	onChangePage
}): JSX.Element => {
	const buttonClassName = classNames({ ...style })
	return (
		<button
			className={buttonClassName}
			type='button'
			key={end}
			onClick={(): void => onChangePage()}
			disabled={currentPage === disabled}
		>
			{text}
		</button>
	)
}

export default PageButtonComponent
