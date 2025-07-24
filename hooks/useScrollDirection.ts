import { THROTTLE_TIME } from 'constant'
import { useEffect, useRef, useState } from 'react'
import { throttle } from 'utils/common'

function useScrollDirection() {
  const lastScrollY = useRef(0)
  const [scrollDirection, setScrollDirection] = useState('up')

  useEffect(() => {
    const updateScrollDirection = throttle(() => {
      const scrollY = window.scrollY

      if (scrollY >= lastScrollY.current) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }

      lastScrollY.current = scrollY > 0 ? scrollY : 0
    }, THROTTLE_TIME)

    window.addEventListener('scroll', updateScrollDirection)

    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
    }
  }, [])

  return scrollDirection
}

export default useScrollDirection
