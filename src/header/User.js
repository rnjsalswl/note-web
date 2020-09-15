import React from 'react'
import './User.css'
// { authenticated, component: Component, user, render, ...rest }
function User({email,password, name, gender}) {

    return (
        <>
            {/* <Route
                {...rest}
                render={(props) =>
                    authenticated ? (
                        render ? (
                            render(props)
                        ) : (
                                <Component {...props} />
                            )
                    ) : (
                            <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                        )
                }
            /> */}
            <h1>회원정보</h1>
            <div className="userpage">
                <div className="col">
                    <p className="h2">이름</p>
                    <p className="p">{name}</p>
                </div>
                <div className="col">
                    <p className="h2">성별</p>
                    <p className="p">{gender}</p>
                </div>

                <div className="col">
                    <p className="h2">이메일</p>
                    <p className="p">{email}</p>
                </div>
                <div className="col">
                    <p className="h2">비밀번호</p>
                    <p className="p">{password}</p>
                </div>

            </div>
        </>
    );
}

export default User