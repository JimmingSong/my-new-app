import React, {Component} from 'react'

import PropTypes from 'prop-types'

import {withStyles} from '@material-ui/core'

import HandleBtn from './HandleBtn'

import {Button,AppBar,Toolbar,IconButton,Typography,Input,Badge,Menu,MenuItem} from '@material-ui/core'

// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
// 第二个工具是connect，稍后会作介绍
import { Provider } from 'react-redux'

// 引入创建好的store实例
import store from '../../store/index'

const styles = theme =>{
    return ({
        button: {
            margin: theme.spacing.unit,
        },
        input: {
            display: 'none',
        },
    })
};

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl:null,
            mobileMoreAnchorEl:null
        }
    };
    handleProfileMenuOpen= e => {
        this.setState({anchorEl:e.currentTarget})
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };
    /**
     * 给context中添加数据
     */
    getChildContext(){
        return {text: "purple"};
    };

    render() {
        const {classes} = this.props;
        console.log(classes);
        return (
                <div>
                    <AppBar position="static" color={"default"}><span>dfdf</span></AppBar>
                    <Button color="primary" variant='contained'>按钮</Button>
                    <Button color="secondary" variant='contained' className={classes.button}>按钮</Button>
                    <Button color="secondary" variant='contained' disabled>按钮</Button>
                    <input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        style={{display:'none'}}
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" component="b">
                            Upload
                        </Button>
                    </label>
                    {/* 将store作为prop传入，即可使应用中的所有组件使用store */}
                    <Provider store={store}>
                        <HandleBtn/>
                    </Provider>
                </div>
        )
    }
}

// Box.childContextTypes = {
//     text:PropTypes.string
// };
/**
 * 规定传进来的数据格式
 * @type {{text: shim}}
 */
Box.childContextTypes = {
    text: PropTypes.string,
};

Box.propTypes = {
    classes:PropTypes.object
};
// Box.getChildContext = ()=>{
//     return {text: "purple"};
// };

export default withStyles(styles)(Box)
// export default Box