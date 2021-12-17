// import { AudioPlayer } from './audio/AudioPlayer';

export default async function pomodoroTimer(time, numberOfBreaks, showMessage) {
	// const audio = new AudioPlayer();
	// audio.init();
	// audio.load('pop', 'assets/fx-samples/pop.mp3');
	let currentNumberOfBreaks = 0;
	while (currentNumberOfBreaks < numberOfBreaks) {
		await new Promise((resolve) => setTimeout(resolve, time));
		console.log('tick');
		// audio.play('pop');
		showMessage();
		currentNumberOfBreaks++;
	}
	console.log('done!');
	return;
}
