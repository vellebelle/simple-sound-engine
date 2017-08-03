
// Major 0 inversion: [0, 4, 7]
// Major 1 inversion: [4, 7, 12]
// Major 2 inversion: [7, 12, 16]



// Maj7 0 inversion: [0, 4, 7, 11]
// Maj7 1 inversion: [4, 7, 11, 12]
// Maj7 2 inversion: [7, 11, 12, 16]
// Maj7 3 inversion: [11, 12, 16, 19]

// Case 1:
// E.g. Major 0, 4, 7 played from note number 52.. Last legal startingNote in tone range
// If 1st inversion of same chord, note will exceed legal tomeRange
// How can we make sure that inverted chordnotes does not exceed legal tone range?

// sunbtract the first number in soundsequence from the last number:
// Major 2nd inversion: [7, 12, 16] -> 16 - 7 = 9

// Maj7 3rd inversion: [11, 12, 16, 19] -> 19 - 11 = 8
