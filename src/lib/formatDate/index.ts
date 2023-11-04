const nth = (d: number) => {
	if (d > 3 && d < 21) return 'th';
	switch (d % 10) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
};

export function formatDate(date: string) {
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const localeDate = dateToFormat.toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	});

	const day = dateToFormat.getDate();
	const dayEnding = nth(day);
	const formattedDate = localeDate.replace(day.toString(), `${day}${dayEnding}`);

	return formattedDate;
}
