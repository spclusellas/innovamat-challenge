import React from 'react'

import './LoadingSpinner.scss'

const LoadingSpinner = () => {
	return (
		<div className='lds-ring'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default LoadingSpinner
