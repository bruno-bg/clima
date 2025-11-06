import styled from "styled-components";

export const PrevisaoContainer = styled.div`
  margin-top: 20px;
  padding: 16px;
  background-color: rgba(17, 24, 39, 0.85); /* slate-900 com transparência */
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  color: #e5e7eb;

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
      display: flex;
      align-items: center;
      justify-content: space-between;
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
        margin-right: 12px;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.35));
      }
    }
  }
`;
