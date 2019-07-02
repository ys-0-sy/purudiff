const functions = require('firebase-functions')
const Jsdiff = require('diff')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.diff = functions.https.onRequest((request, response) => {
  const text1 = request.body.text1
  const text2 = request.body.text2
  return response.status(200).send(Jsdiff.diffChars(text1, text2))
})
