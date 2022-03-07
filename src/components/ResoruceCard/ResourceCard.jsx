import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import './ResourceCard.scss'
import FavouriteToggler from '../FavouriteToggler/FavouriteToggler'

const ResourceCard = ({ resource }) => {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const { title, image, description } = resource

	const goToDetail = () => navigate(`${pathname}/${resource.id}`)

	return (
		<div className='resource-card'>
			<div className='resource-card-img' onClick={goToDetail}>
				<img src={image} alt={title} className='resource-img' />
			</div>

			<div className='resource-card-body' onClick={goToDetail}>
				<div className='resource-title-container'>
					<span className='resource-title'>{title}</span>
				</div>
				<div className='resource-card-description'>
					<span className='resource-description'> {description} </span>
				</div>
			</div>

			<div className='resource-card-fav'>
				<FavouriteToggler resource={resource} />
			</div>
		</div>
	)
}

export default ResourceCard
