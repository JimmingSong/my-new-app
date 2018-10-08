// action也是函数
export function setPage(data) {
    return (dispatch,getState)=>{
        dispatch({ type: 'SET_PAGE', data: data })
    }
}

export function setNum(data) {
    return (dispath,getState)=>{
        //这里面可以放异步请求
        dispath({type:'SET_NUM',data:data})
    }
}

export function showList(data) {
    return (dispatch,getState)=>{
        dispatch({type:'show_list',data:data})
    }
}

export function deleteList(data) {
    return (dispatch,getState)=>{
        let newData = data.slice();
        newData.splice(newData.length-1,1);
        dispatch({type:'delete_list',data:newData})
    }
}

export function addList(data) {
    return (dispatch,getState)=>{
        let arr = data.slice();
        let lastNum = arr[arr.length-1];
        arr.push(parseInt(lastNum)+1);
        dispatch({type:'add_list',data:arr})
    }
}

export function updateList(obj) {
    return (dispatch,getState)=>{
        let arr = obj.list.slice();
        let num = ++obj.list[obj.n];
        arr.splice(obj.n,1,num);
        dispatch({type:'update_list',data:arr})
    }
}

export function deleteData(obj) {
    return (dispatch,getState)=>{
        let arr = obj.list.slice();
        arr.splice(arr.length-1,1);
        dispatch({type:'delete_list',data:arr})
    }
}