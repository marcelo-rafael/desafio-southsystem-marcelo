import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles'
import Modal from '../Modal';
import Input from '../Input';

interface DragonListData {
  id: number;
  name: string;
  type: string;
  createdAt: string;
  avatar?: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateDragon: (dragon: Omit<DragonListData, 'id'>) => void;
  editingDragon: DragonListData;
}

interface IEditDragonData {
  name: string;
  type: string;
  createdAt: string;
  avatar?: string;
}

const ModalEditDragon: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingDragon,
  handleUpdateDragon,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IEditDragonData) => {
      handleUpdateDragon(data);
      setIsOpen();
    },
    [handleUpdateDragon, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingDragon}>
        <h1>Editar Dragão</h1>

        <Input name="avatar" placeholder="Cole o link aqui" />
        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="type" placeholder="Ex: Harry Potter " />

        <button type="submit" data-testid="edit-dragon-button">
          <div className="text">Editar Dragão</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditDragon;
