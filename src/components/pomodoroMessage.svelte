<script>
	// import toastr from 'toastr';
	import pomodoroTimer from '../effects/pomodoroTimer';

	async function startTimer() {
		await pomodoroTimer(20000, 3, showMessage);
		finished();
	}

	function showMessage() {
		// toastr.info('Take a break!');
	}

	function finished() {
		// toastr.info('Please stop for the day!');
	}

	startTimer();
</script>

<style>
	/* @import 'toastr'; */
</style>
