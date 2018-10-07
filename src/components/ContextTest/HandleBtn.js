import React, {Component} from 'react'

import PropTypes from 'prop-types';

// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'

// 引入action
import {setPage, setNum, deleteList, addList, updateList} from "../../store/actions";

class HandleBtn extends Component {
    constructor(props,context) {
        super(props,context);
        console.log(this.context);
        this.handleClick = this.handleClick.bind(this);
        this.update = this.update.bind(this);
    };

    handleClick(){
        let {page, num,list, setPage, setNum, deleteState,addList} = this.props;
        let val = page==='新标题'?'首页':'新标题';
        setPage(val);
        let count = ++num;
        setNum(count);
        // let li = list.splice(list.length-1,1);
        // deleteState(list);
        addList(list)
    }

    update(){
        let {list,updateList} = this.props;
        let obj = {
            list:list,
            n:3,
            num:12
        };

        updateList(obj)
    }

    componentDidMount(){
        console.log(this.props);
        // console.log(this.props);
        // 触发setPageTitle action
        // 触发setNum action
    }

    render() {
        // 从props中解构store
        let { page, num, list} = this.props;
        let List = list.map((item,index)=><li key={index}>{item}</li>)
        return (
            <div>
                <h1>{page}</h1>
                <h2>{num}</h2>
                <ul>
                    {List}
                </ul>
                <button onClick={this.handleClick}>{this.context.text}</button>
                <button onClick={this.update}>更新数据</button>
            </div>
        )
    }
}

HandleBtn.contextTypes = {
    text:PropTypes.string
};

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        page: state.setPage,
        num: state.setNum,
        list:state.showList,
    }
};

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setPage (data) {
            // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
            dispatch(setPage(data))
            // 执行setPageTitle会返回一个函数
            // 这正是redux-thunk的所用之处:异步action
            // 上行代码相当于
            /*dispatch((dispatch, getState) => {
            dispatch({ type: 'SET_PAGE_TITLE', data: data })
        )*/
            },
        setNum (data) {
            dispatch(setNum(data))
        },
        deleteState(data){
            dispatch(deleteList(data))
        },
        addList(data){
            dispatch(addList(data))
        },
        updateList(data){
            dispatch(updateList(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HandleBtn)
// export default HandleBtn