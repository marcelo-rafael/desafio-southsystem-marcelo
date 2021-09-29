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

        <Link to="/dashboard">
          <BsArrowLeft size={40} color="#f4ede8" />
        </Link>
      </section>
    </Container>
  )
}

export default DragonDetails
