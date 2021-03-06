import React from 'react'

import Text from './TextShow'

import { Provider } from 'react-redux'

import store from '../../store/index'

class CounterButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 1};
    }
    addCount = ()=>{
        let num = this.state.count;
        this.setState({count:++num})
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.color !== nextProps.color) {
            return true;
        }
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div>
                <Provider store={store}>
                    <Text />
                </Provider>
                <button
                    className="btn"
                    color={this.props.color}
                    onClick={this.addCount}>
                    Count: {this.state.count}
                </button>
            </div>
        );
    }
}
export default CounterButton