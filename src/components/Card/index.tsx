import React from 'react';
import { FiExternalLink, FiEdit3, FiTrash } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

interface DragonListData {
  id: number;
  name: string;
  type: string;
  createdAt: string;
  avatar?: string;
}

interface IProps {
  dragon: DragonListData;
  handleDelete: (id: number) => {};
  handleEditDragon: (dragon: DragonListData) => void;
}

const Card: React.FC<IProps> = ({
  dragon,
  handleDelete,
  handleEditDragon,
}: IProps) => {

  function setEditingFood(): void {
    handleEditDragon(dragon);
  }

  function handleDetail() {
    history.push(`/dragon-details/${dragon.id}`)
  }

  const history = useHistory()

  return (
    <Container >
      <section className="body">
        <h2>{dragon.name}</h2>
        <img src={dragon.avatar} alt={dragon.name} />
      </section>

      <section className="footer">
        <div className="icon-container">

          <button
            type="button"
            className="icon"
            onClick={() => setEditingFood()}
            data-testid={`edit-dragon-${dragon.id}`}
          >
            <FiEdit3 size={20} color="#ff9000" />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(dragon.id)}
            data-testid={`remove-food-${dragon.id}`}

          >
            <FiTrash size={20}  color="#c53030" />
          </button>

          <button
            type="button"
            className="icon"
            onClick={handleDetail}
          >
            <FiExternalLink size={20} color="#3d3d4d" />
          </button>

        </div>
      </section>
    </Container>
  );
};

export default Card;
