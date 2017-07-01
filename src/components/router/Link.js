import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {ActionLink} from './ActionLink'

export class Link extends ActionLink{

    handleClick = (evt) => {
        evt.preventDefault()
        window.history.pushState(null,'',this.props.to)

    }
}

Link.propTypes = {
    to:PropTypes.string.isRequired
}