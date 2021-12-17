<script>
  import Button from '../components/button.svelte';
  import SpeechButton from '../components/speech-button.svelte';

  function onSpeechResult(event) {
    console.log(event.detail.text)
    const text = event.detail.text;
    if(text.toLowerCase() === 'blauw') {
      onBlue();
    }

    if(text.toLowerCase() === 'rood') {
      onRed();
    }
  }

  function onBlue() {
    alert('Ja!');
  }
  function onRed() {
    alert('Nee!');
  }

</script>
<div class="speech-button">
  <SpeechButton on:result={onSpeechResult}></SpeechButton>
</div>

<div class="answer-buttons">
  <Button click={onBlue} text="Ja" classNames="blue"></Button>
  <Button click={onRed} text="Nee" classNames="red"></Button>
</div>

<style>
  .answer-buttons :global(button) {
    display: inline-block;
    border: 0;
    padding: 8px 16px;
    margin:16px 0;
  }
  .answer-buttons :global(.blue) {
    background-color: blue;
    color: white;
  }
  .answer-buttons :global(.red) {
    background-color: red;
    color: white;
  }
</style>