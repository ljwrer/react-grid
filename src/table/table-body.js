/**
 * Created by Ray on 2017/6/26.
 */
import PropTypes from 'prop-types';
import React, {Component} from 'react';
class TableBody extends Component {
    render() {
        return (<tbody>
        {
            this.props.rows.map((row,rowIndex)=>{
                return this.props.columns.map((column)=>{
                    let td;
                    const value = row[column.key];
                    if(column.render){
                        td = column.render({
                            index:rowIndex,
                            value
                        })
                    }else {
                        td = (<span>{value}</span>)
                    }
                    return td
                })
            })
        }
        </tbody>)
    }
}
TableBody.propTypes = {
    columns: PropTypes.array,
    rows: PropTypes.array
};
export default TableBody;