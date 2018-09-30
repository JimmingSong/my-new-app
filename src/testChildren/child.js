import React from 'react'

class Child extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.color}>
                <b>{this.props.content}</b>
                {this.props.children}
            </div>
        );
    }
}

export default Child