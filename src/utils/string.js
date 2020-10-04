/* eslint-disable no-plusplus */
const formatPrice = (n) => {
  let num = '';
  let res = '';
  // eslint-disable-next-line no-param-reassign
  n = `${n}`;
  let j = 0;
  for (let i = n.length - 1; i >= 0; i--) {
    if (j % 3 === 2) num += `${n[i]} `;
    else num += n[i];
    j++;
  }
  for (let i = 0; i < num.length; i++) {
    res += num[num.length - 1 - i];
  }
  return `${res.trim()} so'm`;
};

const uzLat = (input) => {
  if (input === 'uz') return 'lat';
  if (input === 'kr') return 'kr';
  if (input === 'ru') return 'kr';
  return 'lat';
};

export { formatPrice, uzLat };
