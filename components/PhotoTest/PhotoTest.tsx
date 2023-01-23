import { CSSProperties } from "react";
import styles from "./PhotoTest.module.scss";

interface PhotoTestProps {
	frameWidth: number;
}

export default function PhotoTest(props: PhotoTestProps) {
	const { frameWidth } = props;
	const widthRatio: number = 2.13;

	const polaroidContainerWidth: number = frameWidth;
	const polaroidContainerHeight: number = frameWidth * (3.39 / 2.13);
	const polaroidContainerStyle: CSSProperties = {
		width: polaroidContainerWidth,
		height: polaroidContainerHeight,
	};

	const polaroidFrameWidth: number = frameWidth;
	const polaroidFrameHeight: number = frameWidth * (2.73 / widthRatio);
	const polaroidFrameStyle: CSSProperties = {
		width: polaroidFrameWidth,
		height: polaroidFrameHeight,
	};

	const polaroidPhotoContainerWidth: number = frameWidth * (1.81 / widthRatio);
	const polaroidPhotoContainerHeight: number = frameWidth * (2.44 / widthRatio);
	const polaroidPhotoContainerStyle: CSSProperties = {
		width: polaroidPhotoContainerWidth,
		height: polaroidPhotoContainerHeight,
	};

	return (
		<>
			<div className={styles.polaroidContainer} style={polaroidContainerStyle}>
				<div className={styles.polaroidFrame} style={polaroidFrameStyle}>
					<div className={styles.polaroidPhotoContainer} style={polaroidPhotoContainerStyle}></div>
				</div>

				<div className={styles.polaroidWhiteSpace}></div>
			</div>
			<div className={styles.polaroidContainerExtrusionFront}></div>
			<div className={styles.polaroidContainerExtrusionBottom} style={polaroidContainerStyle}></div>
		</>
	);
}
