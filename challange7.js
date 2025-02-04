function fixPackages(packages) {
  let start = [];
  let end = [];

  let responseData = [];
  packages.split("").forEach((element,index) => {
    if(element === "(") start.push(index)
    if(element === ")") end.unshift(index)
  });
 
  start.forEach((element,index)=>{
    const data = packages.substring(start[index]+1,end[index]);
    responseData.unshift(data);
  })
  console.log(responseData[0]);
}
  
//fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis
fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

// fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"
 //fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"
