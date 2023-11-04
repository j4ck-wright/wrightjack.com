import fs from 'fs/promises';
import path from 'path';
import { MDtoHTML } from './Markdown';

const parseMarkdownFile = async (postSlug: string) => {
	try {
		const postPath = path.resolve(`posts/${postSlug}/${postSlug}.md`);
		const markdownContent = await fs.readFile(postPath, 'utf-8');
		return MDtoHTML(markdownContent);
	} catch (e) {
		throw new Error(`Error parsing ${postSlug}.md`);
	}
};

export async function getPost(slug: string) {
	return parseMarkdownFile(slug);
}
