// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************

(() => {
let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (i = 0; i < names.length; i++) {
  let firstLetter = names[i].charAt(0).toLowerCase();
  (firstLetter === 'j') ? byeSpeaker.speak(names[i]) : helloSpeaker.speak(names[i]);
 }
})();
