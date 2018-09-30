import React,{Component} from 'react'

class List extends Component{
    constructor(props,context) {
        super(props);
        this.myRef = React.createRef();
        console.log(context);
    }
    shouldComponentUpdate(nextProps,nextState){
        if (this.props.list !== nextProps.list) {
            return true
        }
        return false
    }
    render() {
        let data = this.props.list;
        let liArr = data && data.length > 0 ?this.props.list.map((item,index)=><li key={index}><span>{item.name}</span><span>{item.price}</span></li>):<li>数据为空</li>;
        return (
            <ul ref={this.myRef}>
                {liArr}
            </ul>
        );
    }
}
export default List