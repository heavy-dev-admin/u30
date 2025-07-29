import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'

import animationData from '../public/intro.json'

export default function LottieIntro({ onComplete }: { onComplete: () => void }) {
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      handleIntroEnd()
    }, 100000)
    return () => clearTimeout(timer)
    //eslint-disable-next-line
  }, [onComplete])

  const handleIntroEnd = () => {
    setIsDone(true)

    setTimeout(() => {
      onComplete()
    }, 1000)
  }

  return (
    <div
      className={`fixed inset-0 z-50 bg-cream flex flex-col items-center justify-center transition-opacity duration-1000 ${
        isDone ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <Lottie animationData={animationData} loop={true} className="w-[300px] h-[300px]" />
      <button
        className="absolute bottom-10 left-0 right-0 text-body-small hover:underline cursor-pointer"
        onClick={handleIntroEnd}
      >
        SKIP INTRO
      </button>
    </div>
  )
}
