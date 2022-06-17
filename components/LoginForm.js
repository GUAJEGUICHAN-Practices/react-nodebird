import { Button, Form } from 'antd'
import Input from 'antd/lib/input/Input'
import React, {useState, useCallback} from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
    margin-top: 10px;
`

const LoginForm = ({setLoggedIn}) => {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    // const [id, setId] = useState('')

    const onChangeId=useCallback((e)=>{
        setId(e.target.value)
    },[]);

    const onChangePassword=useCallback((e)=>{
        setPassword(e.target.value)
    },[]);

    const handleFinish = useCallback((e)=>{
        //e.preventDefault(); antd Form은 해당 함수가 이미 처리되어있다. 
        console.log(id,password)
        setLoggedIn(true)

    })

  return (
    <Form
    onFinish={handleFinish}
    >
        <div>
            <label htmlFor="user-id">아이디</label>
            <Input name='user-id' type="text" value={id} onChange={onChangeId} required/>
        </div>
        <div>
        <label htmlFor="user-password">비밀번호</label>
            <Input name='user-password' type="text" value={password} onChange={onChangePassword} required/>
        </div>
        <ButtonWrapper>
            <Button type='primary' htmlType='submit' loading={false}>로그인</Button>
            <Link href="signup"><a><Button>회원가입</Button></a></Link>
        </ButtonWrapper>
        <div>
        </div>
    </Form>
  )
}

export default LoginForm