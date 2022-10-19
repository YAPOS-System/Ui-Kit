import React from 'react';
import styles from '../../../styles/components/button.module.css';
import cn from "classnames"
import PropTypes from 'prop-types'
import { useState } from 'react';

export interface IButtonProps {
	prompt: string;
	type: string;
	onClick: Function;
}

const defaultProps = {
	type: 'default'
}

type Defaultize<TSource, TKeys extends keyof TSource> = TSource & { [P in TKeys]-?: TSource[P] };
type DefaultProps = keyof typeof defaultProps;
type ButtonProps = Defaultize<IButtonProps, DefaultProps>;

export const Button: React.FunctionComponent = (props: React.PropsWithChildren<ButtonProps, defaultProps>) => {
	const [isPressed, setIsPressed] = useState(false);

	const handleClick = () => {
		setIsPressed(true);
		console.log(isPressed)
	};

	return (
		<button
			className={`${isPressed ? styles[""] : styles[props.type]} ${isPressed ? styles["pressed"] : styles[""]}`}
			type={props.type}
			onClick={handleClick}
			disabled={isPressed}
		>
			{props.prompt}
		</button>
	)
}

/* для обозначения типа в документации */
Button.propTypes = {
	type: PropTypes.oneOf([["default", "hovered", "pressed"]]),
	prompt: PropTypes.node
}