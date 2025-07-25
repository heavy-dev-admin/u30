import clsx from 'clsx'
import React from 'react'

interface GridProps {
  className?: string
  children: React.ReactNode
}

export default function Container({ className, children }: GridProps) {
  return <div className={clsx('max-content', className)}>{children}</div>
}
