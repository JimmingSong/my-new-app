import React from 'react'
import Row from "./Row";
import Form from './Form'
import './main.css'
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'bbb',
            date:new Date()
        }
    };

    /**
     * 组件即将渲染
     */
    componentWillMount(){
        console.log(this.state.date);
    }

    /**
     * componentWillReceiveProps  父组件更新后的传入的props
     * @param nextProps
     */
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }

    /**
     * 组价渲染完毕
     */
    componentDidMount(){
        this.time = setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
    };

    /**
     * 组价销毁时
     */
    componentWillUnmount(){
        clearInterval(this.time)
    };

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(nextProps);
    //     console.log(nextState);
    //     return null
    // }
    /**
     * input 的change事件
     * @param e
     */
    nameChange(e){
        let val = e.target.value;
        this.setState({name:val})
    };
    deleteRow(id){
        this.setState({})
    }
    render(){
        let IdDom = this.props.prom.map((item,index)=>{
            if(index === 3){
                return(<p className='red' key={index}>{item}</p>)
            }else {
                return(<p key={index}>{item}</p>)
            }
        });
        return(<div>
            {IdDom}
            <div>
                <label htmlFor="">姓名</label>
                <input type="text" value={this.state.name} onChange={this.nameChange.bind(this)}/>
                <p>{this.state.name}</p>
            </div>
            <p>{this.state.date.toLocaleTimeString()}</p>
            <Row />
            <Form />
        </div>)
    };
}

export default Main