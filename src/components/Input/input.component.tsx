import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from '../../../styles/components/input.module.css';
import { useState } from 'react';

export interface IInputProps {
    variant:string;
    state:string;
    type:string;
    label:string,
    placeholder:string,
    prompt:string;
    onClick:Function;
} 

const defaultProps = {
    variant: "default",
    state: "default",
    label: "label",
    type: "text",
    placeholder: "placeholder"
}

type Defaultize<TSource, TKeys extends keyof TSource> = TSource & { [P in TKeys]-?: TSource[P] };
type DefaultProps = keyof typeof defaultProps;
type InputProps = Defaultize<IInputProps, DefaultProps>;

export const Input: React.FunctionComponent = (props: React.PropsWithChildren<InputProps,DefaultProps>) => {
    return (
        <label>
            <p
                className={styles['input__p']}
            >{props.label}</p>
            <input
                className={`${styles['default']} ${props.state == "hover" ? styles['hover'] : ''} ${props.variant == "error" ? styles['error'] : ''} ${props.variant == "success" ? styles['success'] : ''}`}
                type={props.type}
                placeholder={props.placeholder}
                value={props.prompt}
                disabled={`${props.state == "disabled" ? "disabled" : ""}`}
            >
            </input>
        </label>
    )
}

/* для обозначения типа в документации */
Input.propTypes = {
    variant: PropTypes.oneOf([["default","error","success"]]),
    state: PropTypes.oneOf([["default","hover","disabled"]]),
    type: PropTypes.oneOf([["text","password","email"]]),
    placeholder: PropTypes.node,
    prompt: PropTypes.node
}