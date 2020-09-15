import React from 'react'
import './Board.css'

class Board extends React.Component {
    render() {
        const { params } = this.props.match;
        const { search } = this.props.location;
        const filename = search.split("=")[1];
        return (
            <div className="card">
                <div className="card-left">
                    게시글 {params.id}
                    <h2>제목</h2>
                    {params.title}<br />
                </div>
                <div className="card-right">
                    <img src={filename} alt=""/>
                </div>
            </div>
        )
    }
}


export default Board