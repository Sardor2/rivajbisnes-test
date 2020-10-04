/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
import parse from 'html-react-parser';
import exceptions from './exceptions';

const latCyr = {
  A: '&#1040;',
  B: '&#1041;',
  V: '&#1042;',
  G: '&#1043;',
  D: '&#1044;',
  Ye: '&#1045;',
  YE: '&#1045;',
  J: '&#1046;',
  Z: '&#1047;',
  I: '&#1048;',
  Y: '&#1049;',
  K: '&#1050;',
  L: '&#1051;',
  M: '&#1052;',
  N: '&#1053;',
  O: '&#1054;',
  P: '&#1055;',
  R: '&#1056;',
  S: '&#1057;',
  T: '&#1058;',
  U: '&#1059;',
  F: '&#1060;',
  X: '&#1061;',
  Ts: '&#1062;',
  TS: '&#1062;',
  Ch: '&#1063;',
  CH: '&#1063;',
  Sh: '&#1064;',
  SH: '&#1064;',
  EE: '&#1069;',
  Yu: '&#1070;',
  YU: '&#1070;',
  Ya: '&#1071;',
  YA: '&#1071;',
  "G'": '&#1170;',
  "O'": '&#1038;',
  'O’': '&#1038;',
  Oʻ: '&#1038;',
  oʻ: '&#1118;',
  'о’': '&#1118;',
  Yo: '&#1025;',
  YO: '&#1025;',
  Q: '&#1178;',
  H: '&#1202;',
  a: '&#1072;',
  b: '&#1073;',
  v: '&#1074;',
  g: '&#1075;',
  d: '&#1076;',
  ye: '&#1077;',
  yE: '&#1077;',
  j: '&#1078;',
  z: '&#1079;',
  i: '&#1080;',
  y: '&#1081;',
  k: '&#1082;',
  l: '&#1083;',
  m: '&#1084;',
  n: '&#1085;',
  o: '&#1086;',
  p: '&#1087;',
  r: '&#1088;',
  s: '&#1089;',
  t: '&#1090;',
  u: '&#1091;',
  f: '&#1092;',
  x: '&#1093;',
  ts: '&#1094;',
  tS: '&#1094;',
  ch: '&#1095;',
  cH: '&#1095;',
  sh: '&#1096;',
  sH: '&#1096;',
  "'": '&#1098;',
  ee: '&#1101;',
  eE: '&#1101;',
  e: '&#1077;',
  yu: '&#1102;',
  yU: '&#1102;',
  ya: '&#1103;',
  yA: '&#1103;',
  "o'": '&#1118;',
  q: '&#1179;',
  "g'": '&#1171;',
  gʻ: '&#1171;',
  yo: '&#1105;',
  yO: '&#1105;',
  h: '&#1203;'
};

export default function getCyrillicText(latinText, cyrillicText, i18n) {
  const language = i18n ? i18n.language : 'uz';
  // If the current language is uz, we simply return the latinText
  if (language === 'uz') return latinText;
  /**
   * If the current language is kr
   * and cyrillic text already exists,
   * we simply return the cyrillic text
   */
  if (language === 'kr' && cyrillicText) return cyrillicText;

  // Otherwise if the current language is kr and there is no cyrillic, we generate cyrillic
  if (!latinText) {
    return '';
  }

  if (exceptions.includes(latinText)) return latinText;

  const keptIndexes = [];
  const lowerLatin = latinText.toLowerCase();
  exceptions.forEach((exception) => {
    const startIndex = lowerLatin.search(exception.toLowerCase());
    if (startIndex !== -1) {
      keptIndexes.push({ startIndex, key: latinText.substr(startIndex, exception.length) });
    }
  });

  let cyrText = '';

  for (let i = 0, len = latinText.length; i < len; i++) {
    const exception = keptIndexes.find((index) => index.startIndex === i);
    if (exception) {
      i += exception.key.length - 1;
      cyrText += exception.key;
      continue;
    }

    let curLetter = latinText[i];
    if (curLetter === 'e' || curLetter === 'E') {
      if (i === 0 || " -.,\n)('?/".indexOf(latinText[i - 1]) !== -1) {
        curLetter += curLetter;
      }
    }

    const pos1Txt = latinText[i + 1];
    const pos2Txt = latinText[i + 2];

    if (!((curLetter === 'y' || curLetter === 'Y')
          && (pos2Txt === "'" || pos2Txt === '’'))
          && i !== len - 1
          && !(curLetter === 't' && pos1Txt === 's'
          && latinText[i + 3] === 'z')) {
      const dualLetter = latCyr[curLetter + pos1Txt];
      if (dualLetter) {
        cyrText += dualLetter;
        i++;
        continue;
      }
    }
    cyrText += latCyr[curLetter] || curLetter;
  }
  return parse(cyrText);
}
export const translateHTML = (string) => {
  if (!string) return '';
  let result = '';

  const clean = (string, left, right) => {
    const elements = [];
    let i = 0;
    while (i < string.length) {
      let j = i;
      if (string[i] === left) {
        while (string[j] !== right) {
          j += 1;
        }
        elements.push({ type: 0, key: string.substring(i, j + 1) });
        i = j + 1;
      } else {
        while (string[j] !== left && j < string.length) {
          j += 1;
        }
        elements.push({ type: 1, key: string.substring(i, j) });
        i = j;
      }
    }
    return elements;
  };
  const elements = clean(string, '<', '>');

  elements.forEach((element) => {
    if (element.type === 0) {
      result += element.key;
    } else if (element.type === 1) {
      const secondElements = clean(element.key, '&', ';');

      secondElements.forEach((secondElement) => {
        if (secondElement.type === 0) {
          result += secondElement.key;
        } else if (secondElement.type === 1) {
          result += getCyrillicText(secondElement.key, '', { language: 'kr' });
        }
      });
    }
  });

  return result;
};
