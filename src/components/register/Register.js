import React,{Component} from 'react';
import Textbox from './Textbox';
import SelectBox from './Selectbox';

class Register extends Component{
    constructor(props){
        super(props);
        let textControl ={
            type:'text',
            className:'form-control',
            value:""
        };
        let  select ={
            className:'form-control',
            value:""
        };
       
    this.state={
        success:'User Registered Successfully',
        failure:'User Registration Failed',
        register:{
            FirstName:{...textControl,  
                id:'txtFirstName',
            name:'FirstName',
            label:'Fist Name',
            placeholder:'Enter First Name'},
            LastName:{...textControl},
            Age:{...textControl},
            Country:{},
        }
    };
    this.textChange = this.textChange.bind(this);
}
componentDidMount(){
    
}
textChange(e){
    let currentState= this.state;
    currentState.register[e.target.name].value=e.target.value;
    this.setState(currentState);
    console.log(this.state.register);
}
    render(){
        return (<div className="form">
            <Textbox control={this.state.register.FirstName} textChange={this.textChange}/>
            {/* <Textbox control={this.state.register.LastName} textChange={this.textChange}/>
            <Textbox control={this.state.register.Age} textChange={this.textChange}/>
            <SelectBox control={this.state.register.Country} textChange={this.textChange}/> */}
          </div>
        )
    }
}
export default Register;