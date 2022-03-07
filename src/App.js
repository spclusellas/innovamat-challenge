import './App.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import TalleresPage from './pages/TalleresPage/TalleresPage'
import RinconesPage from './pages/RinconesPage/RinconesPage.jsx'
import ResoruceDetailPage from './pages/ResourceDetailPage/ResoruceDetailPage'

import { getRinconDetail } from './api/rincones'
import { getTallerDetail } from './api/talleres'
import Layout from './components/Layout/Layout'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigate to='/talleres' />} />
				<Route path='talleres' element={<TalleresPage />} />
				<Route path='talleres/:id' element={<ResoruceDetailPage fetchFunction={getTallerDetail} />} />
				<Route path='rincones' element={<RinconesPage />} />
				<Route path='rincones/:id' element={<ResoruceDetailPage fetchFunction={getRinconDetail} />} />
				<Route
					path='*'
					element={
						<Layout>
							<main style={{ padding: '1rem', marginTop: '80px' }}>
								<p>There's nothing here!</p>
							</main>
						</Layout>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
