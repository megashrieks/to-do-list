import React from 'react';
import './ListItem.css';
export default (props) => {
    let clickAction = () => {
        alert(props.name);
    }
    return (
        <li className="todo" onClick={clickAction}>
            {props.name}
        </li>
    );
}