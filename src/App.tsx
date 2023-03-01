import type { ReactElement } from 'react'
import Sidebar from 'components/SideBar'
import { Routes, Route } from 'react-router-dom'

export default function App(): ReactElement {
	return (
		<Routes>
			<Route path='/' element={<Sidebar />} />
		</Routes>
	)
}
