// Busca.jsx — Campo de entrada e botão para pesquisar clima por cidade.
import PropTypes from "prop-types";
import { BuscaContainer, InputCidade, BotaoBuscar } from "./BuscaStyles";

const Busca = ({ cidade, setCidade, buscarClima, compact }) => {
  return (
    <BuscaContainer $compact={compact}>
      <InputCidade
        type="text"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") buscarClima();
        }}
        placeholder="Digite uma cidade"
        aria-label="Digite uma cidade"
        $compact={compact}
      />
      <BotaoBuscar onClick={buscarClima} $compact={compact}>Buscar</BotaoBuscar>
    </BuscaContainer>
  );
};

Busca.propTypes = {
  cidade: PropTypes.string.isRequired,
  setCidade: PropTypes.func.isRequired,
  buscarClima: PropTypes.func.isRequired,
  compact: PropTypes.bool,
};

export default Busca;
