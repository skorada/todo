import React from 'react'
import PropTypes from 'prop-types'
import {ActionLink} from '../router'

export const TodoItem = (props) => {
    const handleToggle = props.handleToggle.bind(null, props.id)
    const handleRemove = props.handleRemove.bind(null, props.id)
    return (
                <li>
                  <span className="delete-item"><ActionLink handleClick={handleRemove}>x</ActionLink></span> 
                  <input type="checkbox" onChange={handleToggle} checked={props.isComplete}/> 
                  {props.name}
                </li>
    )
}

TodoItem.propTypes = {

    name: PropTypes.string.isRequired,
    isComplete: PropTypes.bool,
    id: PropTypes.number.isRequired,
    handleToggle:PropTypes.func

}