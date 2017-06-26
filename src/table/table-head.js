/**
 * Created by Ray on 2017/6/26.
 */
import React, {Component} from 'react';
class TableHead extends Component {
    render() {
        return (<thead><tr>
            {this.props.columns.map(column=>{
                let th;
                if(column.renderHead){
                    th = column.renderHead()
                }else {
                    th = (<span>{column.title}</span>)
                }
                return th
            })}
        </tr></thead>);
    }
}

export default TableHead;