// Navbar.jsx — Barra fixa superior com título e campo de busca compacta.
import PropTypes from "prop-types";
import Busca from "./Busca";
import { NavbarContainer, NavContent, Brand, LoadingBar, SearchWrap } from "./NavbarStyles";

const Navbar = ({ cidade, setCidade, buscarClima, carregando }) => {
  return (
    <NavbarContainer>
      <NavContent>
        <Brand>Condições Climáticas</Brand>
        <SearchWrap>
          <Busca
            cidade={cidade}
            setCidade={setCidade}
            buscarClima={buscarClima}
            compact
          />
        </SearchWrap>
      </NavContent>
      <LoadingBar active={carregando} />
    </NavbarContainer>
  );
};

Navbar.propTypes = {
  cidade: PropTypes.string.isRequired,
  setCidade: PropTypes.func.isRequired,
  buscarClima: PropTypes.func.isRequired,
  carregando: PropTypes.bool,
};

export default Navbar;
