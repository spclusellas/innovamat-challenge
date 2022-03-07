import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as BackButtonIcon } from '../../assets/back_button_icon.svg'

import './ResourceDetailLayout.scss'

const ResourceDetailLayout = ({ resource }) => {
	const navigate = useNavigate()

	return (
		<React.Fragment>
			<header className='resource-detail-header'>
				<div className='back-button' onClick={() => navigate(-1)}>
					<BackButtonIcon />
				</div>
				<div className='detail-title'>
					<span>{resource.title}</span>
				</div>
			</header>
			<main className='resource-detail-main'>
				<div className='video-container'>
					<iframe
						className='embeded-video'
						width='100%'
						src={`https://www.youtube.com/embed/${resource.videoId}`}
						scalesPageToFit={true}
						scrollEnabled={false}
						automaticallyAdjustContentInsets={false}
						mediaPlaybackRequiresUserAction={true}
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						title='Embedded youtube'
					/>
				</div>
				<div className='text-container' dangerouslySetInnerHTML={{ __html: resource.description }} />
			</main>
		</React.Fragment>
	)
}

export default ResourceDetailLayout
