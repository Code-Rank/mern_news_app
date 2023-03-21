

import loading from "../loading.gif";

const Loading=()=>  {
 
    return (<>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <img src={loading} style={{ width: "100px", height: "100px" }} alt="" />
        </div>
      </div>


    </>);
 
}

export default Loading;