import React from 'react'
import Child from './child'
class Father extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            red:'red',
            content:'我是文本内容'
        }
    }

    render() {
        return (
            <Child color={this.state.red} content={this.state.content}>
                <div>
                    <i>zheshiwode wenben</i>
                </div>
            </Child>
        );
    }
}

export default Father