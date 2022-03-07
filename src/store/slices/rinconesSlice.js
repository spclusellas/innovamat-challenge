import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getRincones } from '../../api/rincones'

export const fetchRincones = createAsyncThunk('rincones/fetchRincones', async () => {
	const rincones = await getRincones()
	return rincones
})
const initialState = {
	rincones: [],
	favourites: [],
	status: 'idle',
	error: null,
}

const rinconesSlice = createSlice({
	name: 'rincones',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchRincones.pending]: (state, action) => {
			state.status = 'loading'
		},
		[fetchRincones.fulfilled]: (state, action) => {
			state.status = 'success'
			state.rincones = state.rincones.concat(action.payload)
		},
		[fetchRincones.rejected]: (state, action) => {
			state.status = 'failed'
			state.rincones = action.payload
		},
	},
})

export default rinconesSlice.reducer
