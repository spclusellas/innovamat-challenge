import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FavouriteResourceCard from '../FavouriteResourceCard/FavouriteResourceCard'

import { arrayGroupBy } from '../../utils/helpers'
import { toggleFavVisibility } from '../../store/slices/favouritesSlice'
import { ReactComponent as EyeIcon } from '../../assets/eye_icon.svg'

import './FavouritesDropDown.scss'

const showFavCards = favs => {
	const { Rincones, Talleres } = arrayGroupBy(favs, 'tag')
	return (
		<div>
			{Rincones?.length ? (
				<div>
					<span className='group-title'>Rincones</span>
					{Rincones?.map(f => (
						<FavouriteResourceCard key={f.idf} fav={f} />
					))}
				</div>
			) : (
				''
			)}
			{Talleres?.length ? (
				<div>
					<span className='group-title'>Talleres</span>
					{Talleres?.map(f => (
						<FavouriteResourceCard key={f.idf} fav={f} />
					))}
				</div>
			) : (
				''
			)}
		</div>
	)
}

const FavouritesDropDown = () => {
	const dispatch = useDispatch()
	const { favourites, visible } = useSelector(state => state.favourites)

	return (
		<div className='view-favourites'>
			<div className='favourite-toggler' onClick={() => dispatch(toggleFavVisibility())}>
				<EyeIcon />
				<span>{visible ? 'Ocultar Favoritos' : 'Ver Favoritos'}</span>
			</div>

			{visible ? (
				<div className='favourites-drop-down-list'>
					{favourites.length ? showFavCards(favourites) : '¡No tienes favoritos!'}
				</div>
			) : (
				''
			)}
		</div>
	)
}

export default FavouritesDropDown
