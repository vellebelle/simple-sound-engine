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
const intervals = [
  ['Unison',           [0, 0]],
  ['Minor 2nd',        [0, 1]],
  ['Major 2nd',        [0, 2]],
  ['Minor 3rd',        [0, 3]],
  ['Major 3rd',        [0, 4]],
  ['Perfect 4th',      [0, 5]],
  ['Diminished 5th',   [0, 6]],
  ['Perfect 5h',       [0, 7]],
  ['Minor 6th',        [0, 8]],
  ['Major 6th',        [0, 9]],
  ['Minor 7th',        [0, 10]],
  ['Major 7th',        [0, 11]],
  ['Octave',           [0,12]],
  ['Minor 9th',        [0, 13]],
  ['Major 9th',        [0, 14]],
  ['Minor 10th',       [0, 15]],
  ['Major 10th',       [0, 16]],
  ['Perfect 11th',     [0, 17]],
  ['Diminished 12th',  [0, 18]],
  ['Perfect 12th',     [0, 19]],
  ['Minor 13th',       [0, 20]],
  ['Major 13th',       [0, 21]],
  ['Minor 14th',       [0, 22]],
  ['Major 14th',       [0, 23]],
  ['Two Octaves',      [0, 24]]
];
const scales = [
  ['Major Pentatonic',    [0, 2, 4, 7, 9, 12]],
  ['Minor Pentatonic',    [0, 3, 5, 7, 10, 12]],
  ['Ionian',              [0, 2, 4, 5, 7, 9, 11, 12]],
  ['Dorian',              [0, 2, 3, 5, 7, 9, 10, 12]],
  ['Phrygian',            [0, 1, 3, 5, 7, 8, 10, 12]],
  ['Lydian',              [0, 2, 4, 6, 7, 9, 11, 12]],
  ['Mixolydian',          [0, 2, 4, 5, 7, 9, 10, 12]],
  ['Aeolian',             [0, 2, 3, 5, 7, 8, 10, 12]],
  ['Locrian',             [0, 1, 3, 5, 6, 8, 10, 12]],
  ['Harmonic Minor',      [0, 2, 3, 5, 7, 8, 11, 12]],
  ['Melodic Minor',       [0, 2, 3, 5, 7, 9, 11, 12]],
  ['Lydian (#5)',         [0, 2, 4, 6, 8, 9, 11, 12]],
  ['Lydian (b7)',         [0, 2, 4, 6, 7, 9, 10, 12]],
  ['Mixolydian (b13)',    [0, 2, 4, 5, 7, 8, 10, 12]],
  ['Wholetone',           [0, 2, 4, 6, 8, 10, 12]],
  ['Locrian (#2)',        [0, 2, 3, 5, 6, 8, 10, 12]],
  ['Diminished (1 - 1/2)',[0, 2, 3, 5, 6, 8, 9, 11, 12]],
  ['Diminished (1/2 - 1)',[0, 1, 3, 4, 6, 7, 9, 10, 12]],
  ['Altered',             [0, 1, 3, 4, 6, 8, 10, 12]],
  ['Phrygian (#6)',       [0, 1, 3, 5, 7, 9, 10, 12]],
  ['Dorian (#4)',         [0, 2, 3, 6, 7, 9, 10, 12]],
  ['Mixolydian (b9, b13)',[0, 1, 4, 5, 7, 8, 10, 12]],
  ['Locrian (#6)',        [0, 1, 3, 5, 6, 9, 10, 12]],
  ['Ionian (#5)',         [0, 2, 4, 5, 8, 9, 11, 12]],
  ['Lydian (#2)',         [0, 3, 4, 6, 7, 9, 11, 12]],
  ['Altered (b7)',         [0, 1, 3, 4, 6, 8, 9, 12]]
];

// Load sound files and put them into piano array
var piano = [];
for (var i = 0; i < 60; i++) {
  var url = '../sounds/piano' + i + '.mp3';
  piano[i] = new Audio(url);
}

var soundEngine = {
  playSoundSequence: function(soundSequenceType, soundSequence, startingNote, harmony, timeInterval) {
    var soundSequenceLength = soundSequence.length;
    for (var i = 0; i < soundSequenceLength; i++) {

      if (harmony === 'harmonic') {
        piano[startingNote + soundSequence[i]].play();
      }
      if (harmony === 'ascending') {
        // remove eventlistener from buttons just before first note is played
        $('#sound-sequences').off();
        (function(i){
          window.setTimeout(function(){
            // When last note in soundSequence is reached, re-add eventlistener to buttons
            if (i === soundSequenceLength - 1) {
              console.log('on');
              view.setupEventListeners(soundSequenceType);
            }
            piano[startingNote + soundSequence[i]].play();
          }, i * timeInterval);
        }(i));
      }
    }
    if (harmony === "descending") {
      var soundSequenceReversed = soundSequence.slice().reverse();
      // remove eventlistener from buttons just before first note is played
      $('#sound-sequences').off();
      for (var i = 0; i < soundSequenceLength; i++) {

        (function(i){
          window.setTimeout(function(){
            // When last note in soundSequence is reached, re-add eventlistener to buttons
            if (i === soundSequenceLength - 1) {
              view.setupEventListeners(soundSequenceType);
              console.log('on');
            }
            piano[startingNote + soundSequenceReversed[i]].play();
          }, i * timeInterval);
        }(i));
      }
    }
  }
}

var view = {
  showSoundSequenceButtons: function(soundSequenceType) {

    var soundSequenceDiv = document.getElementById('sound-sequences');
    soundSequenceType.forEach(function(value, position) {
      var playSoundSequenceButton = this.createButton(value[0]);
      playSoundSequenceButton.id = position;
      soundSequenceDiv.appendChild(playSoundSequenceButton);
    }, this);
    this.setupEventListeners(soundSequenceType);
  },
  createButton: function(textContent) {
    var button = document.createElement('button');
    button.textContent = textContent;
    button.className = 'play-chord-btn';
    return button;
  },
  setupEventListeners: function(soundSequenceType) {
//    if (soundSequenceType === scales) {
//      console.log('no harmonic play');
//      $('#harmonic').hide();
//    }
    var harmony = 'ascending';
    $('.harmony-btn').on('change', function() {
       harmony = this.id;
    });
    var timeIntervalBetweenNotes = $('#time-interval-between-notes').val();
    $('#time-interval-between-notes').on('change', function() {
      timeIntervalBetweenNotes = $('#time-interval-between-notes').val();
    });
    $('#sound-sequences').on('click', function(event) {
      var elementClicked = event.target;
      if (elementClicked.className === 'play-chord-btn') {
          soundEngine.playSoundSequence(soundSequenceType, soundSequenceType[elementClicked.id][1], 24, harmony, timeIntervalBetweenNotes);
      }
    });
  }
}

view.showSoundSequenceButtons(scales);
