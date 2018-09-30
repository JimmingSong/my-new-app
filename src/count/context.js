import React from "react";

const ThemContext = React.createContext('light');
export default ThemContext

const PropTypes = require('prop-types');

class Button extends React.Component {
        render() {
        return (
            <button style={{background: d: this.context.color}}>
                }}>
                {  {this.props.children}
                }
            </button>
        );
    }

}

Button.contextTypespes = {
    color: PropTypes.string
};

class Message extends React.Component {
    render() {
        return (
            <div>
                {this.props.text} <Button>Delete</Button>
            </div>
        );
    }
}

class MessageList extends React.Component {
    getChildContext() {
        return {color: "purple"};
    }

    render() {
        const children = this.props.messages.map((message =>
            <Message text={t = message.text}/>));
        return <div>{children}</div>;
    }
}



MessageList.childContextTextTypes = {
    color: PropTypes.string
};
