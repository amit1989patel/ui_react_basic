import React from 'react';
import {Link} from 'react-router';
import '../images/danablue.gif'
//import LoadingBar from 'react-redux-loading-bar';
//Parent container for all components and their nested components

class App extends React.Component{

    render(){
        return(
            <div>
                    {this.props.children}
            </div>
        );
    }
} 

export default App;