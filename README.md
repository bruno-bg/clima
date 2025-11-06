# Aplicativo de Previsão do Tempo

Aplicação web em React (Vite) para consultar clima atual e previsão por cidade usando a API OpenWeatherMap. Interface moderna em tema dark, com navbar fixa e busca sempre acessível.

## Principais Funcionalidades

- Busca por cidade com Enter ou botão.
- Geolocalização na entrada: carrega clima e previsão automaticamente quando permitido.
- Clima Atual: cidade, ícone e temperatura em °C, descrição do clima.
- Previsão: 5 próximas entradas (janelas de 3h) em layout responsivo e legível.
- Navbar fixa com indicador de carregamento.

## Requisitos

- Node.js 18+
- npm ou yarn

## Instalação e Execução

1) Instale dependências
```bash
npm install
# ou
yarn install
```

2) Configure a variável de ambiente no arquivo `.env` na raiz do projeto
```env
VITE_OPENWEATHER_API_KEY=sua_chave_api_aqui
```

3) Execute em desenvolvimento
```bash
npm run dev
```

4) Build de produção
```bash
npm run build
```

Aplicação local em `http://localhost:5173` (por padrão do Vite).

## Comportamento e UX

- Se a geolocalização for aceita, a aplicação mostra primeiro o Clima Atual e a Previsão, depois a busca.
- Se negada/indisponível, a busca aparece para o usuário inserir a cidade.
- Barra animada na navbar indica carregamento (inicial e buscas).

## Scripts Úteis

- `npm run check:md` — valida que todos os `.md` (exceto `README.md`) estão em `docs/`.

## Estrutura do Projeto (resumo)

- `src/App.jsx` — orquestra estados, busca inicial por geolocalização, renderização condicional.
- `src/components/` — componentes `Navbar`, `Busca`, `ClimaAtual`, `Previsao` e estilos.
- `docs/` — documentação adicional e log de alterações.

## Documentação Completa

- Consulte `docs/Documentacao.md` para arquitetura detalhada, fluxo de dados, estilo/tema, endpoints usados e diretrizes de contribuição.
- Histórico de alterações: `docs/alteracoes-implementacoes.md`.

## Tecnologias

- React, Vite, Styled Components, Axios, OpenWeatherMap API

## Licença

MIT — veja [LICENSE](LICENSE).

## Autor

Bruno Guimarães - [GitHub](https://github.com/bruno-bg)
