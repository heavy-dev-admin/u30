import { Label, Stack, Text } from '@sanity/ui'
import React from 'react'
import { set, unset } from 'sanity'

export default function SizeSlider({ value, onChange, schemaType, elementProps }) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10)
    onChange(val ? set(val) : unset())
  }

  return (
    <Stack space={3}>
      <Label>{schemaType.title}</Label>
      <input
        type="range"
        min={50}
        max={100}
        step={10}
        value={value ?? 50}
        onChange={handleChange}
        {...elementProps}
        style={{ width: '100%' }}
      />
      <Text size={1}>{value === 100 ? 'Default size' : `${100 - value}% smaller`}</Text>
    </Stack>
  )
}
