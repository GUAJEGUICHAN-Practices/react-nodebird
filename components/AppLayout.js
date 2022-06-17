import React,{useState} from 'react'
import Link from 'next/link'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const items=[
  {
    label: '홈으로',
    key: 'home',
    // icon: <MailOutlined />,
  },  {
    label: '내 정보',
    key: 'myInfo',
    // icon: <MailOutlined />,
  },
  {
    label: '회원가입',
    key: 'signUp',
    // icon: <MailOutlined />,
  },
]

export const AppLayout = ({children}) => {
  const [current, setCurrent] = useState('home');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
        {/* <Link href="/">홈으로</Link>
        <Link href="/profile">내 정보</Link>
        <Link href="/signup">회원가입</Link> */}
        {children}
    </div>
  )
}
