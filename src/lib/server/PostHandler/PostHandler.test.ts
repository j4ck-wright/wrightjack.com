import path from 'path';
import fs from 'fs/promises';
import { describe, it, expect, beforeAll } from 'vitest';

describe('Post Handler Test Suite', async () => {
	const posts: string[] = [];

	beforeAll(async () => {
		const postsPath = path.resolve('posts');
		const postFolders = await fs.readdir(postsPath);

		for (const folder of postFolders) {
			const markdownFilePath = path.join(postsPath, folder, `${folder}.md`);
			const markdownContent = await fs.readFile(markdownFilePath, 'utf-8');

			posts.push(markdownContent);
		}
	});

	it('No markdown files contain h1 (#) level header', () => {
		const regex = /\n#\s[a-zA-Z]/;
		for (let i = 0; i < posts.length; i++) {
			const post = posts[i];
			const match = post.match(regex);
			if (match) {
				throw new Error(
					`Blog .md files cannot contain a level one heading (#) as h1 is reserved only for the title`
				);
			}
			expect(match).toBeNull();
		}
	});
});
