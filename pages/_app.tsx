import React from 'react'
import Head from 'next/head'
import 'antd/dist/antd.css'
import wrapper from '../store/configureStore'

//next-redux-wrapper가 알아서 Provider로 감쌌기 떄문에 이걸 사용하면 중복되어 에러가 발생한다. 
const App = ({ Component }: any) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>
          NodeBird
        </title>
      </Head>
      <Component />
    </>
  )
}

export default wrapper.withRedux(App);