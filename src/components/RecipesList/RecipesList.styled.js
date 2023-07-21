import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 300px;
  column-gap: 16px;
  margin-top: 200px;
`;

export const RecipeItem = styled.li`
  max-width: 100%;
  width: calc((100% - 64px) / 5);
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  transition: box-shadow 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    box-shadow: 0 0 7px 2px #a8a6a5;
  }
`;

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Image = styled.img`
  width: 150px;
  height: 350px;
  object-fit: contain;
`;

export const RecipeTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #15253c;
`;
