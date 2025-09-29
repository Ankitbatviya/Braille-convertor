# Braille Converter — README

## Project: English → Braille Language Converter

### Short (350-char) description
The English to Braille Language Converter translates English text (letters, numbers, punctuation, spaces) into standard Braille symbols. Ideal for learning, prototyping accessibility tools, and simple communication — provides a web demo (HTML + JS), copy/export, validation and support for capitalization and digits.

---

## Features
- Converts lowercase and uppercase letters to Braille.  
- Handles digits (with number sign), spaces and common punctuation.  
- Input validation to block unsupported characters.  
- Produces Braille using Unicode Braille patterns (U+2800 block) and an optional human-friendly dot-string (e.g. `100000`).  

---

## Usage
1. Save the `index.html` code to a file named **index.html**.  
2. Open **index.html** in your browser.  
3. Type or paste English text into the input box and click **Convert**.  
4. Use **Copy Output** to copy Braille to clipboard.  

---

## Notes & Limitations
- This demo uses 6-dot Braille and a simplified mapping for English literary Braille.  
- Real-world Braille standards (e.g., contracted Grade 2 Braille, Unified English Braille) are more complex and involve contractions and context rules.  
- Punctuation set here is limited — extend `punctuationBits` for more symbols.  
- Number handling uses the number sign followed by letters a–j (1–0).  
  - This code enters numeric mode so the number sign is not repeated for continuous digits.  

---

## Extending
- Add support for **Grade 2 (contracted) Braille rules**.  
- Export as a **.brf (Braille-ready format)** file.  
- Add a **server-side implementation (Node/Python)** with REST API for bulk conversion.  

---

## License
MIT — feel free to reuse and extend.  
