import { redirect } from 'next/navigation'

export default function CatchAll() {
  console.log('here')
  redirect('/404')
}
