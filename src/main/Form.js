import React from 'react'

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name:{
                val:'',
                name:''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({
            name:{val :e.target.value}
        })
    };
    handleSubmit(e){
        console.log(this.state.name.val);
        e.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>name:</label>
                    <input type="text" value={this.state.name.val} onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        )
    }
}
export default Form