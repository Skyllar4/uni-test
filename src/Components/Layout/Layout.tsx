import React from 'react'

interface LayoutElements {
    children?: React.ReactNode
}

export default function Layout({children}: LayoutElements) {
  return (
    <main>
        {children}
    </main>
  )
}
