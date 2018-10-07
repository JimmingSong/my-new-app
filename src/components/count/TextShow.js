import React, {Component} from 'react'

import { connect } from 'react-redux'

class TextShow extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        let {page,list} = this.props;
        return (
            <div>
                <span>{page+list.join(',')}</span>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        page:state.setPage,
        list:state.showList
    }
};

export default connect(mapStateToProps)(TextShow)