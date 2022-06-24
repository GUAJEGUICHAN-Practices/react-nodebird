import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { Input, Menu, Row, Col } from 'antd';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn } from '../slices/authSlice';

const SearchInput = styled(Input.Search)`
  align-self:center;
`

const items = [
  {
    label: (
      <Link href="/">홈으로</Link>
    ),
    key: 'home',
    // icon: <MailOutlined />,
  }, {
    label: (
      <Link href="/profile">내 정보</Link>
    ),
    key: 'myInfo',
    // icon: <MailOutlined />,
  },
  {
    label: (
      <Link href="/signup">회원가입</Link>
    ),
    key: 'signUp',
    // icon: <MailOutlined />,
  }, {
    label: (
      <SearchInput enterButton />
    ),
    key: 'search'
  }
]

export const AppLayout = ({ children }: any) => {
  // const [isLoggedIn, setLoggedIn] = useState(false)

  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: any) => (
    state.authReducer.user
  ))
  const [current, setCurrent] = useState('home');

  const handleLogin = (state: boolean) => {
    dispatch(setLoggedIn(state))
  }

  const onClick = (e: any) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  useEffect(() => {
    console.log("isLoggedIn : ", isLoggedIn)
  }, [isLoggedIn])

  return (
    <div>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
      <Row gutter={4}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile setLoggedIn={handleLogin} /> : <LoginForm setLoggedIn={handleLogin} />}
        </Col>
        <Col xs={24} md={12}>{children}</Col>
        <Col xs={24} md={6}>
          <a
            href="https://velog.io/@qkr135qkr"
            target="_blank" //새 창에서 띄우기
            rel='noreferrer noopener'//다른페이지에서 누가 열었는지 정보를 없애는 작업이다.
          >
            Made by Timothy
          </a>
        </Col>
      </Row>
    </div>
  )
}
