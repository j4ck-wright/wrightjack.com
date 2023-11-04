import { describe, it, expect } from 'vitest';
import { formatDate } from '.';

describe('formateDate test suite', () => {
	it('Returns the correct formatted data in dd-mm-yyy format when inputting yyyy-mm-dd', () => {
		expect(formatDate('2023-01-01')).toBe('1st Jan 2023');
		expect(formatDate('2023-02-01')).toBe('1st Feb 2023');
		expect(formatDate('2020-04-08')).toBe('8th Apr 2020');
		expect(formatDate('2024-10-22')).toBe('22nd Oct 2024');
		expect(formatDate('2024-03-03')).toBe('3rd Mar 2024');
		expect(formatDate('2010-10-10')).toBe('10th Oct 2010');
	});

	it('Returns correct formatted date in dd-mm-yyyy format when inputting yyyy/mm/dd', () => {
		expect(formatDate('2023/01/01')).toBe('1st Jan 2023');
		expect(formatDate('2023/02/01')).toBe('1st Feb 2023');
		expect(formatDate('2020/04/08')).toBe('8th Apr 2020');
		expect(formatDate('2024/10/22')).toBe('22nd Oct 2024');
		expect(formatDate('2024/03/03')).toBe('3rd Mar 2024');
		expect(formatDate('2010/10/10')).toBe('10th Oct 2010');
	});
});
