import React from 'react'
import TopBar from '../global/TopBar'

export default function Dashboard({el}) {
  return (
    <section id='mainSection'>
      <TopBar />
      <div>{el}</div>
    </section>
  )
}
