import styled, { keyframes, css } from "styled-components";

const slide = keyframes`
  0% { transform: translateX(-100%); }
  50% { transform: translateX(0%); }
  100% { transform: translateX(100%); }
`;

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: rgba(2, 6, 23, 0.8);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  z-index: 1000;
`;

export const NavContent = styled.div`
  width: min(960px, 94vw);
  margin: 0 auto;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const Brand = styled.div`
  color: #e5e7eb;
  font-weight: 800;
  letter-spacing: 0.3px;
  font-size: 1.375rem; /* maior no desktop */
  white-space: nowrap;
  text-shadow: 0 1px 1px rgba(0,0,0,0.3);
  @media (max-width: 768px) {
    display: none; /* esconder título em tablets e telefones */
  }
`;

export const SearchWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 240px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: stretch;
  }
`;

export const LoadingBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3px;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 40%;
    background: linear-gradient(90deg, #60a5fa, #2563eb, #1e40af);
    animation: ${slide} 1.2s infinite ease-in-out;
  }
  ${(p) =>
    !p.active &&
    css`
      display: none;
    `}
`;
