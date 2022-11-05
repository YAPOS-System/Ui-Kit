import React from 'react';
import styles from '../../../styles/components/button.module.css';
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
		setPressed(true);
		console.log(pressed)
	};


	return (
		<button
			className={`${props.variant == "square" ? styles["square"] : styles[""]} ${props.variant == "rounded" ? styles["rounded"] : styles[""]} ${!pressed & props.variant == "square" & props.type == 'default' ? styles["defaultForSquare"] : styles[""]} ${!pressed & props.variant == "rounded" & props.type == 'default' ? styles["defaultForRounded"] : styles[""]} ${pressed & props.variant == 'square' ? styles["pressedForSquare"] : styles[""]} ${pressed & props.variant == 'rounded' ? styles["pressedForRounded"] : styles[""]} ${props.type == 'pressed' & props.variant == 'square' ? styles["pressedForSquare"] : styles[""]} ${props.type == "pressed" & props.variant == 'rounded' ? styles["pressedForRounded"] : styles[""]}`}
			type={props.type}
			onClick={
				handleClick
			}
			disabled={pressed || props.type == "pressed"}
		>
			{props.prompt}
		</button>
	)
}

/* для обозначения типа в документации */
Button.propTypes = {
	variant: PropTypes.oneOf([["square", "rounded"]]),
	type: PropTypes.oneOf([["default", "pressed"]]),
	prompt: PropTypes.node
}