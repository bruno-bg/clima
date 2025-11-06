import styled from "styled-components";

export const BuscaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const InputCidade = styled.input`
  padding: 10px 15px;
  border: 1px solid #374151;
  border-radius: 6px;
  background-color: #111827;
  color: #e5e7eb;
  font-size: 16px;
  outline: none;
  width: 60%;
  margin-right: 10px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.25);
  }
`;

export const BotaoBuscar = styled.button`
  padding: 10px 16px;
  background-color: #2563eb;
  color: #fff;
  border: 1px solid #1d4ed8;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.02s ease;

  &:hover {
    background-color: #1d4ed8;
    border-color: #1e40af;
  }

  &:active {
    transform: translateY(1px);
  }
`;
