import styled from "styled-components";

export const PrevisaoContainer = styled.div`
  margin-top: 20px;
  padding: 16px;
  background-color: rgba(17, 24, 39, 0.85); /* slate-900 com transparência */
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  color: #e5e7eb;
  width: clamp(320px, 92vw, 360px);

  h4 {
    text-align: center;
    margin-bottom: 12px;
    color: #f3f4f6;
    font-weight: 600;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      display: grid;
      grid-template-columns: 44px 84px 1fr; /* ícone | temperatura | descrição */
      column-gap: 12px;
      align-items: center;
      padding: 12px;
      margin-bottom: 8px;
      background-color: #0f172a; /* slate-900 */
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 6px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
      color: inherit;
      font-size: 0.95rem;
      font-weight: 500;

      img {
        width: 38px;
        height: 38px;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.35));
      }

      .temp {
        color: #f3f4f6;
        font-weight: 600;
        text-align: left;
      }

      .desc {
        color: #cbd5e1;
        text-align: left;
      }
    }
  }

  /* Responsivo: em telas estreitas, empilha temp/descrição abaixo do ícone */
  @media (max-width: 420px) {
    width: 94vw;

    ul li {
      grid-template-columns: 40px 1fr;
      grid-template-rows: auto auto;
      row-gap: 2px;
    }

    ul li img {
      width: 34px;
      height: 34px;
    }

    ul li .temp {
      grid-column: 2;
      grid-row: 1;
    }

    ul li .desc {
      grid-column: 2;
      grid-row: 2;
    }
  }
`;
