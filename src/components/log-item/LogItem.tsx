import clsx from 'clsx';
import { IJournalItem } from '../../interfaces';

const LogItem = ({ id, host, hostname, date, status }: IJournalItem) => {
	return (
		<div className='table-row'>
			<div className='table-cell'>{id}</div>
			<div className='table-cell'>{host || hostname}</div>
			<div className='table-cell'>{date}</div>
			<div className='table-cell'>
				<p className={clsx('table-body', { [status]: !!status })}>{status}</p>
			</div>
		</div>
	);
};

export default LogItem;
