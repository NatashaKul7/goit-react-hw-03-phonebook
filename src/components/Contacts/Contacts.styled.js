import styled from 'styled-components';

export const ContactsBox = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 16px;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  button {
    margin-left: auto;
    padding: 4px 8px;

    border-radius: 20px;
    background-color: #00ffff;
    font-size: inherit;
  }
  button:hover,
  button:focus {
    scale: 1.1;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.19) 0px 10px 20px;
  }
`;
