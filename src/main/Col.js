import React from 'react'
import './col.css'
class Col extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            val : 'X'
        }
    };

    render() {
        return (
            <span className='col' onClick={()=>this.setState({val:'B'})}>{this.state.val}</span>
        );
    }

}
export default Col;