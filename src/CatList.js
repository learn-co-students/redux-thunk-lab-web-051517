import React from 'react'

const CatList = ({ catPics }) => {

  const cats = catPics.map(cat => {
    return <img id={cat.id} src={cat.url} role="presentation" />
  })

  return <div>{cats}</div>
}

export default CatList
