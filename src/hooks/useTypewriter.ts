import { useEffect, useState } from 'react'

type Options = {
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export function useTypewriter(words: string[], { typingSpeed = 80, deletingSpeed = 40, pauseTime = 1600 }: Options = {}) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing')

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (phase === 'typing') {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed)
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pauseTime)
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 200)
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed)
      } else {
        setWordIndex((i) => (i + 1) % words.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}
