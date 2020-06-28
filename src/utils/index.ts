// Use: array.sort( sortCustom ( 'fieldName', 'true=asc || false=desc',(a) =>  a.toUpperCase() ));
// const sortCustom = (field: string, isAsc: Boolean, primer: any) => {
//   const key = primer
//     ? (x:any) => {
//         return primer(x[field]);
//       }
//     : (x:any) => {
//         return x[field];
//       };

//   let order = isAsc ? 1 : -1;
//   return (a: any, b: any) => {
//     return (a = key(a)), (b = key(b)), order * ((a > b) - (b > a));
//   };
// };

const fistLetterUpperLower = (word: string, isUpper: boolean) =>
  isUpper
    ? word.charAt(0).toUpperCase() + word.slice(1)
    : word.charAt(0).toLowerCase() + word.slice(1);

export {
  // sortCustom,
  fistLetterUpperLower,
};
