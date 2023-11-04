import { unified } from 'unified';

import toHtml from 'rehype-stringify';
import matter from 'gray-matter';
import parseHtmlAndMarkdown from 'rehype-raw';
import fromMarkdownToHtml from 'remark-rehype';

import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import rehypeCodeTitles from 'rehype-code-titles';
import fromMarkdown from 'remark-parse';
import rehypePrism from 'rehype-prism-plus';

export const MDtoHTML = async (markdown: string) => {
	const { content, data } = matter(markdown);
	const result = await unified()
		.use(fromMarkdown)
		.use([remarkGfm, remarkSmartypants])
		.use(fromMarkdownToHtml, { allowDangerousHtml: true })
		.use(rehypeCodeTitles)
		.use(rehypePrism)
		.use(parseHtmlAndMarkdown)
		.use(toHtml)
		.process(content);
	const processedMarkdown = result.value;
	return {
		content: processedMarkdown as string,
		metadata: data
	};
};
