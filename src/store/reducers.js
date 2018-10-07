// 工具函数，用于组织多个reducer，并返回reducer集合
import {combineReducers} from 'redux'

// 默认值
import defaultState from './state'

// 一个reducer就是一个函数
function setPage (state = defaultState.page, action) {
// 不同的action有不同的处理逻辑
    switch (action.type) {
        case 'SET_PAGE':
            return action.data;
        default:
            return state
    }
}

function setNum(state = defaultState.num, action) {
    switch (action.type) {
        case 'SET_NUM':
            return action.data;
        default:
            return state
    }
}

function showList(state=defaultState.list,action) {
    switch (action.type) {
        case 'show_list':
            return action.data;
        case 'delete_list':
            return action.data;
        case 'add_list':
            return action.data;
        case 'update_list':
            return action.data;
        default:
            return state;
    }
}

export default combineReducers({
    setPage,
    setNum,
    showList,
})