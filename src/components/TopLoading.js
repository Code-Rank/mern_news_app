import LoadingBar from 'react-top-loading-bar';
import { Component } from 'react';

class TopLoading extends Component{

    
    render(){
        return(<>
        <LoadingBar
        color='#f11946'
        progress={10}
        
      />
        </>);
    }
}
export default TopLoading;