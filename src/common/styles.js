import { css } from 'styled-components'

export const mixins = {
  pixelated: css`
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
  `
}

function grey(scale) {
  let n = Math.round(scale * (255 / 10))
  return `rgb(${n}, ${n}, ${n})`
}

export const colors = {
  base0:  grey(0),
  base1:  grey(1),
  base2:  grey(2),
  base3:  grey(3),
  base4:  grey(4),
  base5:  grey(5),
  base6:  grey(6),
  base7:  grey(7),
  base8:  grey(8),
  base9:  grey(9),
  base10: grey(10),

  black: grey(0),
  white: grey(10),

  blue1: "#182e42",
  blue2: "#24425e",
  blue3: "#2e587d",
  blue4: "#356f9f",
  blue5: "#4289c4",
  blue6: "#58a0e1",
  blue7: "#82b8f0",
  blue8: "#b0cff5",
  blue9: "#d5e7ff",
}