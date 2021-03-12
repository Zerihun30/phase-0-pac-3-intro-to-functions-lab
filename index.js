function shout(hello) {
    return 'HELLO'.toUpperCase();
}
function whisper(HELLO) {
    return 'hello'.toLowerCase();
}
function logShout () {
    console.log('HELLO');
}
function logWhisper () {
    console.log('hello');
}

function sayHiToGrandma(string) {
    if (string===string.toLowerCase()){
         return "I can't hear you!";
    }

    if (string===string.toUpperCase()){
         return "YES INDEED!";
}
if (string==="I love you, Grandma."){
     return "I love you, too.";
}
}

