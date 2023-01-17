import { CSSProperties } from "react";
import styles from "./PolaroidPhoto.module.scss";

interface PolaroidPhotoProps {
	width: number;

	photo?: any;
	photoText?: string;
}

interface PolaroidPhotoDimensions {
	frameWidth: number;
	frameHeight: number;

	photoLength: number;
}

const polaroidPhotoDimensions = (width: number): PolaroidPhotoDimensions => {
	return {
		frameWidth: width,
		frameHeight: width * 1.25,

		photoLength: width * 0.91,
	};
};

export default function PolaroidPhoto(props: PolaroidPhotoProps) {
	const { width, photo, photoText } = props;

	const { frameWidth, frameHeight, photoLength } = polaroidPhotoDimensions(width);

	const polaroidContainerColor: string = "#efefee";
	const polaroidContainerStyle: CSSProperties = {
		width: frameWidth,
		height: frameHeight,
		background: polaroidContainerColor,
	};

	const polaroidPhotoContainerStyle: CSSProperties = {
		width: frameWidth,
		height: frameWidth,
	};

	const polaroidPhotoStyle: CSSProperties = {
		width: photoLength,
		height: photoLength,
		background: typeof photo === "string" ? photo : "white",
	};

	return (
		<div className={styles.polaroidFrameContainer} style={polaroidContainerStyle}>
			<div className={styles.polaroidPhotoContainer} style={polaroidPhotoContainerStyle}>
				<div style={polaroidPhotoStyle}></div>
			</div>

			<div className={styles.polaroidWhiteSpace}>
				{photoText && <span className={styles.polaroidText}></span>}
			</div>
		</div>
	);
}
