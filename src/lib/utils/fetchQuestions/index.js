export const fetchQuestions = async () => {
	const allQuestions = import.meta.glob('/src/routes/questions/questionFiles/*.md');
	const iterableQuestions = Object.entries(allQuestions);

	const questions = await Promise.all(
		iterableQuestions.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const questionPath = path.replace('/src/routes/questions/questionFiles', '/questions');
			// const recipePath = path.slice(11, -3);

			return {
				meta: metadata,
				path: questionPath
			};
		})
	);
	return questions;
};
