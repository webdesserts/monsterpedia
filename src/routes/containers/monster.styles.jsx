import styled, { css } from 'styled-components'
import { colors, mixins } from '../../common/styles'
import * as Router from 'react-router-dom'

export const MonsterWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`

export const Header = styled.header`
  width: 100%;
  position: relative;
  background-color: ${colors.blue5};
  padding: 1rem;
`

export const Family = styled(Router.Link)`
  position: absolute;
  top: .5rem;
  left: .5rem;
  height: 2.2rem;
  padding: .3rem .5rem;
  border-radius: 5px;
  img {
    margin: auto 8px;
    transform: scale(2.5);
    ${mixins.pixelated}
  }

  &:after {
    position: relative;
    display: inline-block;
    top: 1px;
    color: ${colors.blue2};
    content: attr(data-label);
    line-height: 1.25;
    font-weight: bold;
    margin-left: 4px;
  }

  &:hover { box-shadow: 1px 1px 4px ${colors.blue3}; }
  &:active { box-shadow: inset 1px 1px 4px ${colors.blue3}; }
`

export const Name = styled.h2`
  margin: 0;
  text-align: center;
  width: 100%;
  font-size: 1.25rem;
  line-height: 1;
`

export const Content = styled.article`
  max-width: 40rem;
  margin: 0 auto;

  h3 {
    font-size: 1.15rem;
    border-bottom: 1px solid ${colors.base7};
  }
`

export const Image = styled.div`
  display: flex;
  width: 10rem;
  height: 135px;
  margin: .5rem;
  align-content: center;
  img {
    margin: auto;
    transform: scale(2.5);
    ${mixins.pixelated}
  }
`

export const Stats = styled.div`
  font-family: monospace;
  font-size: 1.3rem;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-around;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 1px 1px 3px ${colors.base6};
`

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin: .25rem;

  &:before {
    font-size: .9rem;
    opacity: .5;
    content: attr(data-label);
  }
`

export const StatGroup = styled.div`
  display: flex;
  flex-flow: inherit;
  align-items: flex-end;
  flex-grow: 1;
  justify-content: space-around;
  padding: .5rem 1rem ;
`

export const smallStatGroup = css`
  background-color: ${colors.base7};
  flex-basis: 20%;
`

export const Core = styled(StatGroup)``
export const Leveling = styled(StatGroup)`
  ${smallStatGroup}
`
export const Endurance = styled(StatGroup)`
  ${smallStatGroup}
`

export const Skills = styled.div`
  margin: 1rem 0;
  display: flex;
  border-radius: 5px;
  border: 1px solid ${colors.base7};
  & > *+* { border-left: 1px solid ${colors.base7}; }
`

export const Skill = styled(Router.Link)`
  flex-grow: 1;
  padding: 1rem;
`

export const BredWith = styled.div``
export const BreedingPair = styled.div`
  flex-basis: 100%;
  display: flex;
`

export const PairPiece = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-flow: row wrap;
`

export const PairBase = styled(PairPiece)``
export const PairMates = styled(PairPiece)``