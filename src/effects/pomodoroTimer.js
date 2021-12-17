export default async function pomodoroTimer(time, numberOfBreaks, showMessage) {
	let currentNumberOfBreaks = 0;
	while (currentNumberOfBreaks < numberOfBreaks) {
		await new Promise((resolve) => setTimeout(resolve, time));
		console.log('tick');

		showMessage();
		currentNumberOfBreaks++;
	}
	console.log('done!');
	return;
}
