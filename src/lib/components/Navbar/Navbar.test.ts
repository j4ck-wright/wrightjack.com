import { render, screen } from '@testing-library/svelte';
import { describe, it, expect, beforeEach } from 'vitest';

import Navbar from './Navbar.svelte';

describe('Navbar component test suite', () => {
	beforeEach(() => {
		render(Navbar);
	});

	it('Navbar renders correctly', () => {
		expect(screen.queryByText('wrightjack.com')).toBeTruthy();
		expect(screen.queryByText('home')).toBeTruthy();
		expect(screen.queryByText('posts')).toBeTruthy();
		expect(screen.queryByText('projects')).toBeTruthy();

		const buttons = screen.getAllByRole('link');
		expect(buttons).toHaveLength(3);
	});

	it('Navbar buttons have correct hrefs', () => {
		expect((screen.getByText('home') as HTMLAnchorElement).href).toContain('/');
		expect((screen.getByText('posts') as HTMLAnchorElement).href).toContain('/posts');
		expect((screen.getByText('projects') as HTMLAnchorElement).href).toContain('/projects');
	});
});
