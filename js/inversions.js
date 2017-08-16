
// Major 0 inversion: [0, 4, 7]
// Major 1 inversion: [4, 7, 12]
// Major 2 inversion: [7, 12, 16]

// Maj7 0 inversion: [0, 4, 7, 11]
// Maj7 1 inversion: [4, 7, 11, 12]
// Maj7 2 inversion: [7, 11, 12, 16]
// Maj7 3 inversion: [11, 12, 16, 19]

// Case 1:
// E.g. Major 0, 4, 7 played from note number 52.. Last legal startingNote in tone range
// If 1st inversion of same chord, note will exceed legal toneRange
// How can we make sure that inverted chordnotes does not exceed legal tone range?

// subtract the first number in soundsequence from the last number:

// Major root: [0, 4, 7]
// Take first value and add 12 (an octave) and stick it to the end -> [4, 7, 12]


// Major 1st inversion: [4, 7, 12] ->
// Major 2nd inversion: [7, 12, 16] -> 16 - 7 = 9



// Maj7 3rd inversion: [11, 12, 16, 19] -> 19 - 11 = 8


// **********************

// If soundSequence.length === 3 --> only two inversions possible (1 and 2)
// If soundSequence.length === 4 --> three inversions possible (1, 2 and 3)
// If soundSequence.length > 4 --> return



// If inversion is 0 just return the original array
// If inversion is 1 -> run callback once and return array.
// If inversion is 2 -> run callback twice and return array

function getInversion(soundSequence, inversion) {
  if (soundSequence === 0) {
    return soundSequence;
  }
  for (var i=0; i > inversion; i++) {
      console.log('khg');
  }
}
