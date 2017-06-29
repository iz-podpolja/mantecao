import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../variables'

import CloseIcon from '../icons/CloseIcon'

// We need this on every component to apply our minimal base
// This runs on top of normalize.css which is included here in the storybook
// template, we don't want to call it from here since we don't want it included
// on every component
import globalStyles from '../styles.global'
globalStyles()

const CloseSpan = styled.span`
  cursor: pointer;
  display: inline-block;
  margin-left: 0.35em;

  &:hover {
    color: rgba(188, 33, 63, 1);
  }
`

const TagDiv = styled.div`
  background-color: ${props =>
    props.hovered ? 'rgba(188, 33, 63, 0.2)' : 'rgba(248,193,80, 0.2)'};
  border: ${props =>
    props.hovered
      ? '1px solid rgba(248,193,80, 0.2)'
      : '1px solid rgba(188, 33, 63, 0.3)'};
  border-left: 4px solid;
  border-left-color: ${props =>
    props.hovered ? 'rgba(188, 33, 63, 1)' : colors.goldenTainoi};
  border-radius: 2px;
  color: ${props => (props.hovered ? colors.emperor : colors.dustyGray)};
  display: inline-block;
  font-size: 0.8rem;
  padding-right: 0.7em;
`

const TagSpan = styled.span`
  display: inline-block;
  padding: 0.5em 0.1em 0.5em 0.8em;
`

const AdjustedCloseIcon = (
  <CloseIcon
    style={{
      height: '1.2em',
      width: '1.2em',
      strokeWidth: '2.5px',
      marginBottom: '0.2em'
    }}
  />
)

class Tag extends Component {
  state = {
    hovered: false
  }

  render() {
    const { name, onClickAction } = this.props

    return (
      <TagDiv hovered={this.state.hovered}>
        <TagSpan>{name}</TagSpan>
        {onClickAction &&
          <CloseSpan
            onClick={() => onClickAction(name)}
            onMouseEnter={() => {
              this.setState({ hovered: true })
            }}
            onMouseLeave={() => {
              this.setState({ hovered: false })
            }}
          >
            {AdjustedCloseIcon}
          </CloseSpan>}
      </TagDiv>
    )
  }
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  onClickAction: PropTypes.func
}

export default Tag
