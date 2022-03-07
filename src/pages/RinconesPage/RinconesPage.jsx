import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchRincones } from '../../store/slices/rinconesSlice'

import Layout from '../../components/Layout/Layout'
import ResourceLayout from '../../components/ResourceLayout/ResourceLayout'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

const RinconesPage = () => {
	const dispatch = useDispatch()
	const { rincones, status } = useSelector(state => state.rincones)

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchRincones())
		}
	}, [])
	console.log(rincones)
	return (
		<Layout>{status === 'loading' ? <LoadingSpinner /> : <ResourceLayout data={rincones} title='Rincones' />}</Layout>
	)
}

export default RinconesPage
