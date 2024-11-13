import React from 'react';
import Content from './components/Content/Content.js'
import Image from './components/Image/Image.js'
import Header from './components/Header/Header.js'
import GoodsGallery from './components/GoodsGallery/GoodsGallery.js'

function App() {
	return <div>
		<Header />
		<Content />
		<Image />
		<GoodsGallery />
	</div>;
}

export default App;