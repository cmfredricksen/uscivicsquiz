<script>
	export let data;
</script>

<h2>Quiz</h2>

{#each data.questions as question}
	<strong>{question.meta.title}?</strong>
	<p>a. {question.meta.a}</p>
	<p>b. {question.meta.b}</p>
	<p>c. {question.meta.c}</p>
	<p>d. {question.meta.d}</p>
{/each}
