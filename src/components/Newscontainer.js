import React, { Component } from 'react'
import Loader from './Loader'
import NewsItem from './NewsItem'

export default class NewsContainer extends Component {
  articles = []
  constructor() {
    super()
    this.state = {
      articles: this.articles,
      page: 1,
      loading: false
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url)
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalresult: parsedData.totalResults,
      loading: false

    })
  }
  nextPage = async () => {
    console.log("next")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url)
    let parsedData = await data.json();
    console.log(parsedData.articles);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    })
    // const noPage = Math.ceil(this.state.totalresult/6)
    // // console.log(noPage);
    // let btn = document.getElementById('nextBtn');
    // if( noPage===this.state.page){
    //  console.log("correct")
    //  btn.setAttribute("disabled","true")
    // }
    // else{
    //   btn.removeAttribute("disabled")
    // }
  }
  prePage = async () => {
    console.log("previous")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url)
    let parsedData = await data.json();
    console.log(parsedData.articles);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })

  }

  render() {

    return (
      <div className='container   my-4'>
        <h1 className='text-center'>{this.props.category}-Top Headlines </h1>
        <hr />
        {this.state.loading && <Loader />}
        <div className="items d-flex justify-content-center flex-wrap" >
          { !this.state.loading && this.state.articles.map((article) => {
            return <NewsItem key={article.url} title={article.title ? article.title.slice(0, 50) : ""} desc={article.description ? article.description.slice(0, 100) : ""} img={article.urlToImage ? article.urlToImage : "https://bitsofco.de/content/images/2018/12/broken-1.png"} url={article.url} />
          })}
        </div>
        <div className=" d-flex justify-content-between">
          <button disabled={this.state.page <= 1} className='preBtn btn btn-sm btn-primary' id='preBtn' onClick={this.prePage}> previous</button>
          
          <button disabled={this.state.page === Math.ceil(this.state.totalresult / 6)} className='nextBtn  btn btn-sm btn-primary' id='nextBtn' onClick={this.nextPage}>Next</button>
        </div>
      </div>
    )
  }
}
