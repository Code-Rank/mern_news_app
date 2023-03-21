import React from "react";

const Newitem=(props)=> {
    
    
        return (<>

            <div key={Math.random()} className="card  my-2" >
            <span class="badge bg-primary" style={{width:'auto',position:"absolute",right:0}}>{props.source}</span>
                <img src={props.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small class="text-muted">{props.author} &nbsp;{props.publishedAt} </small></p>
                    <a href={props.url} className="btn btn-primary">Go to news</a>
                </div>
            </div>

        </>);
    

}

export default Newitem;