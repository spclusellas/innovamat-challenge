import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import FavouriteResourceCard from '../FavouriteResourceCard/FavouriteResourceCard'

import { arrayGroupBy } from '../../utils/helpers'
import { toggleFavVisibility } from '../../store/slices/favouritesSlice'
import { ReactComponent as EyeIcon } from '../../assets/eye_icon.svg'

import './FavouritesDropDown.scss'

const groupAndShowFavs = favs => {
	const groupedFavs = arrayGroupBy(favs, 'tag')
	let jsx = []
	for (const group in groupedFavs) {
		jsx.push(
			<div>
				<span className='group-title'>{group}</span>
				{groupedFavs[group].map(f => (
					<FavouriteResourceCard key={uuidv4()} fav={f} />
				))}
			</div>
		)
	}
	return jsx
}

const FavouritesDropDown = () => {
	const dispatch = useDispatch()
	const { favourites, visible } = useSelector(state => state.favourites)

	return (
		<div className='view-favourites'>
			<div
				className='favourite-toggler'
				onClick={() => dispatch(toggleFavVisibility())}
				onBlur={() => dispatch(toggleFavVisibility())}>
				<EyeIcon />
				<span>{visible ? 'Ocultar Favoritos' : 'Ver Favoritos'}</span>
			</div>

			{visible ? (
				<div className='favourites-drop-down-list'>
					{favourites.length ? groupAndShowFavs(favourites) : '¡No tienes favoritos!'}
				</div>
			) : (
				''
			)}
		</div>
	)
}

export default FavouritesDropDown
