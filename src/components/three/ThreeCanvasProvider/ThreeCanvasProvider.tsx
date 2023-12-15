'use client'

import dynamic from 'next/dynamic'
import { ReactNode, useRef } from 'react'

const Canvas = dynamic(() => import('./Canvas').then((mod) => mod.Canvas), {
  ssr: false,
})

type Props = {
  children: ReactNode
}

export const ThreeCanvasProvider = ({ children }: Props) => {
  const ref = useRef(null)

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: ' 100%',
        height: '100%',
        overflow: 'auto',
        touchAction: 'auto',
      }}
    >
      {children}
      <Canvas
        style={{
          position: 'absolute',
          inset: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
        eventSource={ref}
        eventPrefix="client"
      />
    </div>
  )
}
