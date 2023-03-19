import { Component } from "react";

import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import Newitem from "./NewItem";
class New extends Component {



    constructor(props) {
        super(props);
        this.state = {
            articals: [],
            page: 1,
            pageSize: 5,
            totalResults: 0,
            loading: false,
        }

        document.title = `${this.props.category} - Dekho`;


    }
    async componentDidMount() {
        this.props.setProgress(10);
        this.setState({
            loading: true,
        });
        let news = await fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=94828f05f97c47f384568072eb4bad09&page=${this.state.page}&pageSize=${this.state.pageSize}`);
        this.props.setProgress(30);
        let data = await news.json();
        this.props.setProgress(70);
        console.log(data);
        this.setState({
            articals: data.articles,
            totalResults: data.totalResults,
            loading: false,
        });
        this.props.setProgress(100);
        //console.log(this.state.totalResults);

    }

    nextPage = () => {

        this.getData('next');

    }
    previousPage = () => {
        
        this.getData('previous');
    }
    getData = async (action) => {
        let page;
        if (action === "next") {
            page = this.state.page + 1;

        } else {
            page = this.state.page - 1;
        }


        this.setState({
            loading: true,
        });
        let news = await fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=94828f05f97c47f384568072eb4bad09&page=${page}&pageSize=${this.state.pageSize}`);
        let data = await news.json();
        //console.log(data);
        this.setState({
            articals: data.articles,
            page: page,
            loading: false,
            totalResults: data.totalResults
        });

    }
    fetchMoreData = async () => {

        this.setState({
            page: this.state.page + 1,
        });
        console.log(this.state.page);
        let news = await fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=94828f05f97c47f384568072eb4bad09&page=${this.state.page}&pageSize=${this.state.pageSize}`);
        let data = await news.json();
        console.log(this.state.articals);

        this.setState({
            articals: this.state.articals.concat(data.articles),

        });
    }
    render() {
        return (<>

            {/* {this.state.loading?<Loading/>:""} */}

            

                

                {
                        this.state.articals ? this.state.articals.map((el) => {
                           
                            return (
                                <div className="col-md-4">
                                <Newitem urlToImage={el.urlToImage} title={el.title} description={el.description} author={el.author} publishedAt={el.publishedAt} url={el.url} source={el.source.name}/>
                                </div>
                                );
                                
                        }) : ""
                       
                    }
                    <InfiniteScroll
                    dataLength={this.state.articals.length}
                    next={this.fetchMoreData}
                    
                    hasMore={this.state.articals.length !== this.state.totalResults}
                    loader={<Loading />}
                
                >
                    
                    
                </InfiniteScroll>

            


            {/*  <div className="container d-flex justify-content-center">

                <input type="button" disabled={this.state.page<=1} value="<<" className="btn btn-primary" onClick={this.previousPage} />
                &nbsp;
                <input type="button" value=">>" disabled={this.state.page+1>=Math.ceil(this.state.totalResults/this.state.pageSize)?true:false} className="btn btn-primary" onClick={this.nextPage}/>

            </div> */}
        </>);
    }
}

export default New;