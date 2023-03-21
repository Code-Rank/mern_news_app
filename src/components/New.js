import React ,{useEffect,useState}from "react";

import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import Newitem from "./NewItem";
const New =(props)=> {
 const [articals,setArticals] =useState([]);
 const [page,setPage] =useState(1);
 const [pageSize,setPageSize] =useState(5);
 const [totalResults,setTotalResults] =useState(0);
 const [loading,setLoading] =useState(false);
 const api_key="43779789c32b4d07b2a153ab308e3cfd";
console.log("this "+api_key);
document.title = `${props.category} - Dekho`;



    const updateNews=async ()=> {
        props.setProgress(10);
        setLoading(true);
        let news = await fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${api_key}&page=${page}&pageSize=${pageSize}`);
        props.setProgress(30);
        let data = await news.json();
        props.setProgress(70);
        console.log(data);
        setArticals(data.articles);
        setTotalResults(data.totalResults);
        setLoading(false);
       
        props.setProgress(100);
        //console.log(totalResults);

    }
  useEffect(()=>{
    updateNews();
  },[]);
    const nextPage = () => {

        getData('next');

    }
    const previousPage = () => {
        
        getData('previous');
    }
    const getData = async (action) => {
        let page;
        if (action === "next") {
            page = page + 1;

        } else {
            page = page - 1;
        }


        setLoading(true);
        let news = await fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${api_key}&page=${page}&pageSize=${pageSize}`);
        let data = await news.json();
        //console.log(data);
        setArticals(data.articles);
        setTotalResults(data.totalResults);
        setLoading(false);
        setPage(page);
       

    }
    const fetchMoreData = async () => {

        setPage(page+1);
        console.log(page);
        let news = await fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${api_key}&page=${page}&pageSize=${pageSize}`);
        let data = await news.json();
        console.log(articals);
        setArticals(articals.concat(data.articles));
       
    }
    const loader=articals.length !== totalResults?<Loading />:"";
        return (<>

            {/* {loading?<Loading/>:""} */}

            

                

                {
                        articals ? articals.map((el) => {
                           
                            return (
                                <div className="col-md-4">
                                <Newitem urlToImage={el.urlToImage} title={el.title} description={el.description} author={el.author} publishedAt={el.publishedAt} url={el.url} source={el.source.name}/>
                                </div>
                                );
                                
                        }) : ""
                       
                    }
                    
                    <InfiniteScroll
                    dataLength={articals.length}
                    next={fetchMoreData}
                    
                    hasMore={articals.length !== totalResults}
                    loader= {loader}
                
                >
                    
                    
                </InfiniteScroll>

            


            {/*  <div className="container d-flex justify-content-center">

                <input type="button" disabled={page<=1} value="<<" className="btn btn-primary" onClick={previousPage} />
                &nbsp;
                <input type="button" value=">>" disabled={page+1>=Math.ceil(totalResults/pageSize)?true:false} className="btn btn-primary" onClick={nextPage}/>

            </div> */}
        </>);
    
}

export default New;