import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ResourceDetailLayout from '../../components/ResourceDetailLayout/ResourceDetailLayout'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
const ResoruceDetailPage = ({ fetchFunction }) => {
	const [loading, setLoading] = useState(true)
	const [resource, setResource] = useState(null)

	const { id } = useParams

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true)
				const data = await fetchFunction(id)
				setResource(data)
				setLoading(false)
			} catch (error) {
				setLoading(false)
				console.error(error)
			}
		}
		fetchData()
	}, [])

	return <React.Fragment>{loading ? <LoadingSpinner /> : <ResourceDetailLayout resource={resource} />}</React.Fragment>
}

export default ResoruceDetailPage
