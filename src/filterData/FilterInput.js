import React from 'react'

class FilterInput extends React.Component{
    constructor(props) {
        super(props);
        this.setValue = this.setValue.bind(this)
    };
    setValue(e){
        let tar = e.target;
        this.props.getKeyWord(e.target.value)
    }
    render() {
        let InputValue = this.props.keyWord;
        return (
            <div>
                <input type="text" defaultValue="e" ref={input=>{console.log(input)}} onChange={this.setValue}/>
            </div>
        );
    }
}

export default FilterInput