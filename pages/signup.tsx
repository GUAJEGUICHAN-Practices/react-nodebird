import { Form, Checkbox, Button } from 'antd'
import Input from 'antd/lib/input/Input'
import React, { useCallback, useState } from 'react'
import { AppLayout } from '../components/AppLayout'
import Head from 'next/head'
import useInput from '../hooks/useInput'
import styled from 'styled-components'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

const Title = styled.div``

const ErrorMessgae = styled.div`
  color:red;
`

export default function signup() {
  const [id, onChangeId] = useInput('')
  const [nickname, onChangeNickname] = useInput('')
  const [password, onChangePassoword] = useInput('')

  const [passwordCheck, setPasswordCheck] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const onChagePasswordCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
    setPasswordError(password !== e.target.value)
  }, [password])

  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e: CheckboxChangeEvent) => {
    setTerm(e.target.checked);
    console.log(e.target.checked)
    setTermError(false);
  }, [term])

  const onSubmit = useCallback((e: SubmitEvent) => {
    console.log('회원가입 요청')
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    console.log(term)
    if (!term) {
      return setTermError(true);
    }
    console.log(id, nickname, password)
  }, [password, passwordCheck, term])

  return (
    <>
      <AppLayout>
        <Head>
          <title>회원가입 | NodeBird</title>
        </Head>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" value={id} required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nickname">닉네임</label>
            <br />
            <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input name="user-password" value={password} required onChange={onChangePassoword} />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호 확인</label>
            <br />
            <Input name="user-password-check" value={passwordCheck} required onChange={onChagePasswordCheck} />
            {passwordError && <ErrorMessgae>비밀번호 확인 실패</ErrorMessgae>}
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>규칙을 준수할 것을 동의합니다.</Checkbox>
            {termError && <ErrorMessgae>약관에 동의해야합니다.</ErrorMessgae>}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType='submit'>가입하기</Button>
          </div>
        </Form>
      </AppLayout>
    </>
  )
}
