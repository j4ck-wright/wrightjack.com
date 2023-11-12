import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { Hero } from '..';

describe('Hero Component Test Suite', () => {
	it('Hero renders correctly', () => {
		render(Hero);
		screen.getByText('Hi,');
		screen.getByText('Jack Wright');
	});

	it('Matches snapshot', async () => {
		let snapshot = render(Hero);
		await expect(snapshot).toMatchFileSnapshot('snapshot/snapshot.html');
	});
});
