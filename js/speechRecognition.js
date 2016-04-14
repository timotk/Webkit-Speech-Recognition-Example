function Speech() {
  if ('webkitSpeechRecognition' in window) {
    // creating voice capture object
    this.recognition = new webkitSpeechRecognition();

    // settings
    this.recognition.continuous = false; // stop automatically
    this.recognition.interimResults = true;

    this.startCapture = function() {
      this.recognition.start();
    }

    this.stopCapture = function() {
      this.recognition.stop();
    }

    this.recognition.onresult = function(event) {
      console.log(event.results[0][0].transcript);
      $('#output').text(event.results[0][0].transcript);      
      $('#output').val(event.results[0][0].transcript);
    }

    this.recognition.onerror = function(event) {
      console.log(event.error);
    }

    console.log("webkitSpeechRecognition is available.");
  } else {
    console.log("webkitSpeechRecognition is not available.");
  }
}
