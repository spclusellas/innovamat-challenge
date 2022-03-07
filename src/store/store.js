import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from './slices/favouritesSlice'
import rinconesReducer from './slices/rinconesSlice'
import talleresReducer from './slices/talleresSlice'

export default configureStore({
	reducer: {
		talleres: talleresReducer,
		rincones: rinconesReducer,
		favourites: favouritesReducer,
	},
})
