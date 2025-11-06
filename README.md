# Aplicativo de Previsão do Tempo

Aplicação web em React para consultar clima atual e previsão por cidade usando a API OpenWeatherMap.

## Funcionalidades

- Busca de previsão por cidade
- Exibição de temperatura atual e descrição do clima
- Previsão para as próximas horas (5 entradas)
- Estados de carregamento e mensagens de erro básicas
- Interface responsiva e moderna

## Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/bruno-bg/clima.git
```

2. Acesse a pasta do projeto:
```bash
cd clima
```

3. Instale as dependências:
```bash
npm install
# ou
yarn install
```

4. Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API OpenWeatherMap:
```env
VITE_OPENWEATHER_API_KEY=sua_chave_api_aqui
```

## Como Obter a Chave da API OpenWeatherMap

1. Acesse o site [OpenWeatherMap](https://openweathermap.org/)
2. Clique em "Sign Up" no canto superior direito
3. Após criar sua conta, acesse o [painel de API Keys](https://home.openweathermap.org/api_keys)
4. Você receberá uma chave de API gratuita (Free tier)
   - A chave gratuita permite até 60 chamadas por minuto
   - Pode levar algumas horas para a chave ser ativada
5. Copie sua chave de API e adicione-a ao arquivo `.env` conforme mostrado acima

> Observação: a chave gratuita tem limitações. Para mais chamadas, considere um plano pago.

## Como Executar

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O aplicativo ficará disponível em `http://localhost:5173`.

Para construir a versão de produção:

```bash
npm run build
# ou
yarn build
```

## Scripts úteis

- `npm run check:md`: valida que todos os arquivos `.md` (exceto `README.md`) estejam dentro de `docs/`.

## Padrão de Documentação

- Todos os arquivos Markdown devem estar em `docs/`, com exceção de `README.md`.
- O histórico de alterações e implementações está em `docs/alteracoes-implementacoes.md`.

## Tecnologias Utilizadas

- React, Vite, Styled Components, Axios, OpenWeatherMap API

## Dependências Principais

- react: ^18.2.0
- react-dom: ^18.2.0
- styled-components: ^6.0.7
- axios: ^1.4.0

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Bruno Guimarães - [GitHub](https://github.com/bruno-bg)
