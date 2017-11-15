import React from 'react'

const CatList = (props) => {
  const renderCats = props.catPics.map(catPic =>
      <div>
        <img src={catPic.url} classname="thumbnail responsive" role="presentation"/>
      </div>
)

  return (
    <div>
      {renderCats}
    </div>
  )
}

export default CatList