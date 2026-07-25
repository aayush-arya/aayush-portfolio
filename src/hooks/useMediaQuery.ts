import { useEffect, useState } from 'react'

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => (typeof window !== 'undefined' ? window.matchMedia(query).matches : false))

  useEffect(() => {
    const mql = window.matchMedia(query)
    const listener = () => setMatches(mql.matches)
    mql.addEventListener('change', listener)
    return () => mql.removeEventListener('change', listener)
  }, [query])

  return matches
}
