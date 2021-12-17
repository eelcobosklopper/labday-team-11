export default async function startTimer(time, numberOfBreaks, showMessage, finished) {
	let pomodoroTimer = 0;
	while (pomodoroTimer < numberOfBreaks) {
		await timeout(time);
		console.log('tick');
		showMessage();
		pomodoroTimer++;
	}
	finished();
	console.log('done!');
}

function timeout(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
