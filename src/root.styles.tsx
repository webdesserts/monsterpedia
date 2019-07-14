import { createGlobalStyle } from 'styled-components'
import { colors } from './common/styles'

export const RootStyles = createGlobalStyle`
*, *:before, *:after {
  box-sizing: inherit;
}

html {
  font-size: 100%;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  min-width: 602px;
}

body {
  background-color: ${colors.base9};
  color: ${colors.blue2};
}

#app {
  height: 100%;
}

a {
  color: ${colors.blue4};
  text-decoration: none;
  cursor: pointer;

  &:hover{
    text-decoration: underline;
    color: ${colors.blue5};
  }
}

button {
  color: ${colors.white};
  height: 2rem;
  background-color: ${colors.blue1};
  border: none;
  &:hover, &:active { background-color: ${colors.blue2}; }
}

`
