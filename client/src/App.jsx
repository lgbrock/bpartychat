import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import './index.css';
import Chat from './Chat';

const App = () => {
	return (
		<div>
			<Navbar />
			<Chat />;
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));
