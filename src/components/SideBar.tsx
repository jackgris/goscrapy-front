import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MdOutlineDashboard } from 'react-icons/md'
import { RiSettings4Line } from 'react-icons/ri'
import { TbReportAnalytics } from 'react-icons/tb'
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import { FiMessageSquare, FiFolder, FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ProductList from 'components/ProductsList'
import type { Product } from 'components/ProductComponent'
import data from '../../data/products.json'

const properties: Product[] = data.map(p => {
	const product = {
		name: p.Name,
		price: p.Price,
		description: p.Description
	}

	return product
})

const Sidebar = (): JSX.Element => {
	const menus = [
		{ name: 'dashboard', link: '/', icon: MdOutlineDashboard },
		{ name: 'user', link: '/', icon: AiOutlineUser },
		{ name: 'messages', link: '/', icon: FiMessageSquare },
		{ name: 'analytics', link: '/', icon: TbReportAnalytics, margin: true },
		{ name: 'File Manager', link: '/', icon: FiFolder },
		{ name: 'Cart', link: '/', icon: FiShoppingCart },
		{ name: 'Saved', link: '/', icon: AiOutlineHeart, margin: true },
		{ name: 'Setting', link: '/', icon: RiSettings4Line }
	]
	const [open, setOpen] = useState(true)

	const MARGIN =
		"menu.margin && 'mt-5' group flex items-center gap-3.5  rounded-md p-2 text-sm font-medium hover:bg-gray-80"
	const TRANSITION_TIME = 3
	const TRANSITION =
		"open ? 'whitespace-pre duration-500'  : 'translate-x-28 overflow-hidden opacity-0'"
	const HIDE =
		'open && hidden absolute left-48 w-0 overflow-hidden whitespace-pre rounded-md bg-white px-0 py-0 font-semibold text-gray-900 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300'
	const TITLE =
		'p-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'

	const onOpenCloseButton = (): void => setOpen(!open)

	return (
		<section className='flex'>
			<div
				className={`min-h-screen bg-[#0e0e0e] ${
					open ? 'w-72' : 'w-16'
				} px-4 text-gray-100 duration-500`}
			>
				<div className='flex justify-end py-3'>
					<HiMenuAlt3
						size={26}
						className='cursor-pointer'
						onClick={onOpenCloseButton}
					/>
				</div>
				<div className='relative mt-4 flex flex-col gap-4'>
					{menus.map((menu, index) => (
						<Link to={menu.link} key={menu.name} className={`${MARGIN}`}>
							<div>{React.createElement(menu.icon, { size: '20' })}</div>
							<h2
								style={{ transitionDelay: `${index + TRANSITION_TIME}00ms` }}
								className={`${TRANSITION}`}
							>
								{menu.name}
							</h2>
							<h2 className={`${HIDE}`}>{menu.name}</h2>
						</Link>
					))}
				</div>
			</div>
			<div>
				<div className={`${TITLE}`}>GoScrapyFront</div>
				<ProductList products={properties} />
			</div>
		</section>
	)
}

export default Sidebar
