import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class ActionLink extends Component{

    handleClick = (evt) => {
        evt.preventDefault()
        this.props.handleClick()
    }
    render(){
        return (
        <a href="#" onClick={this.handleClick}>{this.props.children}</a>
        )
    }
}

ActionLink.propTypes = {
    handleClick: PropTypes.func
}