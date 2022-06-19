import { useState, useCallback } from 'react'

const  setValue =  (initialState) => {
  const [value, setValue] = useState(initialState);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, [])

  return [value,handler];
}

export default setValue;