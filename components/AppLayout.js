import React,{useState} from 'react'
import Link from 'next/link'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Input, Menu, Row, Col } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
  align-self:center;
`

const items=[
  {
    label: (
      <Link href="/">홈으로</Link>
    ),
    key: 'home',
    // icon: <MailOutlined />,
  },  {
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
  },{
    label:(
      <SearchInput enterButton/>
    ),
    key: 'search'
  }
]

 const AppLayout = ({children}) => {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [current, setCurrent] = useState('home');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
        {/* <Menu
        mode='horizontal'
        >
          <Menu.Item>
            <Link href="/">홈으로</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/profile">내 정보</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/signup">회원가입</Link>
          </Menu.Item>
          <SearchInput enterButton/>
        </Menu> */}
        <Row gutter={4}>
          <Col xs={24} md={6}>
            {isLoggedIn ? <UserProfile setLoggedIn={setLoggedIn}/> : <LoginForm setLoggedIn={setLoggedIn}/>}
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
        {/* {children} */}
    </div>
  )
}


// export default React.memo(AppLayout,[])