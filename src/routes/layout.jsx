import React from 'react'
import * as Router from 'react-router'
import styled from 'styled-components'
import { colors } from '../common/styles'

export default class MainLayout extends React.Component {
  render () {
    return (
      <Layout>
        <Header>
          <Link to="/">
            <Title>Monsterpedia</Title>
          </Link>
          <Link to="/families">monsters</Link>
          <Link to="/skills">skills</Link>
        </Header>
        {this.props.children}
      </Layout>
    )
  }
}

const Layout = styled.div``

const Header = styled.header`
   display: flex;
   padding: 2rem 1rem;
   align-items: center;
   background-color: ${colors.blue1};
`

const Link = styled(Router.Link)`
  &:nth-child(1) { margin-right: auto }
  margin: 0 .5rem;
  &:hover { text-decoration: none; }
`

const Title = styled.h1`
   color: ${colors.blue5};
   margin: 0;
`
