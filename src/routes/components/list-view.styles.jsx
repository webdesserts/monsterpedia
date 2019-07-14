import styled from 'styled-components'
import { colors } from '../../common/styles'
import { Link } from 'react-router-dom'

export const ListViewWrapper = styled.div`
  max-width: 35rem;
`

export const Monster = styled(Link)`
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  border-radius: 5px;
  transition: 300ms transform ease,
              200ms box-shadow ease;
  &:hover {
    color: inherit;
    text-decoration: none;
    box-shadow: 1px 1px 4px ${colors.base6};
    transform: scale(1.02);
  }
  &:active {
    box-shadow: inset 1px 1px 4px ${colors.base6};
  }
`

export const Name = styled.div`
  min-width: 6rem;
  color: ${colors.blue3};
  text-align: center;
`

export const ImageBox = styled.div`
  display: flex;
  width: 75px;
  height: 75px;
  margin: .5rem;
  align-content: center;
`

export const Image = styled.img`
  margin: auto;
  transform: scale(1.5);
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
`

export const Stat = styled.div`
  min-width: 2rem;
  margin: 0 .5rem;
  text-align: center;
`

export const Label = styled.div`
  color: ${colors.base6};
`

export const Value = styled.div`
  font-size: 1.1rem;
`