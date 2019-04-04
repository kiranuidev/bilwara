import React,{Component} from 'react';

class Textbox extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div className="form-group row">
            <label 
            className="col-sm-2 col-form-label">
            {this.props.control.label}
            </label>
            <div className="col-sm-5">
              <input 
              type={this.props.control.type} 
              className={this.props.control.className} 
              id={this.props.control.id}
              name={this.props.control.name} 
              placeholder={this.props.control.placeholder}
              onChange={(e)=>{
                  this.props.textChange(e)}
                  }/>
            </div>
          </div>
        )
    }
}
export default Textbox;