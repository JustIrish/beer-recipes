import { toast } from 'react-hot-toast';

import useBeerStore from '../../zustand/store';

import { Btn } from './DeleteBtn.styled';

const DeleteBtn = () => {
  const { deleteRecipes } = useBeerStore();

  const onBtnClick = () => {
    deleteRecipes();
    toast.success('Selected recipes successfully deleted!');
  };

  return (
    <Btn onClick={onBtnClick} type="button">
      DELETE
    </Btn>
  );
};

export default DeleteBtn;
