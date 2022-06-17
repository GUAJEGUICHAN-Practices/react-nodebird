import React from 'react'
import Link from 'next/link'
export const AppLayout = ({children}) => {
  return (
    <div>
        <Link href="/">홈으로</Link>
        <Link href="/profile">내 정보</Link>
        <Link href="/signup">회원가입</Link>
        {children}
    </div>
  )
}
