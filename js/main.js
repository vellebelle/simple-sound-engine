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

// constants containing the note name sequence for sharps and flats
const notesSharp = ["C", "C", "D", "D", "E", "F", "F", "G", "G", "A", "A", "B"];
const notesFlat = ["C", "D", "D", "E", "E", "F", "G", "G", "A", "A", "B", "B"];

// constant where each value corresponds to the sharp or flat in the note sequences.. 0 = no sharp/flat, 1 = sharp/flat
const signs = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0];

// Load sound files and put them into piano array
var piano = [];
for (var i = 0; i < 60; i++) {
  var url = 'sounds/Piano' + i + '.mp3';
  piano[i] = new Audio(url);
}
var timeIntervalBetweenNotes = 500;

var soundEngine = {
  playSoundSequence: function(soundSequenceArray, soundSequence, startingNote, harmony, timeInterval) {
    var soundSequenceLength = soundSequence.length;
    var noteNameString = '';

    // Check if soundSequence is a unison interval and play the same note twice with time interval between
    if (soundSequence[0] === soundSequence[1] && harmony !== 'harmonic') {
      for (var i=0; i < 2; i++) {
        (function(i) {
          window.setTimeout(function() {
            // reset the notes so they can be played again before the previous is over
            piano[startingNote].currentTime = 0;
            piano[startingNote].play();
          }, i * timeInterval);
        }(i));
      }
    }

    for (var i = 0; i < soundSequenceLength; i++) {
      // get name of notes
      var noteIndex = startingNote + soundSequence[i];
      noteNameString += utils.generateNoteString(noteIndex, true) + ' ';

      if (harmony === 'harmonic') {
        piano[startingNote + soundSequence[i]].play();
      }
      if (harmony === 'ascending') {
        // remove eventlistener from buttons just before first note is played
        $('#sound-sequences').off();

        (function(i) {
          window.setTimeout(function() {
            // When last note in soundSequence is reached, re-add eventlistener to buttons
            if (i === soundSequenceLength - 1) {
              view.setupEventListeners(soundSequenceArray);
            }
            // reset the notes so they can be played again before the previous is over
            piano[startingNote + soundSequence[i]].currentTime = 0;
            piano[startingNote + soundSequence[i]].play();
          }, i * timeInterval);
        }(i));
      }
    }

    if (harmony === "descending") {
      // Make a copy of the soundSequence array and reverse it
      var soundSequenceReversed = soundSequence.slice().reverse();
      // remove eventlistener from buttons just before first note is played
      $('#sound-sequences').off();

      for (var i = 0; i < soundSequenceLength; i++) {

        (function(i) {
          window.setTimeout(function() {
            // When last note in soundSequence is reached, re-add eventlistener to buttons
            if (i === soundSequenceLength - 1) {
              view.setupEventListeners(soundSequenceArray);
            }
            // reset the notes so they can be played again before the previous is over
            piano[startingNote + soundSequenceReversed[i]].currentTime = 0;
            piano[startingNote + soundSequenceReversed[i]].play();
          }, i * timeInterval);
        }(i));
      }
    }
  }
}

var utils = {
  createRandomStartingNote: function(soundSequence) {

    var soundSequenceRange = soundSequence[soundSequence.length - 1];
    var maxRootNote = (piano.length - 1) - soundSequenceRange;
    return Math.floor(Math.random() * (maxRootNote + 1));
  },
  generateNoteString: function(noteIndex, sharpOrFlat) {
    //sharpOrFlat         : false=sharps, true=flats
    noteIndex = ((noteIndex % 12) + 12) % 12;
    var noteString;

    if (sharpOrFlat) {
      noteString = notesFlat[noteIndex];
      if (signs[noteIndex] === 1) {
        noteString += "b";
      }
    } else {
      noteString = notesSharp[noteIndex];
      if (signs[noteIndex] === 1) {
        noteString += "#";
      }
    }
    return noteString;
  },
  getchordInversionDegree: function(soundSequence, inversion) {

    var maximumInversions = soundSequence.length - inversion;
    // If no inversion requested, return original soundSequence
    if (inversion === 0) {
      return soundSequence;
    }
    // If inversion does not exceed soundSequence limit, return new inversion
    if (inversion > 0 && maximumInversions >= 1) {
      for (var i = 0; i < inversion; i++) {
        var rootNotePlusOctave = soundSequence[0] + 12;
        soundSequence.push(rootNotePlusOctave);
        soundSequence.shift();
      }
      return soundSequence;
    } else {
      // throw error
      throw 'Error: inversion exceeds soundSequence limit.';
    }
  }
}

var view = {
  showSoundSequenceButtons: function(soundSequenceArray) {
    $('#sound-sequences').empty();
    var soundSequenceDiv = document.getElementById('sound-sequences');
    soundSequenceArray.forEach(function(value, position) {
      var soundSequenceLength = soundSequenceArray[position][1].length;
      var playSoundSequenceButton = this.createButton(value[0]);
      playSoundSequenceButton.id = position;

      // Add classes to buttons if sopundSequence is a chord
      if (soundSequenceLength === 3) {
        playSoundSequenceButton.classList.add('3-note');
      } else if (soundSequenceLength === 4) {
        playSoundSequenceButton.classList.add('4-note');
      } else if (soundSequenceLength === 5) {
        playSoundSequenceButton.classList.add('5-note');
      }

      soundSequenceDiv.appendChild(playSoundSequenceButton);
    }, this);
    this.setupEventListeners(soundSequenceArray);
  },
  createButton: function(textContent) {
    var button = document.createElement('button');
    button.textContent = textContent;
    button.className = 'play-chord-btn'; // Change name
    return button;
  },
  setupEventListeners: function(soundSequenceArray) {
    // remove event listeners from all sound sequence buttons
    $('#sound-sequences').off();
    // Set harmony to the value of the checked radiobutton
    var harmony = $('input[type=radio][name=harmony-select]:checked').attr('id');
    $('.harmony-btn').on('change', function() {
      harmony = this.id;
    });

    // Remove eventlisteners from sound sequence type selectors
    $('.sound-sequence-type-btn').off();

    $('.sound-sequence-type-btn').on('change', function() {
      if (this.id === 'chords') {
        view.showSoundSequenceButtons(chords);
      }
      if (this.id === 'intervals') {
        view.showSoundSequenceButtons(intervals);
      }
      if (this.id === 'scales') {
        view.showSoundSequenceButtons(scales);
      }
    });

    var chordInversionDegree = $('input[type=radio][name=chord-inversion-select]:checked').attr('id');
    chordInversionDegree = parseInt(chordInversionDegree);
    $('.chord-inversion-select').on('change', function() {
      chordInversionDegree = parseInt(this.id);
      // Hide and show buttons based on possible chord inversions
      switch (chordInversionDegree) {
        case 0:
          $('.play-chord-btn').show();
          break;
        case 1:
          $('.5-note').hide();
          $('.3-note').show();
          $('.4-note').show();
          break;
        case 2:
          $('.5-note').hide();
          $('.3-note').show();
          $('.4-note').show();
          break;
        case 3:
          $('.5-note').hide();
          $('.3-note').hide();
      }
    });
    // Hide the harmonic option if soundSequenceArray is equal to scales
    if (soundSequenceArray === scales) {
      $('#harmonic').hide();
      $('label[for="harmonic"]').hide();
      // Set harmony radiobutton to ascending or descending (no harmonic option)
      if (harmony === 'ascending') {
        $('#ascending').prop('checked', true);
      } else if (harmony === 'descending') {
        $('#descending').prop('checked', true);
      } else {
        harmony = 'ascending';
        $('#ascending').prop('checked', true);
      }

    } else {
      $('label[for="harmonic"]').show();
    }
    // Show and hide the radio buttons for inversions
    $('#chord-inversion-selectors').hide();
    if (soundSequenceArray === chords) {
      $('#chord-inversion-selectors').show();
    }

    // Setup time interval number stepper

    $('.miliseconds').text(timeIntervalBetweenNotes + ' m/s');
    // Remove eventlisteners from plus and minus buttons
    $('.minus, .plus').off();

    $('.minus').on('click', function() {

      if (timeIntervalBetweenNotes === 100) {
        timeIntervalBetweenNotes = 100;
      } else {
        timeIntervalBetweenNotes = timeIntervalBetweenNotes - 100;
      }
      $('.miliseconds').text(timeIntervalBetweenNotes + ' m/s');
    });

    $('.plus').on('click', function() {
      if (timeIntervalBetweenNotes === 1000) {
        timeIntervalBetweenNotes = 1000;
      } else {
        timeIntervalBetweenNotes = timeIntervalBetweenNotes + 100;
      }
      $('.miliseconds').text(timeIntervalBetweenNotes + ' m/s');
    });

    $('#sound-sequences').on('click', function(event) {
      var elementClicked = event.target;
      var soundSequence = soundSequenceArray[elementClicked.id][1].slice();
      var rootNote = $('#fixed-root-note').is(':checked') ? 1 : 0;

      // Only get inversion if the soundSequence is a chord
      if (soundSequenceArray === chords) {
        console.log('Chords are selected');
        soundSequence = utils.getchordInversionDegree(soundSequence, chordInversionDegree);
      }


      if (rootNote) {
        rootNote = 24;
      } else {
        rootNote = utils.createRandomStartingNote(soundSequence);
      }
      if (elementClicked.classList.contains('play-chord-btn')) {
        soundEngine.playSoundSequence(soundSequenceArray, soundSequence, rootNote, harmony, timeIntervalBetweenNotes);
      }
    });
  }
}

view.showSoundSequenceButtons(chords);
