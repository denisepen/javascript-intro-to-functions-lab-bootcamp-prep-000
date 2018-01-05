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