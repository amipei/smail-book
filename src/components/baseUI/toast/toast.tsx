import React, { useState, useEffect, useRef, useCallback } from 'react'
import eventBus from './eventBus';
import './toast.scss'

const Toast = () => {
  const [text, setText] = useState<string>("")
  const setTextRef = useRef<any>(null)

  const show = (str: string) => {
    if (text !== '') return;

    setText(str)
    setTimeout(() => {
      setText('')
    }, 3000)
  }
  useEffect(() => {
    eventBus.on(show)
    return () => eventBus.off(show)
  }, [text])

  if (text === '') return null
  return (
    <div className="toast">
      {text}
    </div>
  )
}

export default React.memo(Toast)
