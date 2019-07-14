import styled from 'styled-components'
import { colors } from '../../common/styles'
import * as Router from 'react-router-dom'

export const Page = styled.div`
  display: flex;
  margin: 2rem 0;
  justify-content: space-around;
`

export const SkillList = styled.div``

export const Skill = styled.div`
  padding: .5rem 0;
  display: flex;
  color: inherit;
`

export const SkillLink = styled(Skill).attrs({ as: Router.Link })`
  transition: transform 200ms ease;

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
  min-width: 5.5rem;
  margin-right: .5rem;
  font-weight: bold;
`

export const Mp = styled.div`
  min-width: 1.75rem;
  margin-right: 1rem;
  text-align: right;
`
export const Description = styled.div``