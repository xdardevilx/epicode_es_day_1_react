import React from "react"

class ImageComponent extends React.Component{
    render (propsObj){
        return <img src={propsObj.src} alt={propsObj.alt} />
    } 
}


export default ImageComponent