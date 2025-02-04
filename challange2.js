function createFrame(names) {
  const simbol = '*';
  const spaces = ' ';
  let elements = '';
  let contentElement = '';
  const maxItemLength = names
    .map(Element => Element.length)
    .reduce((a, b) => Math.max(a, b), -Infinity);
  const simbolLength = simbol.repeat(maxItemLength + 4);
  for (let i = 0; i < names.length; i++) {
    const elementLengt = maxItemLength - names[i].length;
    elements =
      simbol +
      ' ' +
      names[i] +
      spaces.repeat(elementLengt) +
      ' ' +
      simbol +
      '\n';
    contentElement = contentElement + elements;
  }
  return  simbolLength+"\n"+contentElement+simbolLength;
}

createFrame(['midu', 'madeval', 'educalvolpz']);

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************
createFrame(['midu'])

// Resultado esperado:
// ********
// * midu *
// ********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******
createFrame(['a', 'bb', 'ccc', 'dddd'])
