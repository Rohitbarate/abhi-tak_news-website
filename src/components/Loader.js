import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (
            <div className="conatainer d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                <div className="spinner-border" style={{width: "3rem",height: "3rem" }}role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}
