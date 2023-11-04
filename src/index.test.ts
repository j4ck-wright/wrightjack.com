import { describe, it, expect } from 'vitest';
import { Path } from '$env/static/private';

console.log(Path);

describe('sum test', () => {
	it('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});
});
