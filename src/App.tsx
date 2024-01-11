import { useEffect, useState } from 'react';
import { socket } from './assets/api';

import { IJournalItem } from './interfaces';
import LogItem from './components/log-item';

import './assets/_normalize.scss';
import './style.scss';

const App = () => {
	const [items, setItems] = useState<IJournalItem[]>([]);

	useEffect(() => {
		socket.on('connect', () => {
			console.log('Connected to server');
		});

		socket.on('toggle', (item: IJournalItem) => {
			setItems((prev) => [...prev, item]);
		});

		socket.on('disconnect', () => {
			console.log('Disconnected from server');
		});
	}, []);

	return (
		<section className='container'>
			<h1>Button Logger</h1>
			<table>
				<header className='table-row'>
					<div className='table-cell'>id</div>
					<div className='table-cell'>author</div>
					<div className='table-cell'>date</div>
					<div className='table-cell'>status</div>
				</header>

				{items.length > 0 && (
					<div className='table-items__scrollable'>
						{items.map((note) => (
							<LogItem key={note.id} {...note} />
						))}
					</div>
				)}
			</table>
		</section>
	);
};

export default App;
