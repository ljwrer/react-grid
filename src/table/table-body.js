/**
 * Created by Ray on 2017/6/26.
 */
import PropTypes from 'prop-types';
import React, {Component} from 'react';
class TableBody extends Component {
    render() {
        return (<tbody>
        {
            this.props.rows.map((row,rowIndex)=>(<tr key={rowIndex}>
                {
                    this.props.columns.map((column,index)=>{
                        let td;
                        const value = row[column.key];
                        if(column.render){
                            td = (<td key={index}>{column.render({index:rowIndex, value})}</td>)
                        }else {
                            td = (<td key={index}><span>{value}</span></td>)
                        }
                        return td
                    })
                }
            </tr>))
        }
        </tbody>)
    }
}
TableBody.propTypes = {
    columns: PropTypes.array,
    rows: PropTypes.array
};
export default TableBody;