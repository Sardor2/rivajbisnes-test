const chunkify = (array, chunk) => {
  let i; let j;
  const newArray = [];
  for (i = 0, j = array.length; i < j; i += chunk) {
    newArray.push(array.slice(i, i + chunk));
  }
  return newArray;
};

export default chunkify;
