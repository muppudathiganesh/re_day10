import React from 'react'

export default function FruitList(){
  const fruits = [
    { id: 'f1', name: 'Apple', desc: 'Crisp and sweet' },
    { id: 'f2', name: 'Banana', desc: 'Soft and creamy' },
    { id: 'f3', name: 'Cherry', desc: 'Small and tart' },
    { id: 'f4', name: 'Date', desc: 'Sweet and chewy' },
  ]

  return (
    <div>
      <h2>Fruits (using keyed React.Fragment)</h2>
      <dl>
        {fruits.map(fruit => (
          <React.Fragment key={fruit.id}>
            <dt style={{ fontWeight: 700 }}>{fruit.name}</dt>
            <dd style={{ margin: '0 0 8px 12px', color: '#555' }}>{fruit.desc}</dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  )
}
