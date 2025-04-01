import React from 'react'

const Props = (props) => {
   
  return (
   <div>
  
     <h1>title:{props.role} Developer</h1>
     {/* <h2>I am a { props.brand.model }!</h2>; */}
     <p>Description About {props.about}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, at illum. Non assumenda nostrum labore totam eius dignissimos voluptatibus esse.</p>
   </div>
  )
}

export default Props