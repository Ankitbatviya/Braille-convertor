const textInput = document.getElementById("textInput");
const convertBtn = document.getElementById('convertBtn');
const brailleOutput = document.getElementById('brailleOutput');
const copyBtn = document.getElementById('copyBtn');

// Dictionary for visual dot patterns
const brailleDotPatternDict = {
    'a': '100000', 'b': '110000', 'c': '100100', 'd': '100110',
    'e': '100010', 'f': '110100', 'g': '110110', 'h': '110010',
    'i': '010100', 'j': '010110', 'k': '101000', 'l': '111000',
    'm': '101100', 'n': '101110', 'o': '101010', 'p': '111100',
    'q': '111110', 'r': '111010', 's': '011100', 't': '011110',
    'u': '101001', 'v': '111001', 'w': '010111', 'x': '101101',
    'y': '101111', 'z': '101011', ' ': '000000'
};

// NEW: Dictionary for copyable Unicode characters
const brailleUnicodeDict = {
    "a": "⠁", "b": "⠃", "c": "⠉", "d": "⠙", "e": "⠑",
    "f": "⠋", "g": "⠛", "h": "⠓", "i": "⠊", "j": "⠚",
    "k": "⠅", "l": "⠇", "m": "⠍", "n": "⠝", "o": "⠕",
    "p": "⠏", "q": "⠟", "r": "⠗", "s": "⠎", "t": "⠞",
    "u": "⠥", "v": "⠧", "w": "⠺", "x": "⠭", "y": "⠽",
    "z": "⠵", " ": " "
};

// Filter input to allow only lowercase letters and spaces
textInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z ]/g, "").toLowerCase();
});

// Main function to render the visual Braille output
function renderBraille(text) {
    brailleOutput.innerHTML = ''; // Clear previous output
    
    if (text.length === 0) {
        brailleOutput.innerHTML = '<p>Your Braille output will appear here...</p>';
        copyBtn.classList.remove('visible'); // Hide copy button
        return;
    }

    // Add the copy button back first, so it appears above the dots
    brailleOutput.appendChild(copyBtn);

    // Process each character to create visual dots
    for (const char of text) {
        const dotPattern = brailleDotPatternDict[char] || brailleDotPatternDict[' '];
        const cell = document.createElement('div');
        cell.className = 'braille-cell';

        for (const dot of dotPattern) {
            const dotDiv = document.createElement('div');
            dotDiv.className = 'dot';
            if (dot === '1') {
                dotDiv.classList.add('raised');
            }
            cell.appendChild(dotDiv);
        }
        brailleOutput.appendChild(cell);
    }
    
    copyBtn.classList.add('visible'); // Show copy button
}

// Convert button logic
convertBtn.addEventListener('click', () => {
    renderBraille(textInput.value);
    brailleOutput.scrollIntoView({ behavior: "smooth", block: "center" });
});

// --- NEW: Copy Button Logic ---
copyBtn.addEventListener('click', () => {
    // Get the original text and convert it to a Braille Unicode string
    const originalText = textInput.value;
    const unicodeString = originalText
        .split('')
        .map(char => brailleUnicodeDict[char] || '')
        .join('');

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(unicodeString).then(() => {
        // Provide user feedback
        const originalButtonText = copyBtn.innerHTML;
        copyBtn.innerHTML = 'Copied! ✨';
        
        // Revert the button text after 2 seconds
        setTimeout(() => {
            copyBtn.innerHTML = originalButtonText;
        }, 2000);

    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});

if (window.innerWidth <= 480) {
    textInput.addEventListener("focus", () => {
        setTimeout(() => {
            textInput.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300); // small delay so keyboard appears first
    });

    textInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            convertBtn.click(); // trigger conversion on Enter
            brailleOutput.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    });
}
