import { CSSProperties } from "react";
import styles from "./Polaroid.module.scss";

interface PolaroidProps {
	width: number;

	photo?: any;
	photoText?: string;
}

interface PolaroidDimensions {
	polaroidWidth: number;
	polaroidHeight: number;

	photoLength: number;
}

const polaroidDimensions = (width: number): PolaroidDimensions => {
	return {
		polaroidWidth: width,
		polaroidHeight: width * 1.25,

		photoLength: width * 0.91,
	};
};

export default function Polaroid(props: PolaroidProps) {
	const { width, photo, photoText } = props;

	const { polaroidWidth, polaroidHeight, photoLength } = polaroidDimensions(width);

	const polaroidContainerStyle: CSSProperties = {
		width: polaroidWidth,
		height: polaroidHeight,
		background: "#ededec",
	};

	const polaroidPhotoContainerStyle: CSSProperties = {
		width: polaroidWidth,
		height: polaroidWidth,
	};

	const polaroidPhotoStyle: CSSProperties = {
		width: photoLength,
		height: photoLength,
		background: typeof photo === "string" ? photo : "white",
	};

	return (
		<div className={styles.polaroidContainer} style={polaroidContainerStyle}>
			<div className={styles.polaroidPhotoContainer} style={polaroidPhotoContainerStyle}>
				<div className={styles.polaroidPhoto} style={polaroidPhotoStyle}></div>
			</div>

			<div className={styles.polaroidWhiteSpace}>
				{photoText && <span className={styles.polaroidText}></span>}
			</div>
		</div>
	);
}
