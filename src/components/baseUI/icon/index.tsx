import React from 'react';
import classNames from 'classnames';
import './icon.scss'

interface IconProps {
  className?: string
  style?: React.CSSProperties
  type: string
}

const Icon: React.FC<IconProps> = (props) => {
  const { className, type, style } = props

  const rootStringClass = classNames({
    'ami-icon': true,
    [`${className}`]: className
  })
  return (
    <svg style={style} className={rootStringClass} aria-hidden="true">
      <use xlinkHref={`#${type}`}></use>
    </svg>
  )
}

export default React.memo(Icon);
