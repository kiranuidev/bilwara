import React, {Component} from 'react';
import MovieList from './movieList';
class Toggler extends Component{
    constructor(props){
        super(props)
        this.state={
            buttonText:"Hide",
            show:true
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        let currentState = this.state;
        currentState.buttonText=currentState.show?'Hide':'Show';
        currentState.show= !currentState.show;
        this.setState(currentState);
    }
    componentDidMount(){
        console.log('I am mounted');
    }
    componentWillUpdate(){
        console.log('Component Updated');
        return true;
    }
    render(){
        let content ='';
        if(this.state.show){
            content =<MovieList search={''}/>
        }
        return( 
                <div>   
                     <button onClick={this.toggle}>{this.state.buttonText}</button>
                     {content}
               </div>
         )        
    }
}

export default Toggler;






