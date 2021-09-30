import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface DragonListData {
  id: number;
  name: string;
  type: string;
  createdAt: string;
  avatar?: string;
}

interface ICreateDragonData {
  name: string;
  type: string;
  createdAt: string;
  avatar?: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddDragon: (dragon: Omit<DragonListData, 'id'>) => void;
}

const ModalAddDragon: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddDragon,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateDragonData) => {
      const { name, avatar, type, createdAt } = data;
      handleAddDragon({ name, avatar, type, createdAt });
      setIsOpen();
    },
    [handleAddDragon, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Novo Dragão</h1>

          <Input name="avatar" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Barriga-de-Ferro Ucraniano" />
          <Input name="type" placeholder="Ex: Harry Potter" />

          <button type="submit" data-testid="add-dragon-button">
            <p className="text">Adicionar Dragão</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>

      </Form>
    </Modal>
  );
};

export default ModalAddDragon;
