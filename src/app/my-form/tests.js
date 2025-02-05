import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  vus: 10, // número de usuarios virtuales
  duration: '30s', // duración de la prueba
};

export default function () {
  let res = http.get('http://localhost:4200/');
  check(res, {
    'status was 200': (r) => r.status == 200,
  });
  sleep(1);
}