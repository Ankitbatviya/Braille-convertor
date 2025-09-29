// Braille Dictionary (with lowercase, uppercase, and space)
const brailleDict = {
    // Lowercase
    "a": "⠁", "b": "⠃", "c": "⠉", "d": "⠙", "e": "⠑",
    "f": "⠋", "g": "⠛", "h": "⠓", "i": "⠊", "j": "⠚",
    "k": "⠅", "l": "⠇", "m": "⠍", "n": "⠝", "o": "⠕",
    "p": "⠏", "q": "⠟", "r": "⠗", "s": "⠎", "t": "⠞",
    "u": "⠥", "v": "⠧", "w": "⠺", "x": "⠭", "y": "⠽",
    "z": "⠵",

    // Uppercase (Capital sign ⠠ before the letter)
    "A": "⠠⠁", "B": "⠠⠃", "C": "⠠⠉", "D": "⠠⠙", "E": "⠠⠑",
    "F": "⠠⠋", "G": "⠠⠛", "H": "⠠⠓", "I": "⠠⠊", "J": "⠠⠚",
    "K": "⠠⠅", "L": "⠠⠇", "M": "⠠⠍", "N": "⠠⠝", "O": "⠠⠕",
    "P": "⠠⠏", "Q": "⠠⠟", "R": "⠠⠗", "S": "⠠⠎", "T": "⠠⠞",
    "U": "⠠⠥", "V": "⠠⠧", "W": "⠠⠺", "X": "⠠⠭", "Y": "⠠⠽",
    "Z": "⠠⠵",

    // Space
    " ": " "
};

function textToBraille(text) {
    return text
        .split("")
        .map(ch => brailleDict[ch] || "?") // unknown chars → "?"
        .join("");
}

const input = document.getElementById("textInput");

input.addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z0-9 ]/g, "");
});


document.getElementById('convertBtn').addEventListener("click",()=>{
    let result = textToBraille(input.value)
    alert(result);
})



