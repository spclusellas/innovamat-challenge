import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { deleteFavourite } from '../../store/slices/favouritesSlice'

import './FavouriteResourceCard.scss'

const FavouriteResourceCard = ({ fav }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const goToDetail = () => navigate(`/${fav.tag.toLowerCase()}/${fav.id}`)

	return (
		<div className='drop-down-list-card'>
			<div className='card-img' onClick={goToDetail}>
				<img src={fav.image} alt={fav.title} />
			</div>
			<div className='card-title'>{fav.title}</div>
			<div className='card-opt' onClick={() => dispatch(deleteFavourite(fav))}>
				X
			</div>
		</div>
	)
}

export default FavouriteResourceCard
