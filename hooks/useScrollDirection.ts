import { useEffect, useRef, useState } from 'react'

function useScrollDirection() {
  const lastScrollY = useRef(0)
  const [scrollDirection, setScrollDirection] = useState('up')

  const updateScrollDirection = () => {
    const scrollY = window.scrollY

    if (scrollY >= lastScrollY.current) {
      setScrollDirection('down')
    } else {
      setScrollDirection('up')
    }

    lastScrollY.current = scrollY > 0 ? scrollY : 0
  }

  useEffect(() => {
    window.addEventListener('scroll', updateScrollDirection)

    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
    }
  }, [])

  return scrollDirection
}

export default useScrollDirection
