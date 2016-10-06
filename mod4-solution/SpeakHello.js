// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2

/*Wrapping the contents inside an IIFE*/
(function (window) {
   var helloSpeaker = {
      speak: function (name) {
         console.log(speakWord + " " + name);
      }
   };
   window.helloSpeaker = helloSpeaker;
   var speakWord = "Hello";
})(window);
