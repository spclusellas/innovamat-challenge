import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as TalleresIcon } from '../../assets/talleres_icon.svg'
import { ReactComponent as RinconesIcon } from '../../assets/rincones_icon.svg'
import './Header.scss'

const Header = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<header className='header'>
			<div className='header-mobile'></div>

			<div className='header-desktop'>
				<nav className='nav'>
					<div
						className={`nav-item ${pathname === '/talleres' ? 'is-active' : ''}`}
						onClick={() => navigate('/talleres')}>
						<TalleresIcon className='nav-item-icon' />
						Talleres
					</div>
					<div
						className={`nav-item ${pathname === '/rincones' ? 'is-active' : ''}`}
						onClick={() => navigate('/rincones')}>
						<RinconesIcon className='nav-item-icon' />
						Rincones
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
