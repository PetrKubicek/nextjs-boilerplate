'use client'

import { Preload } from '@react-three/drei'
import { Canvas as R3FCanvas } from '@react-three/fiber'

import { tunnel } from '../helpers'

export const Canvas = ({ ...props }) => {
  // Everything defined in here persists between route changes, only children are swapped
  return (
    <R3FCanvas {...props}>
      <tunnel.Out />

      {/* 
        By default WebGLRenderer compiles materials only when they enter the camera's view (frustrum).
        Preload component uses gl.compile to precompile the entire scene upfront, 
        ensuring smoother performance from the start.
      */}
      <Preload all />
    </R3FCanvas>
  )
}
