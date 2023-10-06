import useBeerStore from '../../zustand/store';
import { getDeleteRecipes } from '../../zustand/selectors';

import { Btn } from './DeleteBtn.styled';

const DeleteBtn = () => {
  const deleteRecipes = useBeerStore(getDeleteRecipes);

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
