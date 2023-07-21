import useBeerStore from '../../zustand/store';

import { Btn } from './DeleteBtn.styled';

const DeleteBtn = () => {
  const deleteRecipes = useBeerStore(state => state.deleteRecipes);

  const onBtnClick = () => {
    deleteRecipes();
  };

  return (
    <Btn onClick={onBtnClick} type="button">
      DELETE
    </Btn>
  );
};

export default DeleteBtn;
