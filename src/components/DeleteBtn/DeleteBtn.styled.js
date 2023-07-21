import styled from 'styled-components';

export const Btn = styled.button`
  position: fixed;
  right: 50px;
  top: 100px;
  width: 100px;
  padding: 10px;
  border-radius: 8px;
  background-color: #a6b7c9;
  border: transparent;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
  transition: box-shadow 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.14);
  }
`;
