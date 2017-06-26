import React, {Component} from 'react';
import './App.css';
import Grid from './table/grid'
import TableInput from './table/table-input'
import api from './api'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            columns: []
        };
    }

    componentWillMount() {
        api().then(res => {
            res.columns = res.columns.map(col => {
                col.render = ({value, index}) => {
                    const props = {
                        value: value,
                        name: col.key,
                        index,
                        type: col.type,
                        map: col.map,
                    }
                    return (<TableInput {...props} onEdit={this.handleEdit}/>)
                };
                if (col.type === 'input') {
                    col.renderHead = () => (<span>{`${col.title} (编辑框)`}</span>)
                } else if (col.type === 'select') {
                    col.renderHead = () => (<span>{`${col.title} (下拉框)`}</span>)
                }
                return col
            });
            this.setState(res)
        })
    }

    render() {
        return (
            <div id="app">
                <Grid data={this.state.data} columns={this.state.columns}/>
            </div>
        );
    }

    handleEdit({index,key,value}){
        this.setState({
            data:{
                [index]:{
                    [key]:value
                }
            }
        })
    }
}

export default App;
