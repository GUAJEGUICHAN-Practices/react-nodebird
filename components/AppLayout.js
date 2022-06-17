import React from 'react'

export const AppLayout = ({children}) => {
  return (
    <div>
        <div>공통메뉴</div>
        {children}
    </div>
  )
}
