import React from 'react';
import styles from '../../../styles/components/button.module.css';
import cn from "classnames"
import PropTypes from 'prop-types'
import { useState } from 'react';

export interface IButtonProps {
	variant: string;
	type: string;
	prompt: string;
	onClick: Function;
}

const defaultProps = {
	variant: "square",
	type: "default",
}



type Defaultize<TSource, TKeys extends keyof TSource> = TSource & { [P in TKeys]-?: TSource[P] };
type DefaultProps = keyof typeof defaultProps;
type ButtonProps = Defaultize<IButtonProps, DefaultProps>;

export const Button: React.FunctionComponent = (props: React.PropsWithChildren<ButtonProps, defaultProps>) => {
	const [pressed, setPressed] = useState(false);

	const handleClick = () => {
		console.log("hello")
		if (props.type == 'default') {
			console.log('1+1')
			setPressed(true)
		}
	}


	return (
		<button
			className={`${pressed & props.variant == 'square' ? "pressedForSquare" : ""} ${pressed & props.variant == 'pressedForRounded' ? "pressed" : ""} ${props.variant == 'square' ? styles['square'] : styles['']} ${props.variant == 'rounded' ? styles['rounded'] : styles['']} ${props.type == 'default' & props.variant == 'square' ? styles['defaultForSquare'] : styles['']} ${props.type == 'default' & props.variant == 'rounded' ? styles['defaultForRounded'] : styles['']} ${props.type == 'hovered' & props.variant == 'square' ? styles['hoveredForSquare'] : styles['']} ${props.type == 'hovered' & props.variant == 'rounded' ? styles['hoveredForRounded'] : styles['']} ${props.type == 'pressed' & props.variant == 'square' ? styles['pressedForSquare'] : styles['']} ${props.type == 'pressed' & props.variant == 'rounded' ? styles['pressedForRounded'] : styles['']}`}
			type={props.type}
			onClick={
				handleClick
			}
			disabled={pressed || props.type == 'pressed' ? true : false}
		>
			{props.prompt}
		</button>
	)
}

/* для обозначения типа в документации */
Button.propTypes = {
	variant: PropTypes.oneOf([["square", "rounded"]]),
	type: PropTypes.oneOf([["default", "hovered", "pressed"]]),
	prompt: PropTypes.node
}