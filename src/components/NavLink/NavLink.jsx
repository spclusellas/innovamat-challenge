import React from 'react'
import { Link } from 'react-router-dom'

import './NavLink.scss'

const NavLink = ({ children, path, isActive, con }) => {
	return (
		<div className='nav-link'>
			<Link className='nav-link-button' to={path}>
				{children}
			</Link>
		</div>
	)
}

export default NavLink
