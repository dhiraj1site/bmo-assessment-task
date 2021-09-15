import React from 'react';
import './Button.css';

export default function Button(props) {
    return (
        <span>
            <label htmlFor={props.id} value={props.text} />
            <button className={props.type} id={props.id} onClick={props.onClick}>
                {props.text}
            </button>
        </span>
    )
}