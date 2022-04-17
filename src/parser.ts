const DEFAULT_NUMERIC_VALUE = "200";
const DEFAULT_COLOR = "black";

export default function parser(string: string) {
  const command = getCommand(string);
  const args = getArgsValue(string);
  const data = getDataValue(string);

  return { command, data, args };
}

function getArgsValue(string: string) {
  const width: string =
    string.match(/--(width)\s([0-9]+)\s/)?.at(2) || DEFAULT_NUMERIC_VALUE; // set default values if user has not initialised it
  const height: string =
    string.match(/--(height)\s([0-9]+)\s/)?.at(2) || DEFAULT_NUMERIC_VALUE;
  const color: string =
    string.match(/--(color)\s(\w+)\s/)?.at(2) || DEFAULT_COLOR;

  return { width, height, color };
}

function getDataValue(string: string): string {
  // get the array of arguments that user has given to us e.g. ['--width 450', '--height 210', '--color blue']
  const numericArgs = string.match(/\b(width|height)\s(\w+)\b/gi);
  const alphaArgs = string.match(/\b(color)\s(\w+)\b/gi);

  const regExp = [...(numericArgs || []), ...(alphaArgs || [])].join("|");

  const data = string
    .replace(new RegExp("--\\b(" + regExp + ")\\b", "gi"), " ") // remove given args and their values
    .replace(/\s{2,}/g, " ") // remove obsolete white spaces
    .replace(/^([\w]+)/gi, "") // remove "qr" from the begining of the string
    .trim() // remove extra white spaces
    .replace(/ /g, "+"); // replace all white spaces between words with "+" so google QR Code API accepts it

  return data;
}

function getCommand(string: string): string | undefined {
  return string.match(/^([\w]+)/gi)?.toString();
}
