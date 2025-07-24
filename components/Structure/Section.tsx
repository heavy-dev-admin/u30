import React from 'react'

interface SectionProps {
  className?: string
  id?: string
  children: React.ReactNode
  style?: React.CSSProperties
}
export default function Section({ className, id, style, children }: SectionProps) {
  return (
    <section className={className} id={id} {...(style && { style })}>
      {children}
    </section>
  )
}
