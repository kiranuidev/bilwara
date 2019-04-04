import  React,{Component} from 'react';

class SelectBox extends Component{
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
              <select 
              type={this.props.control.type} 
              className={this.props.control.className} 
              id={this.props.control.id}
              name={this.props.control.name} 
              placeholder={this.props.control.placeholder}
              onChange={(e)=>{
                  this.props.textChange(e)}
                  }>
                  {this.props.control.options.map((x,i)=>{
                      return <option key={i} value={x.value}>{x.text}</option>
                  })}
                  </select>
            </div>
          </div>
        )
    }
}
export default SelectBox;