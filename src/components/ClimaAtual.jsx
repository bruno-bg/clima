import PropTypes from "prop-types";
import { ClimaInfo } from "./ClimaAtualStyles";

const ClimaAtual = ({ clima }) => {
  return (
    <ClimaInfo>
      <h3>{clima.name}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}.png`}
        alt={clima.weather[0].description}
      />
      <p>{clima.main.temp.toFixed(1)}°C</p>
      <p>{clima.weather[0].description}</p>
    </ClimaInfo>
  );
};

ClimaAtual.propTypes = {
  clima: PropTypes.shape({
    name: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default ClimaAtual;

