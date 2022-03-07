import React from 'react'
import FavouritesDropDown from '../FavouritesDropDown/FavouritesDropDown'
import ResourceSection from '../ResourceSection/ResourceSection'

import './ResourceLayout.scss'

const ResourceLayout = ({ data, title, loading }) => {
	return (
		<div className='resource-layout'>
			<div className='resource-layout-header'>
				<span className='resource-layout-title'>{title}</span>
				<FavouritesDropDown />
			</div>
			<div className='resource-layout-main'>
				{data.map((section, i) => (
					<ResourceSection key={i} title={section.sectionName} resources={section.resources} />
				))}
			</div>
		</div>
	)
}

export default ResourceLayout
