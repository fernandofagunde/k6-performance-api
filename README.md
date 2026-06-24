# k6 Performance API

Projeto de estudos e portfólio com testes de performance, carga e stress utilizando k6 em uma API pública.

## Objetivo

Demonstrar o uso do k6 para criação e execução de testes de performance em APIs REST, incluindo:

- Smoke test
- Load test
- Stress test
- Thresholds
- Exportação de relatório JSON
- Execução via scripts npm

## API utilizada

API pública JSONPlaceholder:

https://jsonplaceholder.typicode.com

Endpoints testados:

- GET /posts/1
- GET /posts

## Tecnologias utilizadas

- k6
- JavaScript
- Node.js
- npm
- API REST pública
- JSONPlaceholder

## Estrutura do projeto

k6-performance-api
├── config
├── reports
│   └── stress-summary.json
├── tests
│   ├── smoke-test.js
│   ├── load-test.js
│   ├── load-test-thresholds.js
│   └── stress-test.js
├── package.json
└── README.md

## Como executar os testes

### Smoke test

Executa um teste simples com 1 usuário virtual durante 10 segundos.

Comando:

npm run test:smoke

### Load test

Executa um teste de carga subindo gradualmente até 10 usuários virtuais.

Comando:

npm run test:load

### Load test com thresholds

Executa um teste de carga com critérios automáticos de aprovação.

Comando:

npm run test:thresholds

### Stress test

Executa um teste mais forte, subindo gradualmente até 30 usuários virtuais.

Comando:

npm run test:stress

### Stress test com relatório JSON

Executa o stress test e gera um relatório em JSON dentro da pasta reports.

Comando:

npm run test:stress:report

## Scripts configurados

Os scripts estão configurados no arquivo package.json:

test:smoke
Executa o arquivo tests/smoke-test.js

test:load
Executa o arquivo tests/load-test.js

test:thresholds
Executa o arquivo tests/load-test-thresholds.js

test:stress
Executa o arquivo tests/stress-test.js

test:stress:report
Executa o stress test e exporta o resumo para reports/stress-summary.json

## Thresholds utilizados

No teste de carga com thresholds, foram usados os seguintes critérios:

- Taxa de falha HTTP menor que 1%
- p95 menor que 500ms
- Mais de 99% dos checks devem passar

No stress test, foram usados critérios mais flexíveis:

- Taxa de falha HTTP menor que 5%
- p95 menor que 1000ms
- Mais de 95% dos checks devem passar

## Métricas analisadas

Durante os testes, foram analisadas métricas como:

- http_req_duration: tempo de resposta das requisições
- http_req_failed: taxa de falha das requisições HTTP
- http_reqs: quantidade total de requisições
- checks: validações executadas
- iterations: quantidade de iterações executadas
- vus: usuários virtuais em execução
- vus_max: quantidade máxima de usuários virtuais
- data_received: volume de dados recebidos
- data_sent: volume de dados enviados

## Resultado de exemplo

Em uma execução do stress test, foram obtidos resultados semelhantes a:

- Usuários virtuais máximos: 30 VUs
- Requisições HTTP: 1663
- Checks executados: 4989
- Checks com sucesso: 100%
- Falhas HTTP: 0%
- p95: aproximadamente 91ms

## Aprendizados

Este projeto demonstra conceitos importantes de testes de performance com k6:

- Diferença entre smoke test, load test e stress test
- Uso de usuários virtuais
- Configuração de stages
- Uso de checks
- Uso de thresholds
- Análise de p90 e p95
- Exportação de evidências em JSON

## Como explicar este projeto em entrevista

Neste projeto, criei uma suíte básica de testes de performance utilizando k6 para testar uma API REST pública.

Comecei com um smoke test para validar disponibilidade da API, status code, tempo de resposta e estrutura básica da resposta.

Depois evoluí para um load test, utilizando stages para aumentar gradualmente a quantidade de usuários virtuais.

Também configurei thresholds para definir critérios automáticos de aprovação, como p95 menor que 500ms, taxa de falha HTTP menor que 1% e mais de 99% dos checks passando.

Por fim, criei um stress test aumentando a carga até 30 usuários virtuais e exportei o resultado em JSON para manter evidências da execução.