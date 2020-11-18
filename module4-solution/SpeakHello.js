((window) => {
  let speakWord = "Hello";
  let helloSpeaker = {};

 helloSpeaker.speak = (name) => {
  console.log(`${speakWord} ${name}`);
} 
  window.helloSpeaker = helloSpeaker;
})(window);

