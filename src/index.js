import React from 'react'
import { useLazyLoad } from './index-model'
import { classNames } from './utils/enum'

export const LazyLoad = ({ children, ...props }) => {
  const { ref, className, css } = useLazyLoad(props)

  return (
    <div
      ref={ref}
      className={`${classNames.DEFAULT} ${className} ${props?.className}`}
      style={css}
    >
      {children}
    </div>
  )
}
