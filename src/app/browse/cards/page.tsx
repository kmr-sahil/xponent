
import Gradient from '@/components/cards/Gradient'
import ContentContainer from '@/components/container'
import React from 'react'

export default function Page() {
  return (
    <div className='flex flex-col gap-[2rem]'>
    <ContentContainer
      title="Exclusion Tabs"
      description={
        <p>
          I've seen many creative ways to highlight the active tab from the rest. A different <span className="text-amber-700">background colour</span>, a dot indicator, or a bottom bar. I wondered what it would be like to <em className="italic">literally</em> exclude/separate the active tab from the others.
        </p>
      }
      component={<Gradient />}
      link="#"
    />

    <ContentContainer
      title="Exclusion Tabs"
      description={
        <p>
          I've seen many creative ways to highlight the active tab from the rest. A different <span className="text-amber-700">background colour</span>, a dot indicator, or a bottom bar. I wondered what it would be like to <em className="italic">literally</em> exclude/separate the active tab from the others.
        </p>
      }
      component={<Gradient />}
      link="#"
    />
    </div>
  )
}

