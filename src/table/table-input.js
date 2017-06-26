/**
 * Created by Ray on 2017/6/26.
 */
import PropTypes from 'prop-types';
import React, {Component} from 'react';
class TableInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            edit: false,
            currentValue: this.getValue(props.value)
        };
    }
    render() {
        if(this.state.edit){
            if(this.props.type === 'input'){
                return (<input value={this.state.currentValue} onChange={this.handleInputChange} onKeyUp={this.handleKeyUp}/>)
            }else{
                return (<select value={this.state.currentValue} onChange={this.submitEdit}>
                    {
                        Object.keys(this.props.map).map(key=>(<option value={key}>{this.props.map[key]}</option>))
                    }
                </select>)
            }
        }else {
            return (<span>{this.state.currentValue}<button onClick={this.toggleEdit}>编辑</button></span>)
        }
    }
    getValue(val){
        if(this.props.type === 'select'){
            return this.props.map[val]
        }
        return val
    }
    toggleEdit(){
        this.setState({
            edit:!this.state.edit
        })
    }
    submitEdit(event){
        this.toggleEdit();
        this.setState({
            currentValue:this.getValue(event.target.value)
        });
        this.props.onEdit({
            value:this.state.currentValue,
            key:this.props.name,
            index:this.props.index
        })
    }
    handleInputChange(event){
        this.setState({
            currentValue:this.getValue(event.target.value)
        });
    }
    handleKeyUp(event){
        if(event.keyCode === 13){
            this.submitEdit(event)
        }
    }
}
export default TableInput;