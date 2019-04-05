import React,{Component} from 'react';
import Textbox from './Textbox';
import SelectBox from './Selectbox';
//import axios
import axios from 'axios';
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
        register :
            {
                FirstName:{...textControl,
                    id:'txtFirstName',
                    name:'FirstName',
                    label:'Fist Name',
                    placeholder:'Enter First Name'},
                LastName:{...textControl,
                        label:'Last Name',
                        id:'txtLastName',
                        name:'LastName',
                        placeholder:'Enter Last Name'},
                Age:{...textControl,
                            label:'Age',
                            id:'txtAge',
                            name:'Age',
                            placeholder:'Enter Age'},
    
                Country:{
                    ...select,
                    label:'Country',
                            id:'ddlCountry',
                            name:'Country',
                            placeholder:'Select Country',
                            options:[{text:'India',value:'IN'},
                            {text:'United States',value:'USA'}]
                }
            }
    };
    this.textChange = this.textChange.bind(this);
}
textChange(e){
    let currentState= this.state;
    currentState.register[e.target.name].value=e.target.value;
    this.setState(currentState);
    console.log(this.state.register);
}
componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(result=>{
        console.log(result);
        let countries = result.data.map(x=>{
            return {value:x.alpha2Code,text:x.name}
        });
        let currentState = this.state;
        currentState.register.Country.options= countries;
        console.log(this.refs);
        this.refs['btnRegister'].className='btn btn-primary';
        this.setState(currentState);
    })
    .catch(err=>{
        console.log(err);
    })
}

    render(){
        return (<div className="form">
            <Textbox control={this.state.register.FirstName} textChange={this.textChange}/>
            <Textbox control={this.state.register.LastName} textChange={this.textChange}/>
            <Textbox control={this.state.register.Age} textChange={this.textChange}/>
            <SelectBox control={this.state.register.Country} textChange={this.textChange}/>
            <button id="btnOne"  ref="btnRegister">Register</button>
          </div>
        )
    }
}
export default Register;