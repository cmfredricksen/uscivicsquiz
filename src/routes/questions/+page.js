export const load = async ({ fetch }) => {
	const res = await fetch('../api/questionsApi');
	const questions = await res.json();
	console.log(questions);

	return {
		questions
	};
};
