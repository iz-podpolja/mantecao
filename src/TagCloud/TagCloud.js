import React, { PropTypes } from 'react'
import Tag from '../Tag'

import { styles } from './styles'

const TagCloud = ({ names, onClickAction }) =>
  <div>
    {names.map((name, i) =>
      <div {...styles.item} key={i}>
        {onClickAction
          ? <Tag name={name} onClickAction={name => onClickAction(name)} />
          : <Tag name={name} />}
      </div>
    )}
  </div>

TagCloud.propTypes = {
  names: PropTypes.array,
  onClickAction: PropTypes.func
}

export default TagCloud
