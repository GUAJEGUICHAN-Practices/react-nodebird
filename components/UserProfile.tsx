import { Card, Avatar, Button } from 'antd'
import React from 'react'
import styled from 'styled-components'

const CardMetaWrapper = styled.div`
    display:flex;
    /* flex-direction:row;
    justify-content:space-between; */
    flex-direction: column;
    gap:10px;
`


const UserProfile = ({ setLoggedIn }: any) => {

  const handleLogOut = () => {
    setLoggedIn(false)
  }

  return (
    <Card
      actions={[
        <div key="twit">짹짹<br />0</div>,
        <div key="followings">팔로잉<br />0</div>,
        <div key="followers">팔로워<br />0</div>,
      ]}
    >
      <CardMetaWrapper>
        <Card.Meta
          avatar={<Avatar>Tim</Avatar>}
          title="Timothy"
        />
        <Button
          onClick={handleLogOut}
        >
          로그아웃
        </Button>
      </CardMetaWrapper>
    </Card>
  )
}

export default UserProfile