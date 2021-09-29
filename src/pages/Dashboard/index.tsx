import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import Dragon from '../../components/Card';
import ModalAddDragon from '../../components/ModalAddDragon';
import ModalEditDragon from '../../components/ModalEditDragon';

import { Container } from './styles';

export interface DragonListData {
  id: number;
  name: string;
  type: string;
  createdAt: string;
  avatar?: string;
}

const Dashboard: React.FC = () => {
  const [dragons, setDragons] = useState<DragonListData[]>([]);
  const [editingDragon, setEditingDragon] = useState<DragonListData>({} as DragonListData);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function loadDragons(): Promise<void> {
      const response = await api.get('dragon');
      setDragons(response.data);
    }
    loadDragons();
  }, []);

  async function handleAddDragon(
    dragon: Omit<DragonListData, 'id'>,
  ): Promise<void> {
    try {
      const { name, type, avatar, createdAt } = dragon;

      const response = await api.post('dragon', {
        name,
        type,
        avatar,
        createdAt
      });

      setDragons(state => [...state, response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateDragon(
    dragon: Omit<DragonListData, 'id'>,
  ): Promise<void> {
    const { name, type, avatar } = dragon;
    const { id } = editingDragon;

    const response = await api.put(`dragon/${id}`, {
      name,
      type,
      avatar
    });

    setDragons(state => {
      return state.map(dragonState => {
        if (dragonState.id === id) {
          return { ...response.data };
        }
        return dragonState;
      });
    });
  }

  async function handleDeleteDragon(id: number): Promise<void> {
    await api.delete(`dragon/${id}`);

    const filteredDragons = dragons.filter(dragon => dragon.id !== id);
    setDragons(filteredDragons);
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditDragon(dragon: DragonListData): void {
    setEditingDragon(dragon);
    setEditModalOpen(true);
  }

  dragons.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  console.log(dragons)

  return (
    <>
      <Header openModal={toggleModal} />

      <ModalAddDragon
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddDragon={handleAddDragon}
      />

      <ModalEditDragon
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingDragon={editingDragon}
        handleUpdateDragon={handleUpdateDragon}
      />

      <Container data-testid="dragons-list">
        {dragons &&
          dragons.map(dragon => (
            <Dragon
              key={dragon.id}
              dragon={dragon}
              handleDelete={handleDeleteDragon}
              handleEditDragon={handleEditDragon}
            />
          ))}
      </Container>
    </>
  );
};

export default Dashboard;
