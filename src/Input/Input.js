import React from 'react'
import styled from 'styled-components'
import { shade, darken, tint, normalize } from 'polished'
import { theme } from '../variables'

// We need this on every component to apply our minimal base
// This runs on top of normalize.css which is included here in the storybook
// template, we don't want to call it from here since we don't want it included
// on every component
import globalStyles from '../styles.global'
globalStyles()

const StyledInput = styled.input`
  ${props => computeStyles(props.type)}
`

const computeStyles = type => {
  switch (type) {
    case 'checkbox':
    case 'radio':
      return `
        display: inline;
        margin-right: ${theme.smallSpace};
      `
    case 'file':
      return `
        margin-bottom: ${theme.baseSpace};
        width: '100%';
      `
    default:
      return `
        appearance: none;
        border-width: 1px;
        border-color: ${theme.borderColor};
        border-radius: ${theme.borderRadius};
        border-style: solid;
        box-shadow: none;
        box-sizing: border-box;
        color: ${theme.fontColor};
        font-family: ${theme.fontFamily};
        font-size: ${theme.fontSize};
        margin-bottom: ${theme.baseSpace};
        padding-bottom: ${theme.baseSpace};
        padding-left: ${theme.baseSpace};
        padding-top: ${theme.baseSpace};
        padding-right: ${theme.baseSpace};

        &:hover {
          border-color: ${shade(0.2, theme.borderColor)};
        }

        &:focus {
          border-color: ${theme.actionColor.light};
          box-shadow: ${theme.formBoxShadowFocus};
          outline: none;
        }

        &:disabled {
          background-color: ${darken(0.02, theme.backgroundColor)};
          cursor: not-allowed;

          &:hover {
            border: ${theme.border};
          }
        }

        &::placeholder {
          color: ${tint(0.4, theme.fontColor)};
        }
        `
  }
}

const Input = props => {
  return <StyledInput {...props} />
}

export default Input
