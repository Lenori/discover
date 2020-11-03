import React, {Component} from 'react';

import {Content, IconTD, IconOverTD} from './styles';

import {FaCircle, FaExclamationTriangle, FaPencilAlt} from 'react-icons/fa';

class Table extends Component {
    constructor() {
        super();

        this.state = {
            editIndex: null,
            editValues: []
        }

        this.populateEditValues = this.populateEditValues.bind(this);
        this.changeEditValues = this.changeEditValues.bind(this);
        this.saveEditValues = this.saveEditValues.bind(this);
    }

    populateEditValues(index) {
        this.setState({
            editValues: this.props.data[index].values,
            editIndex: index
        })
    }

    changeEditValues(index, value) {
        let data = this.state.editValues;

        data[index] = value;

        this.setState({editValues: data});
    };

    saveEditValues(index) {
        this.props.edit(index, this.state.editValues);

        this.setState({editIndex: null});
    }

    render() {
        return(
            <Content>
                <table>
                    {this.props.data.map((info, index) => (
                        <>
                            {info.icons &&
                                <tr>
                                    <th>
                                        {info.title}
                                    </th>
                                    {info.values.map(value => (
                                        <>
                                            {value == 1 &&
                                                <IconTD><FaCircle /></IconTD>
                                            }

                                            {value == 2 &&
                                                <IconTD alert><FaCircle /></IconTD>
                                            }

                                            {value == 3 &&
                                                <IconTD><FaExclamationTriangle /></IconTD>
                                            }
                                        </>
                                    ))}
                                </tr>
                            }

                            {info.iconsOver &&
                                <tr>
                                    <th>
                                        {info.title}
                                    </th>
                                    {info.values.map(data => (
                                        <>
                                            {data.status == 1 &&
                                                <IconOverTD>
                                                    <span>{data.value}</span>
                                                    <FaCircle />
                                                </IconOverTD>
                                            }

                                            {data.status == 2 &&
                                                <IconOverTD alert>
                                                    <span>{data.value}</span>
                                                    <FaCircle />
                                                </IconOverTD>
                                            }

                                            {data.status == 3 &&
                                                <IconOverTD>
                                                    <span>{data.value}</span>
                                                    <FaExclamationTriangle />
                                                </IconOverTD>
                                            }

                                            {data.status == 4 &&
                                                <IconOverTD caution>
                                                    <span>{data.value}</span>
                                                    <FaCircle />
                                                </IconOverTD>
                                            }
                                        </>
                                    ))}
                                </tr>
                            }

                            {!info.icons && !info.iconsOver &&
                                <tr>
                                    <th>    
                                        {this.state.editIndex != index &&
                                            <>                                                
                                                {info.title}
                                                <FaPencilAlt onClick={() => this.populateEditValues(index)} />
                                            </>
                                        }
                                        
                                        {this.state.editIndex == index &&
                                            <button onClick={() => this.saveEditValues(index)}>Save</button>
                                        }
                                    </th>
                                    {info.values.map((value, vIndex) => (                                        
                                        <>
                                        {this.state.editIndex != index &&                                            
                                            <td>{value}</td>
                                        }

                                        {this.state.editIndex == index &&
                                            <td>
                                                <input
                                                    type='text'
                                                    value={this.state.editValues[vIndex]}
                                                    onChange={(e) => this.changeEditValues(vIndex, e.target.value)}
                                                />
                                            </td>
                                        }
                                        </>                                        
                                    ))}
                                </tr>
                            }
                        </>
                    ))}
                </table>                
            </Content>
        )
    }
}

export default Table;