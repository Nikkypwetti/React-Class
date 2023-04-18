import React from 'react'

const Object = () => {
    let divStyle = {
        color: "red",
        fontSize: "45px",
        backgroundColor: "green",
    }

    let food = {
        swallow: "Amala",
        soup: "Abula",
        animals: "ponmo",
        animal: "Beef",
    }

  return (
    <>
    <div className='border border-danger' style= {{color:"red",backgroundColor:"yellow"}}>navbar</div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit itaque excepturi adipisci fugiat, quo laborum recusandae praesentium quas expedita facere, vel beatae vitae iusto molestiae, mollitia accusantium. Facere, hic illum?</div>

    {food.swallow}

    <div style={divStyle}>This is styling</div>
    </>
  )
}

export default Object
