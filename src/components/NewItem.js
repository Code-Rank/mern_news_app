import { Component } from "react";

class Newitem extends Component {
    
    render() {
        console.log(this.props.url);
        return (<>

            <div key={Math.random()} className="card  my-2" >
            <span class="badge bg-primary" style={{width:'auto',position:"absolute",right:0}}>{this.props.source}</span>
                <img src={this.props.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <p className="card-text"><small class="text-muted">{this.props.author} &nbsp;{this.props.publishedAt} </small></p>
                    <a href={this.props.url} className="btn btn-primary">Go to news</a>
                </div>
            </div>

        </>);
    }

}

export default Newitem;