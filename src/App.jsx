// App.jsx — Componente raiz: orquestra estados, busca inicial por geolocalização
// e renderiza Navbar, Clima Atual e Previsão.
import { useState, useEffect } from "react";
import axios from "axios";

import ClimaAtual from "./components/ClimaAtual";
import Previsao from "./components/Previsao";
import Navbar from "./components/Navbar";

import { ClimaContainer, Titulo } from "./AppStyles";

const App = () => {
  // Estados principais
  const [cidade, setCidade] = useState("");       // termo de busca / cidade atual
  const [clima, setClima] = useState(null);        // dados do clima atual
  const [previsao, setPrevisao] = useState([]);    // 5 entradas de previsão (3h)
  const [carregando, setCarregando] = useState(false); // indicador de carregamento
  const [erro, setErro] = useState("");            // mensagem de erro amigável

  const apiKey =
    import.meta.env.VITE_OPENWEATHER_API_KEY ||
    import.meta.env.VITE_API_KEY ||
    "";

  // Busca inicial usando geolocalização do navegador
  useEffect(() => {
    const buscarPorGeo = async (lat, lon) => {
      try {
        setCarregando(true);
        setErro("");
        // Clima atual por latitude/longitude
        const rspClima = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
        );
        setCidade(rspClima.data.name);
        setClima(rspClima.data);
        // Previsão (lista) por latitude/longitude
        const rspPrev = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
        );
        setPrevisao(rspPrev.data.list.slice(0, 5));
      } catch (e) {
        setErro("Não foi possível obter o clima pela localização.");
      } finally {
        setCarregando(false);
      }
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          buscarPorGeo(latitude, longitude);
        },
        () => {
          setErro("Permissão de localização negada. Busque por uma cidade.");
        }
      );
    } else {
      setErro("Geolocalização não suportada. Busque por uma cidade.");
    }
  }, [apiKey]);

  // Busca por cidade digitada
  const buscarClima = async () => {
    try {
      setCarregando(true);
      setErro("");
      const respostaClima = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      const respostaPrevisao = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      setClima(respostaClima.data);
      setPrevisao(respostaPrevisao.data.list.slice(0, 5));
    } catch (error) {
      console.error("Erro ao buscar dados do clima:", error);
      setErro("Não foi possível buscar os dados. Verifique a cidade e a conexão.");
    } finally {
      setCarregando(false);
    }
  };

  const temDados = Boolean(clima);

  return (
    <>
      <Navbar
        cidade={cidade}
        setCidade={setCidade}
        buscarClima={buscarClima}
        carregando={carregando}
      />
      <ClimaContainer>
        <Titulo>Condições Climáticas</Titulo>
        {/* Indicadores globais de carregamento e erro */}
        {carregando && <p>Carregando...</p>}
        {erro && <p>{erro}</p>}

        {/* Quando houver dados, exibe Clima Atual e Previsão em sequência */}
        {temDados && <ClimaAtual clima={clima} />}
        {previsao.length > 0 && <Previsao previsoes={previsao} />}
      </ClimaContainer>
    </>
  );
};

export default App;
