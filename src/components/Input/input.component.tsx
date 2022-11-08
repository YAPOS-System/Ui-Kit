import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/components/input.module.css';
import { useState } from 'react';

export interface InputPropsInterface {
    variant:string;
    state:string;
    type:string;
    label:string,
    placeholder:string,
    value:string;
    error:string;
    maxLength:number;
}

export const Input: React.FunctionComponent<InputPropsInterface> = (props) => {
    const [classes,setClasses] = useState( `${styles['default']}` );

    const blurNandler = () => {
        setClasses(`${props.variant == "error" || props.error ? styles['error'] : ''} ${props.variant == "success" || !props.error ? styles['success'] : ''}`);
    }

    return (
        <label
            className={styles['label']}
        >
            <p
                className={styles['label__p']}
            >
                {props.label}
            </p>
            <input
                className={`${styles['default']} ${props.state == "hover" ? styles['hover'] : ''} ${props.variant == "error" ? styles['error'] : ''} ${props.variant == "success" ? styles['success'] : ''} ${classes}`}
                type={props.type}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                value={props.value}
                /*onChange = {e => changeHandler(e)}*/
                onBlur = {() => blurNandler()}
                disabled={props.state == "disabled"}
            >
            </input>
            <p
                className={styles['error__p']}
            >
                {props.error}
            </p>
        </label>
    )
}

/* для обозначения типа в документации */

Input.propTypes = {
    variant: PropTypes.oneOf([["default", "error", "success"]]),
    state: PropTypes.oneOf([["default", "hover", "disabled"]]),
    type: PropTypes.oneOf([["text", "password", "email"]]),
    label: PropTypes.node,
    placeholder: PropTypes.node,
    value: PropTypes.node,
    error: PropTypes.node,
    maxLength: PropTypes.number,
};