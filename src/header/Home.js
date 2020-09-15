import React, { useState, useEffect } from 'react'
import ImgLayout from './ImgLayout'
import { Link } from 'react-router-dom'


// import Board from './Board'

const Home = () => {

    const [Image, setImage] = useState({ board: [] })

    const dbApi = async () => {
        const res = await fetch('/api/board')
        const body = await res.json();
        return body;
    }

    useEffect(() => {
        dbApi()
            .then(res => setImage({ board: res }))
    }, [])

    return (
        <>
            <div className="columns">
                {Image.board.map((image) => {
                    return (
                        <>
                            <Link to={`/board/${image.id}/${image.title}?image=${image.image}`} key={image.id}>
                                <ImgLayout title={image.title} img={image.image} key={image.id} />
                            </Link>
                        </>
                    )
                })}
                {Image.board.map((image) => {
                    return (
                        <>
                            <Link to={`/board/${image.id}/${image.title}?image=${image.image}`} key={image.id}>
                                <ImgLayout title={image.title} img={image.image} key={image.id} />
                            </Link>
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default Home