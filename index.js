function shout(bob) {
  return bob.toUpperCase();
}

function whisper(varName) {
  return varName.toLowerCase();
}

function logShout(string) {
  const uppercaseString = shout(string); 
  console.log(uppercaseString);
}

function logWhisper(string) {
  const lowercaseString = whisper(string);
  console.log(lowercaseString);
}