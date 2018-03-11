import React from 'react'
import _ from 'lodash'
import styled, { css } from 'styled-components'
import { colors } from '../../common/styles'

export default class MonsterTile extends React.Component {
  render () {
    let { monster, families } = this.props
    let isFamily = _.isNumber(monster)

    let name = isFamily ? families[monster] : monster
    let img_path = isFamily ? `/img/icon-${name}.png` : `/img/${monster}.png`
    let link_path = isFamily ? `/families/${name}` : `/monster/${name}`
    let description = isFamily ? `Any ${name}` : name
    return (
      <Tile href={link_path}>
        <Image family={isFamily} src={img_path} alt={description}/>
        {/* <Description>{description}</Description> */}
      </Tile>
    )
  }
}

const Tile = styled.a`
  display: flex;
  font-size: .8rem;
  flex-flow: column nowrap;
  width: 5.5rem;
  height: 5.5rem;
  margin: .5rem;
  text-align: center;
  border-radius: 50%;
  transition: transform 200ms ease,
              background-color 400ms ease;
  &:hover {
    text-decoration: none;
    box-shadow: 2px 2px 4px ${colors.base7};
    background-color: ${colors.white};
    transform: scale(1.1);
  }
`
const Image = styled.img`
  margin: auto;
  transform: scale(1.2);
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;

  ${(prop) => prop.family && css`
    transform: scale(3);
  `}
`

// const Description = styled.label`
//   display: block;
// `