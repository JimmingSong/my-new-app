import React from 'react'

class View extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {};
        this.nameChangeEvent = this.nameChangeEvent.bind(this)
    }
    nameChangeEvent(e){
        this.props.handleChange(e.target.value)
    }
    render(){
        return(<div>
            <input type="text" value={this.props.text} onChange={this.nameChangeEvent}/>
            <p>{this.props.text}</p>
        </div>)
    }
}

export default View