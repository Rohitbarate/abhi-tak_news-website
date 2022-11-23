import React, { Component } from 'react'

export default class NewsItem extends Component {
render() {
   let {title,desc,img,url}=this.props
  return (
    <div className="NewsItem" style={{}}>
      <div className="card m-3" style={{ width: "20rem",border:"2px solid #706c6cb0",borderRadius:"2%" }}>
        <img src={img} className="card-img-top news-img" alt="..."  style={{ maxHeight: "200px"}}/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{desc}...</p>
          <a href={url} target="_blank" className="btn btn-primary" rel="noreferrer">Read More</a>
        </div>
      </div>
    </div>
  )
}
}
