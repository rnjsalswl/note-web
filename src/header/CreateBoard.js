import React from 'react'
import './CreateBoard.css'
function CreateBoard() {
   
    return (
        <>
            <div className="wrap">
                <form method="post" action="/CreateBaord">
                    <h1>게시판 작성</h1>
                    <input className="iTitle" name="title" type="text" placeholder="Title" />
                    <br />
                    <input className="iFile" name="img" type="file" placeholder="image file" />
                    <br/>
                    <button type="submit" className="btnSubmit">업로드</button>
                </form>
            </div>
        </>
    )
}

export default CreateBoard