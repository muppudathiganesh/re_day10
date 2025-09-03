import React from 'react'
import FruitList from './components/FruitList'

export default function App(){
  return (
    <div style={{ padding: 24, fontFamily: 'Segoe UI, Roboto, system-ui' }}>
      <h1>Fruit List — React.Fragment keys demo</h1>
      <FruitList />
    </div>
  )
}
