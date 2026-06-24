import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 1,
  duration: "10s",
};

export default function () {
  const response = http.get("https://jsonplaceholder.typicode.com/posts/1");

  check(response, {
    "status deve ser 200": (res) => res.status === 200,
    "tempo de resposta menor que 500ms": (res) => res.timings.duration < 500,
    "deve retornar o campo userId": (res) => res.json("userId") !== undefined,
  });

  sleep(1);
}
