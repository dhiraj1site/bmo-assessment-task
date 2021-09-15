import React from 'react';
import Button from './v1/Button';

export default function Aside(props) {
    return (
        <aside >
            <span> 
                <Button id="dangerClearButton" type="danger" text="Clear" />
            </span>
        </aside>
    )
}