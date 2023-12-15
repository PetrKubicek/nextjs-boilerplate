'use client'

import { PerspectiveCamera } from '@react-three/drei'

type Props = {
  color?: string
}

/**
 * Feel free to use this component as a placeholder for lightning and camera until you configure your own.
 */
export const ViewCommonLightingAndCamera = ({ color }: Props) => (
  <>
    {color && <color attach="background" args={[color]} />}
    <ambientLight intensity={1} />
    <pointLight position={[20, 30, 10]} intensity={1} decay={0} />
    <pointLight position={[-10, -10, -10]} color="#ffffff" decay={0} />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </>
)
