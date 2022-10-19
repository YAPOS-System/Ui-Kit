import React from 'react';
import styles from '../../../styles/components/backward.module.css'
import Image from 'next/image';
import PropTypes from 'prop-types'

export interface IBackwardProps {
	prompt: string;
	type: string;
	onClick: Function;
}

const defaultProps = {
	type: 'default'
}

type Defaultize<TSource, TKeys extends keyof TSource> = TSource & { [P in TKeys]-?: TSource[P] };
type DefaultProps = keyof typeof defaultProps;
type BackwardProps = Defaultize<IBackwardProps, DefaultProps>;

export const Button: React.FunctionComponent = (props: React.PropsWithChildren<BackwardProps, defaultProps>) => {
	// const [isPressed, setIsPressed] = useState(false);

	// const handleClick = () => {
	// 	setIsPressed(true);
	// 	console.log(isPressed)
	// };

	return (
		<div
			className={styles[props.type]}
			type={props.type}
		>
			<p className={styles["text"]}>{props.prompt}</p>
			<Image src="/backward.svg" alt="backward" />
		</div>
	)
}

Button.propTypes = {
	type: PropTypes.oneOf([["default", "hovered"]]),
	prompt: PropTypes.node
}