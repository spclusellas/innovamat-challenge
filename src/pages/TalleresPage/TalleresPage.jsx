import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchTalleres } from '../../store/slices/talleresSlice'

import Layout from '../../components/Layout/Layout'
import ResourceLayout from '../../components/ResourceLayout/ResourceLayout'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

const TalleresPage = () => {
	const dispatch = useDispatch()
	const { talleres, status } = useSelector(state => state.talleres)

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchTalleres())
		}
	}, [])

	return (
		<Layout>{status === 'loading' ? <LoadingSpinner /> : <ResourceLayout data={talleres} title='Talleres' />}</Layout>
	)
}

export default TalleresPage
