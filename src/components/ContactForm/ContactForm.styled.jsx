import styled from '@emotion/styled';

export const Form = styled.form`
  margin: 10px 10px 20px;
  padding: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #000;
  border-radius: 8px;
  background-color: #d6e8f6;
`;

export const Label = styled.label`
  margin-top: 5px;
  margin-left: 5px;
`;

export const Input = styled.input`
  margin-top: 5px;
  padding-left: 5px;
  width: 290px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 8px;
`;

export const Button = styled.button`
  margin: 10px auto;
  padding: 10px 15px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  letter-spacing: 0.1em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
  }
`;
