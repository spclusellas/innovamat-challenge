import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	favourites: [],
	visible: false,
}

const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	reducers: {
		addFavourite: (state, action) => {
			state.favourites = state.favourites.concat(action.payload)
		},
		deleteFavourite: (state, action) => {
			state.favourites = state.favourites.filter(fav => fav.uuid !== action.payload.uuid)
		},
		toggleFavVisibility: state => {
			state.visible = !state.visible
		},
	},
})

export const { addFavourite, deleteFavourite, toggleFavVisibility } = favouritesSlice.actions

export default favouritesSlice.reducer
