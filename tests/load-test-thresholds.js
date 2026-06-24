import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "30s", target: 5 },
    { duration: "30s", target: 10 },
    { duration: "30s", target: 0 },
  ],
  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<500"],
    checks: ["rate>0.99"],
  },
};

export default function () {
  const response = http.get("https://jsonplaceholder.typicode.com/posts");

  check(response, {
    "status deve ser 200": (res) => res.status === 200,
    "tempo de resposta menor que 1000ms": (res) => res.timings.duration < 1000,
    "deve retornar uma lista de posts": (res) => Array.isArray(res.json()),
  });

  sleep(1);
}
