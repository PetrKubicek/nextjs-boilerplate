'use client'

import { OrbitControls, View as DreiView } from '@react-three/drei'
import { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react'

import { tunnel } from '../helpers'

type Props = {
  children: ReactNode
  orbitControls?: boolean
  className?: string
}

export const View = forwardRef(
  ({ children, orbitControls, ...props }: Props, ref) => {
    // @note https://docs.pmnd.rs/react-three-fiber/tutorials/typescript#typing-with-useref
    const localRef = useRef(null!)

    useImperativeHandle(ref, () => localRef.current)

    return (
      <>
        <div ref={localRef} {...props} />
        <tunnel.In>
          <DreiView track={localRef}>
            {children}
            {orbitControls && <OrbitControls />}
          </DreiView>
        </tunnel.In>
      </>
    )
  },
)

View.displayName = 'View'
