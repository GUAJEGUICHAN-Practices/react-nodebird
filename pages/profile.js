import React from 'react'
import { AppLayout } from '../components/AppLayout'
import Head from 'next/head'
import NicknameEditForm from '../components/NickNameEditForm'
import FollowList from '../components/FollowList'

export default function profile() {
  const followingList = [{nickname:'베드로'},{nickname:'요한'},{nickname:'야고보'}];
  const followerList = [{nickname:'베드로'},{nickname:'요한'},{nickname:'야고보'}];

  return (
    <>
    <Head>
      <title>내 프로필 | NodeBird</title>
    </Head>
      <AppLayout>
        <NicknameEditForm/>
        <FollowList header="팔로잉 목록" data={followingList}/>
        <FollowList header="팔로워 목록" data={followerList}/>
      </AppLayout>
    </>
  )
}
