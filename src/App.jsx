import { useState, useEffect } from "react";
import axios from "axios";

import ClimaAtual from "./components/ClimaAtual";
import Previsao from "./components/Previsao";
import Busca from "./components/Busca";

import { ClimaContainer, Titulo } from "./AppStyles";

const App = () => {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  const apiKey =
    import.meta.env.VITE_OPENWEATHER_API_KEY ||
    import.meta.env.VITE_API_KEY ||
    "";

  useEffect(() => {
    const buscarPorGeo = async (lat, lon) => {
      try {
        setCarregando(true);
        setErro("");
        const resposta = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
        );
        setCidade(resposta.data.name);
        setClima(resposta.data);
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
      setErro(
        "Não foi possível buscar os dados. Verifique a cidade e a conexão."
      );
    } finally {
      setCarregando(false);
    }
  };

  return (
    <ClimaContainer>
      <Titulo>Condições Climáticas</Titulo>
      <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />
      {carregando && <p>Carregando...</p>}
      {erro && <p>{erro}</p>}
      {clima && <ClimaAtual clima={clima} />}
      {previsao.length > 0 && <Previsao previsoes={previsao} />}
    </ClimaContainer>
  );
};

export default App;

