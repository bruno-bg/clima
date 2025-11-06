import PropTypes from "prop-types";
import { PrevisaoContainer } from "./PrevisaoStyles";

const Previsao = ({ previsoes }) => {
  return (
    <PrevisaoContainer>
      <h4>Previsão para as próximas horas</h4>
      <ul>
        {previsoes.map((previsao, index) => (
          <li key={index}>
            <img
              src={`https://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`}
              alt={previsao.weather[0].description}
            />
            <span className="temp">{previsao.main.temp.toFixed(1)}°C</span>
            <span className="desc">{previsao.weather[0].description}</span>
          </li>
        ))}
      </ul>
    </PrevisaoContainer>
  );
};

Previsao.propTypes = {
  previsoes: PropTypes.arrayOf(
    PropTypes.shape({
      main: PropTypes.shape({
        temp: PropTypes.number.isRequired,
      }).isRequired,
      weather: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default Previsao;
