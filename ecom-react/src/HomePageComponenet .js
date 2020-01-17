import React from 'react';
import './homepage.styles.scss'

const HomePageComponenet = () => {
	return (
		<div className='homepage'>
			<div className='directory-menu '>
				<div className='menu-item '>
					<div className='content'>
						<h1 className='title' >Hats</h1>
						<span className='subtitle' >shop</span>
					</div>
				</div>

				<div className='menu-item '>
					<div className='content'>
						<h1 className='title' >jakets</h1>
						<span className='subtitle' >shop</span>
					</div>
				</div>
				<div className='menu-item '>
					<div className='content'>
						<h1 className='title' >snekers</h1>
						<span className='subtitle' >shop</span>
					</div>
				</div>
				<div className='menu-item '>
					<div className='content'>
						<h1 className='title' >women</h1>
						<span className='subtitle' >shop</span>
					</div>
				</div>
				<div className='menu-item '>
					<div className='content'>
						<h1 className='title' >men</h1>
						<span className='subtitle' >shop</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePageComponenet;
