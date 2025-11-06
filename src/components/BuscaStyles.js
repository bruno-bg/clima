import styled from "styled-components";

export const BuscaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(p) => (p.$compact ? "flex-end" : "center")};
  margin-bottom: ${(p) => (p.$compact ? "0" : "20px")};
  width: ${(p) => (p.$compact ? "100%" : "clamp(320px, 92vw, 360px)")};
  gap: 10px;
  flex-shrink: 1;
`;

export const InputCidade = styled.input`
  height: 44px;
  padding: 0 16px;
  border: 1px solid #1f2937;
  border-radius: 0px;
  background-color: #0f172a;
  color: #e5e7eb;
  font-size: 16px;
  outline: none;
  width: ${(p) => (p.$compact ? "100%" : "100%")};
  max-width: ${(p) => (p.$compact ? "420px" : "none")};
  flex: 1 1 auto;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  @media (max-width: 768px) {
    max-width: 100%;
  }

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.25);
    background-color: #111827;
  }
`;

export const BotaoBuscar = styled.button`
  height: 44px;
  padding: 0 18px;
  background-image: linear-gradient(90deg, #2563eb, #1d4ed8);
  color: #fff;
  border: 1px solid #1e40af;
  border-radius: 0px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.02s ease, box-shadow 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-image: linear-gradient(90deg, #1d4ed8, #1e40af);
    border-color: #1e3a8a;
    box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.25);
  }

  &:active {
    transform: translateY(1px);
  }
`;
