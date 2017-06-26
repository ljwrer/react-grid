/**
 * Created by Ray on 2017/6/26.
 */
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import TableBody from './table-body'
import TableHead from './table-head'
class Grid extends Component {
    render() {
        return (<div className="m-grid">
            <table>
                <TableHead columns={this.props.columns}/>
                <TableBody rows={this.props.data} columns={this.props.columns}/>
            </table>
        </div>)
    }
}
Grid.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array
};
export default Grid;