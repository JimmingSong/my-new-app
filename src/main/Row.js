import React from 'react'
import Col from './Col'
import './row.css'

class Row extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list : [],
            value:'X'
        };
        for (let i = 0; i < 3; i++) {
            this.state.list.push(i);
        }
    };
    render(){
        let that = this;
        let ColDom = this.state.list.map((item,index)=>(<Col key={index} click={that.add} text={this.state.value}></Col>));
        let RowDom = this.state.list.map((item,index)=>{
            return (<div key={index}>
                {ColDom}
            </div>)
        })
        return(<div>
            {RowDom}
        </div>)
    };
    add(){
        console.log('bb');
        this.setState({
            value:'B'
        })
    }
}
export default Row