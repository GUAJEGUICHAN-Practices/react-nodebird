import React from 'react'
import Head from 'next/head'
import 'antd/dist/antd.css'
const App = ({Component}) => {
  return (
    <>
        <Head>
            <meta charSet='utf-8'/>
            <title>
                NodeBird
            </title>        
        </Head>
        <Component/>
    </>
  )
}

export default App;