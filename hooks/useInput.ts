import { useState, useCallback } from 'react'

type setTagetValueProps = [string, Function, Function]

const setTagetValue = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const handler = (e: any) => {
    setValue(e.target.value);
  }
  const reset = useCallback(() => {
    setValue('');
  }, [])

  return [value, handler, reset];
}

const setValue = (initialState: any) => {
  const [value, setValue] = useState(initialState);
  const handler = useCallback((value: any) => {
    setValue(value);
  }, [])

  return [value, handler];
}

export { setTagetValue, setValue };

export default setValue;
