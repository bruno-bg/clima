# Aplicativo de Previsão do Tempo

Este é um aplicativo web desenvolvido em React que permite consultar a previsão do tempo de qualquer cidade do mundo. O aplicativo utiliza a API OpenWeatherMap para obter dados meteorológicos em tempo real.

## Funcionalidades

- Consulta de previsão do tempo por cidade
- Exibição de temperatura atual
- Informações sobre umidade, velocidade do vento e pressão atmosférica
- Interface responsiva e moderna
- Design intuitivo e fácil de usar

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
- Node.js (versão 14 ou superior)
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

Para utilizar o aplicativo, você precisará de uma chave de API do OpenWeatherMap. Siga estes passos para obtê-la:

1. Acesse o site [OpenWeatherMap](https://openweathermap.org/)
2. Clique em "Sign Up" no canto superior direito
3. Preencha o formulário de cadastro com seus dados
4. Após criar sua conta, acesse o [painel de API Keys](https://home.openweathermap.org/api_keys)
5. Você receberá uma chave de API gratuita (Free tier)
   - A chave gratuita permite até 60 chamadas por minuto
   - Pode levar algumas horas para a chave ser ativada
6. Copie sua chave de API e adicione-a ao arquivo `.env` como mostrado na seção de instalação

> **Observação:** A chave gratuita tem algumas limitações. Se precisar de mais chamadas à API, considere fazer upgrade para um plano pago.

## Como Executar

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O aplicativo estará disponível em `http://localhost:5173`

Para construir a versão de produção:

```bash
npm run build
# ou
yarn build
```

## Tecnologias Utilizadas

- React
- Vite
- Styled Components
- Axios
- OpenWeatherMap API

## Dependências Principais

- react: ^18.2.0
- react-dom: ^18.2.0
- styled-components: ^6.0.7
- axios: ^1.4.0

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Bruno Guimarães - [GitHub](https://github.com/bruno-bg)

