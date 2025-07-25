import clsx from 'clsx'
import React from 'react'

interface GridProps {
  className?: string
  children: React.ReactNode
}

export default function Grid({ className, children }: GridProps) {
  const baseClasses = `grid grid-cols-2 gap-x-[10px]`

  const desktopClasses = `lg:grid-cols-10 lg:col-gap-4 max-content`

  return <div className={clsx(baseClasses, desktopClasses, className)}>{children}</div>
}
