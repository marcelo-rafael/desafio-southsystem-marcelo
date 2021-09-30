import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

import { DragonListData } from '../Dashboard'
import api from '../../services/api'

import { Container } from './styles'

const DragonDetails: React.FC = () => {
  const { id }: any = useParams()
  const [data, setData] = useState<DragonListData>()

  console.log('id', id)

  useEffect(() => {
    api.get(`dragon/${id}`)
      .then(res => setData(res.data))
  }, [id])

  return (
    <Container>
      <div className="content">
        <section className="body">
          <img src={data?.avatar} alt={data?.name} />
        </section>

        <section className="footer">
          <h2>Nome: {data?.name}</h2>
          <h2>Tipo: {data?.type}</h2>
          {data && (
            <p>Data de Criação: {
              new Intl
                .DateTimeFormat('pt-BR')
                .format(
                  new Date(data.createdAt)
                )}
            </p>
          )}

          <button type="button">
            <div className="text">Voltar</div>
            <div className="icon">
              <Link to="/dashboard">
                <BsArrowLeft size={24} color="#f4ede8" />
              </Link>
            </div>
          </button>
        </section>
      </div>
    </Container>
  )
}

export default DragonDetails
