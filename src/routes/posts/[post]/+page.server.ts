import { getPost } from '$lib/server/PostHandler/Posts';
import { error } from '@sveltejs/kit';

export async function load({ params }: { params: { post: string } }) {
	try {
		return {
			post: await getPost(params.post)
		};
	} catch (e) {
		throw error(404, `Post does not exist`);
	}
}
