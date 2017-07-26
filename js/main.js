const chords = [
  ['Major', [0, 4, 7]],
  ['Minor', [0, 3, 7]],
  ['Aug', [0, 4, 8]],
  ['Dim', [0, 3, 6]],
  ['Sus2', [0, 2, 7]],
  ['Sus4', [0, 5, 7]],
  ['7', [0, 4, 7, 10]],
  ['Maj7', [0, 4, 7, 11]],
  ['m7', [0, 3, 7, 10]],
  ['m7b5', [0, 3, 6, 10]],
  ['Dim7', [0, 3, 6, 9]],
  ['7b5', [0, 4, 6, 10]],
  ['7#5', [0, 4, 8, 10]],
  ['m(maj7)', [0, 4, 8, 10]],
  ['Sus4(7)', [0, 5, 7, 10]],
  ['6', [0, 4, 7, 9]],
  ['m6', [0, 3, 7, 9]],
  ['Maj9', [0, 4, 7, 11, 14]],
  ['7(b9)', [0, 4, 7, 10, 13]],
  ['9', [0, 4, 7, 10, 14]],
  ['7(#9)', [0, 4, 7, 10, 15]],
  ['m9', [0, 3, 7, 10, 14]]
];



// TODO: Define tones (c, c#, d, d# ets - sharps and flats.. Start from tone 0 = c, 1 = c# etc...)

// Load sound files and put them into piano array
var piano = [];
for (var i = 0; i < 60; i++) {
  var url = '../sounds/piano' + i + '.mp3';
  piano[i] = new Audio(url);
}

// function stopAllSound() {
//     for (var i = 0; i < piano.length; i++) {
//       //piano[i].currentTime = 0;
//     }
// }

var soundEngine = {
  playSoundSequence: function(soundSequence, startingNote, harmony, timeInterval) {


    for (var i = 0; i < soundSequence.length; i++) {

      if (harmony === 'harmonic') {
        // stopAllSound();
        piano[startingNote + soundSequence[i]].play();
      }
      if (harmony === 'ascending') {
        //stopAllSound();
        //$('button').off();
        (function(i){
          window.setTimeout(function(){
            //console.log(piano[startingNote + soundSequence[i]]);
            piano[startingNote + soundSequence[i]].play();
          }, i * timeInterval);
        }(i));
      }
    }
    if (harmony === "descending") {
      var soundSequenceReversed = soundSequence.slice().reverse();
      for (var i = 0; i < soundSequenceReversed.length; i++) {
        (function(i){
          window.setTimeout(function(){
            piano[startingNote + soundSequenceReversed[i]].play();
          }, i * timeInterval);
        }(i));
      }
    }
  }
}

var view = {
  showChordButtons: function() {
    var chordsDiv = document.getElementById('chords');
    chords.forEach(function(value, position) {
      var playChordButton = this.createButton(value[0]);
      playChordButton.id = position;
      chordsDiv.appendChild(playChordButton);
    }, this);
    this.setupEventListeners(chordsDiv);
  },
  createButton: function(textContent) {
    var button = document.createElement('button');
    button.textContent = textContent;
    button.className = 'play-chord-btn';
    return button;
  },
  setupEventListeners: function(chordsDiv) {
    var harmony = 'ascending';
    $('.harmony-btn').on('change', function() {
       harmony = this.id;
    });
    var timeIntervalBetweenNotes = 500;
    $('#time-interval-between-notes').on('change', function() {
      timeIntervalBetweenNotes = $('#time-interval-between-notes').val();
    });
    chordsDiv.addEventListener('click', function(event) {
      // MAke buttons inactive while sound is playing

      var elementClicked = event.target;
      if (elementClicked.className === 'play-chord-btn') {
          // remove eventlistener after button is clicked
          //$('.play-chord-btn').off();
          chordsDiv.removeEventListener('click', false);
          soundEngine.playSoundSequence(chords[elementClicked.id][1], 24, harmony, timeIntervalBetweenNotes);
      }
    });
  }
}





view.showChordButtons();
