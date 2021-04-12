import React from 'react'

export default function EmptyBag() {
    return (
        <div className="container mt-5">
            <img src="images/icon/empty.jpg" alt="empty bag" />
            <div className="col-10 mx-auto text-center text-title">
                <h1>Your bag is currently empty</h1>
            </div>
        </div>
    )
}
