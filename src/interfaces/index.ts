export interface IJournalItem {
	id: string;
	host: string;
	hostname: string;
	date: string;
	status: 'on' | 'off';
}
