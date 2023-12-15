'use client'

import { MeshDistortMaterial } from '@react-three/drei'
import dynamic from 'next/dynamic'

import styles from './ThreeExample.module.css'

const View = dynamic(
  () => import('@/components/three/View').then((mod) => mod.View),
  {
    ssr: false,
    loading: () => (
      <div className={styles.loader}>
        <svg className={styles.loaderSvg} fill="none" viewBox="0 0 24 24">
          <circle
            className={styles.loaderCircle}
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className={styles.loaderPath}
            fill="currentColor"
            d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    ),
  },
)

const ViewCommonLightingAndCamera = dynamic(
  () =>
    import('@/components/three/View').then(
      (mod) => mod.ViewCommonLightingAndCamera,
    ),
  { ssr: false },
)

export const ThreeExample = () => {
  return (
    <View orbitControls className={styles.view}>
      <mesh>
        <torusGeometry args={[0.7, 0.4, 16, 100]} />
        <MeshDistortMaterial roughness={0} color="#13b4ff" />
      </mesh>
      <ViewCommonLightingAndCamera />
    </View>
  )
}
