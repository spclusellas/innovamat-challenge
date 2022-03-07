import { React, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ResourceCard from '../ResoruceCard/ResourceCard'

import './ResorceSection.scss'

const ResourceSection = ({ title, resources }) => {
	const [sort, setSort] = useState(false)
	const [resourcesData, setResourceData] = useState(resources)

	const sortResources = () => {
		if (sort === 'asc' || !sort) {
			setSort('desc')
			setResourceData([].concat(resourcesData).sort((a, b) => (a.title > b.title ? 1 : -1)))
		} else if (sort === 'desc') {
			setSort('asc')
			setResourceData([].concat(resourcesData).sort((a, b) => (a.title < b.title ? 1 : -1)))
		}
	}

	return (
		<section className='resource-section'>
			<div className='resource-section-header'>
				<span className='resource-section-header-title'>{title}</span>
				<span className='resource-section-header-option' onClick={sortResources}>
					{!sort || sort === 'asc' ? 'Ordernar A-Z' : 'Ordernar Z-A'}
				</span>
			</div>
			<div className='resource-section-content'>
				{resourcesData.map(resource => (
					<ResourceCard key={uuidv4()} resource={resource} />
				))}
			</div>
		</section>
	)
}

export default ResourceSection
