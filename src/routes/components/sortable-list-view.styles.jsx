import styled from 'styled-components'
import { colors } from '../../common/styles'

export const SortableListWrapper = styled.div`
  max-width: 35rem;
`

export const Stat = styled.div`
  min-width: 2rem;
  margin: 0 .5rem;
  text-align: center;
  input { height: 2rem; }
`

export const StatSorter = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 35rem;
  margin: 0 auto;
`

export const Field = styled.label`
  display: flex;
  flex-flow: column nowrap;
  input {
    background-color: ${colors.base7};
    box-shadow: inset 1px 1px 2px ${colors.base6};
    border-radius: 3px;
    padding: .5rem;
    color: ${colors.base2};
    border: none;
    max-width: 2.5rem;
    height: 2rem;
    &[disabled] { opacity: .5; }
  }
`

export const Label = styled.label``