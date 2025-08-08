import clsx from 'clsx'
import React from 'react'

interface SectionProps {
  className?: string
  id?: string
  children: React.ReactNode
  style?: React.CSSProperties
}
export default function Section({ className, id, style, children }: SectionProps) {
  return (
    <section className={clsx('px-4 md:px-6.5', className)} id={id} {...(style && { style })}>
      {children}
    </section>
  )
}
