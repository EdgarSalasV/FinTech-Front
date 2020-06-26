// Use: array.sort( sortCustom ( 'fieldName', 'true=asc || false=desc',(a) =>  a.toUpperCase() ));
const sortCustom = (field: string, isAsc: Boolean, primer:any) => {
  const key = primer
    ? (x) => {
        return primer(x[field]);
      }
    : (x) => {
        return x[field];
      };

  let order = isAsc ? 1 : -1;
  return (a: any, b: any) => {
    return (a = key(a)), (b = key(b)), order * ((a > b) - (b > a));
  };
};

export default {
  sortCustom,
};
