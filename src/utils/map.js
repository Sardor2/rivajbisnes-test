import axios from 'axios';
import { YANDEX_KEY } from '../config';

export default (lon, lat) => new Promise((resolve, reject) => {
  const uri = `https://geocode-maps.yandex.ru/1.x/?apikey=${YANDEX_KEY}&geocode=${lon},${lat}&format=json`;
  axios
    .get(uri)
    .then((response) => {
      resolve(
        response
          .data
          .response
          .GeoObjectCollection
          .featureMember[0]
          .GeoObject
          .metaDataProperty
          .GeocoderMetaData.text
      );
    })
    .catch((error) => reject(error));
});
