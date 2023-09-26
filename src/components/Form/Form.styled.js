import styled from 'styled-components';

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 16px;
    padding: 4px;
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
  input {
    padding: 4px 8px;
    border-radius: 20px;
    outline-color: #00ffff;
  }
`;
