import { CSSProperties } from "react";
import styles from "./JinroBottle.module.scss";

interface JinroBottleProps {
	bottleWidth: number;
}

export default function JinroBottle(props: JinroBottleProps) {
	const { bottleWidth } = props;

	const bottleContainerStyle: CSSProperties = {
		width: bottleWidth,
		height: bottleWidth * 2.4,
	};

	const bottleBodyStyle: CSSProperties = {
		width: bottleWidth,
		height: bottleWidth * 1.68,
	};

	return (
		<div className={styles.bottleContainer} style={bottleContainerStyle}>
			<div className={styles.bottleBody} style={bottleBodyStyle}></div>
		</div>
	);
}
