import React,{Component} from 'react'

import Button from './count/button'

import Box from './ContextTest/Box'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return (
            <div>
                <Button/>
                <Box />
            </div>
        )
    }
}

export default Main