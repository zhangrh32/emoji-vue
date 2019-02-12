export default function (str) {
  let ascii = '';
  for (let i = 0; i < str.length; i++) {
    const code = Number(str[i].charCodeAt(0));
    let charAscii = code.toString(16);
    charAscii = '0000'.substring(charAscii.length, 4) + charAscii;
    ascii += `\\u${charAscii}`;
  }
  return ascii;
}