import React, { Component } from 'react';
// import logo from './logo.svg';
// import View from './View'
// import Father from './testChildren/father'
import './App.css';
import FilterInput from './filterData/FilterInput'
import {data} from "./filterData/data";
import List from './filterData/List'
import CounterButton from "./count/button";
// import Main from './main/main'
class App extends Component {
    constructor(props,context){
      super(props);
      this.state= {
          text:'this is Text',
          prom:[1,2,3,4,5,6,7,8,9],
          listData:data,
          keyWord:'',
          afterFilterData:[],
    };
        this.nameHandleChange = this.nameHandleChange.bind(this);
      this.setKeyWord = this.setKeyWord.bind(this);
        console.log(context);
    };
    nameHandleChange(val){
        this.setState({text:val})
    };
    setKeyWord(val){
        let data = null;
        if (val === ''){
            data = [];
        }else{
            data =  this.state.listData.filter(item=>{
                return item.category.indexOf(val) > -1
            });
        }
        this.setState({
            afterFilterData:data
        })

    }
  render() {
    return (
        <div className="App">
            <div className="bordered"/>
            <FilterInput keyWord={this.state.keyWord} getKeyWord={this.setKeyWord}/>
            <List list={this.state.afterFilterData}/>
            {/*<header className="App-header">*/}
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<h1 className="App-title">Welcome to React</h1>*/}
            {/*</header>*/}
            {/*<Main prom={this.state.prom}></Main>*/}
            {/*<View text = {this.state.text}  handleChange={this.nameHandleChange}/>*/}
            {/*<p className="App-intro">*/}
                {/*<button onClick={()=>{alert('bbb')}}>{this.state.text}</button>*/}
                {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
            {/*</p>*/}
            {/*<Father />*/}
            <CounterButton/>
        </div>
    );
  }
}
// App.childContextTypes = {
//     color: React.PropTypes.string
// };

export default App;
