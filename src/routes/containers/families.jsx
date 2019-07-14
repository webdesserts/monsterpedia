import React from 'react'
import PropTypes from 'prop-types'
import * as Router from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import SortableList from '../components/sortable-list-view'

import styled from 'styled-components'
import { colors, mixins } from '../../common/styles'

class Families extends React.Component {
  static propTypes = {
    store: PropTypes.shape({
      names: PropTypes.arrayOf(PropTypes.string).isRequired,
      families: PropTypes.arrayOf(PropTypes.string).isRequired,
      stats: PropTypes.object.isRequired
    })
  }

  filterByFamily(names, stats, family) {
    if (!family) return names
    return _.filter(names, (name) => family === stats[name].family)
  }

  render () {
    let { store, match } = this.props
    let { params } = match;
    let monsters = this.filterByFamily(store.names, store.stats, params.family)

    return (
      <Family>
        <Nav>
          <IndexLink activeClassName='active' to={`/families`}>
            <img alt="all families" src={`/img/icon-all.png`} />
          </IndexLink>
          {store.families.map((family, i) => (
            <Link key={i} activeClassName='active' to={`/families/${family}`}>
              <img alt={`${family} family`} src={`/img/icon-${family}.png`} />
            </Link>
          ))}
        </Nav>

        <List monsters={monsters} stats={store.stats} growth={store.growth} />
      </Family>
    )
  }
}

function connector (state) {
  return { store: state.monsters }
}

export default connect(connector)(Families)

const Family = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const Nav = styled.nav`
  display: flex;
  flex-basis: 100%;
  padding: .25rem .25rem 0;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.blue5};
  margin-bottom: 1rem;
`

const Link = styled(Router.Link)`
  border-radius: 5px 5px 0 0;
  flex-grow: 1;
  text-align: center;

  &:active {
    box-shadow: inset 0px 1px 4px ${colors.blue3};
  }

  img {
    margin: 16px;
    transform: scale(3);
    ${mixins.pixelated}
  }

  .active {
    background-color: ${colors.base8};
    &:active { box-shadow: none; }
  }
`

const IndexLink = Link.withComponent(Router.NavLink)

const List = styled(SortableList)`
  margin: 0 auto;
`