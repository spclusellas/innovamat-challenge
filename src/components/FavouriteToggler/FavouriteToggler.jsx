import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addFavourite, deleteFavourite } from '../../store/slices/favouritesSlice'

import { ReactComponent as FavIconOutline } from '../../assets/fav_icon_outline.svg'
import { ReactComponent as FavIconFilled } from '../../assets/fav_icon_filled.svg'

import './FavouriteToggler.scss'

const FavouriteToggler = ({ resource }) => {
	const dispatch = useDispatch()
	const { favourites } = useSelector(state => state.favourites)

	const isFavourite = favourites.some(f => f.uuid === resource.uuid && f.tag === resource.tag)

	return (
		<div className={`favourite-toggler ${isFavourite ? 'is-fav' : ''}`}>
			{isFavourite ? (
				<FavIconFilled className='fav-icon' onClick={() => dispatch(deleteFavourite(resource))} />
			) : (
				<FavIconOutline className='fav-icon' onClick={() => dispatch(addFavourite(resource))} />
			)}

			<span>Favorito</span>
		</div>
	)
}

export default FavouriteToggler
