import { Button, Form, Input } from 'antd'

import { useSelector, useDispatch } from 'react-redux';
import React, { useCallback, useState } from 'react'
import { InitialStateProps } from '../store/configureStore';
import setValue from '../hooks/useInput';

const PostForm = () => {
  const { imagePaths } = useSelector((state: InitialStateProps) => (
    state.postReducer
  ))

  const dispatch = useDispatch()

  // const [text, setText] = useState('');
  // const onChangeText = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setText(e.target.value)
  // }, [])
  const [text, setText] = setValue('')

  const onSubmit = useCallback(() => {
    // dispatch('')
    console.log('clicked onSubmit')
  }, [])

  return (
    <Form
      style={{
        margin: '10px 0 20px',
      }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={setText}
        maxLength={140}
        placeholder='뭔일 있음?'
      />
      <div>
        <input type='file' multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType='submit'>짹짹</Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={v} style={{ width: '200px' }} alt="v" />
            <Button>제거</Button>
          </div>
        ))}
      </div>
    </Form>
  )
}

export default PostForm