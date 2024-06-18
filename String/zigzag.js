const zigzag = (str, numRows) => {
  // Make an array with the zigzag sequence
  const zigzag = [...new Array(numRows).keys()];
  // console.log('for', zigzag.push(...zigzag.slice(1, -1).reverse()))
  zigzag.push(...zigzag.slice(1, -1).reverse());

  // Make an array with as many strings as we need rows
  const rows = new Array(numRows).fill('');
  // Append the characters ro the row strings in zigzag sequence
  [...str].forEach((letter, index) => (
    rows[zigzag[index % zigzag.length]] += letter
    ));

  return rows.join('');
}

console.log('zigzag', zigzag('PAYPALISHIRING', 4));
