import React from 'react'
import './ImgLayout.css'


const ImgLayout = ({ img, title }) => {
    return (
        <>
            <figure>
                <Img img={img}/>
                <Title  title={title}/>
            </figure>
        </>
    )
}

const Img = ({img}) => {
    return (
        <>
            <img src={img} alt="img" />
        </>
    )
}

const Title = ({title}) =>{
    return (
        <>
            <figcaption>{title}</figcaption>
        </>
    )
}
export default ImgLayout