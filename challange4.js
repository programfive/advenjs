function createXmasTree(height, ornament) {
  let responseContent = [];
  let response, maxLength;
  let space = '_';
  for (let i = 1; i <= height; i++) {
    const spaces = space.repeat(height - i);
    const symbol = ornament.repeat(i * 2 - 1);
    const content = spaces + symbol + spaces;
    maxLength = content.length;
    responseContent.push(content);
  }

  const trunkSpaceCount = maxLength - 1;
  const trunkSpace = space.repeat(trunkSpaceCount / 2);
  const trunkResponse = trunkSpace + '#' + trunkSpace;
  response =
    responseContent.join(',').replaceAll(',', '\n') +
    '\n' +
    trunkResponse +
    '\n' +
    trunkResponse;
  console.log(response);
  return response;
}
createXmasTree(5, '*');

/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

// const tree2 = createXmasTree(3, '+')
// console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

// const tree3 = createXmasTree(6, '@')
// console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
