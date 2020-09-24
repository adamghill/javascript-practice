/**
 * Prints out the character(s) in successive sets per line from 1 to `count`.
 * 
 * For example: printsies("o", 5); would result in:
 * ```
 * o
 * oo
 * ooo
 * oooo
 * ooooo
 * ```
 * 
 * printsies("to", 3); would result in:
 * ```
 * to
 * toto
 * tototo
 * ```
 * 
 * @param {string} str The character(s) that should be printed out
 * @param {integer} count The number of times the character(s) should be printed before stopping
 */
export default function printsies(str, count) {
    let completeStr = str + "\n";

    if (completeStr.split("\n").length > count) {
        return completeStr
    }

    const lastStrings = str.split("\n");

    // Get the last set of characters added to the string
    const lastString = lastStrings[lastStrings.length - 1];

    // Get the original string
    const originalString = lastStrings[0];

    // Build up the string based on the last string and original string that was passed in
    completeStr = completeStr + lastString + originalString;

    return printsies(completeStr, count);
}

// Just another way to solve this, but it changes `str` from a String to an Array which feels icky.
function printsiesArray(str, count) {
    let strings = [];

    if (Array.isArray(str)) {
        strings = str;

        let lastString = strings[strings.length - 1];
        const lastChar = lastString.slice(0, 1);
        let nextString = lastString + lastChar;

        strings.push(nextString)
    } else {
        strings.push(str);
    }

    if (strings.length >= count) {
        return strings.join("\n");
    }

    return printsies(strings, count);
}
