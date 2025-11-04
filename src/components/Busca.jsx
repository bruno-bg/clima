import PropTypes from "prop-types";
import { BuscaContainer, InputCidade, BotaoBuscar } from "./BuscaStyles";

const Busca = ({ cidade, setCidade, buscarClima }) => {
  return (
    <BuscaContainer>
      <InputCidade
        type="text"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        placeholder="Digite uma cidade"
      />
      <BotaoBuscar onClick={buscarClima}>Buscar</BotaoBuscar>
    </BuscaContainer>
  );
};

Busca.propTypes = {
  cidade: PropTypes.string.isRequired,
  setCidade: PropTypes.func.isRequired,
  buscarClima: PropTypes.func.isRequired,
};

export default Busca;
