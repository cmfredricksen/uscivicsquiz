import { fetchQuestions } from '$lib/utils/fetchQuestions';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const recipes = await fetchQuestions();

	return json(recipes);
};
