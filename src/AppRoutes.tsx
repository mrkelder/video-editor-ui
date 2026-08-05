import { BrowserRouter, Route, Routes } from 'react-router'
import { HomePage } from '@pages/HomePage'
import { NotFoundPage } from '@pages/NotFoundPage'
import { LoginPage } from '@pages/LoginPage'

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	)
}
