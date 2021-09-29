import React from 'react';

import { FiPlusSquare } from 'react-icons/fi';
import { Container } from './styles';


interface IHeaderProps {
  openModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({ openModal }) => (
  <Container>
    <header>
      <h1>Lista de Dragões</h1>
      <nav>
          <button
            type="button"
            onClick={() => {
              openModal();
            }}
          >
            <div className="text">Adicionar Dragão</div>
            <div className="icon">
              <FiPlusSquare size={24} />
            </div>
          </button>
      </nav>
    </header>
  </Container>
);

export default Header;
