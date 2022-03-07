import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTalleres } from '../../api/talleres'

export const fetchTalleres = createAsyncThunk(
	'talleres/fetchTalleres',
	async (payload, { dispatch, rejectWithValue }) => {
		try {
			const talleres = await getTalleres()

			return talleres
		} catch (err) {
			if (!err.response) {
				throw err
			}
			return rejectWithValue(err.response)
		}
	}
)

const talleresSlice = createSlice({
	name: 'talleres',
	initialState: {
		talleres: [],
		favourites: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: {
		[fetchTalleres.pending]: (state, action) => {
			state.status = 'loading'
		},
		[fetchTalleres.fulfilled]: (state, action) => {
			state.status = 'success'
			state.talleres = action.payload
		},
		[fetchTalleres.rejected]: (state, action) => {
			state.status = 'failed'
			state.talleres = action.payload
		},
	},
})

export default talleresSlice.reducer
