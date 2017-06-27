/**
 * Created by Ray on 2017/6/26.
 */
import React, {Component} from 'react';
class TableHead extends Component {
    render() {
        return (<thead><tr>
            {this.props.columns.map((column,index)=>{
                let th;
                if(column.renderHead){
                    th = (<th key={index}>{column.renderHead()}</th>)
                }else {
                    th = (<th key={index}>{column.title}</th>)
                }
                return th
            })}
        </tr></thead>);
    }
}

export default TableHead;