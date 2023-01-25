import styles from "./Polaroid.module.scss";

export default function Polaroid() {
	return (
		<>
			<div className={styles.polaroidContainer}>
				<div className={styles.polaroidHead}>
					<div className={styles.flashCover}>
						<div className={styles.flashCoverLines}>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>

					<div className={styles.selfTimerButton}>
						<div>
							<div></div>
						</div>
					</div>

					<div className={styles.infraredLED}>
						<div>
							<div></div>
						</div>
					</div>

					<div className={styles.lens}>
						<div>
							<div>
								<div>
									<div>
										<div></div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.viewFinder}>
						<div>
							<div>
								<div>
									<div>
										<div></div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.lightenDarkenSwitch}>
						<div className={styles.switchSigns}>
							<span>-</span>
						</div>

						<div className={styles.switchSlider}>
							<div></div>
						</div>

						<div className={styles.switchSigns}>
							<span>+</span>
						</div>
					</div>

					<div className={styles.shutterSwitch}>
						<div id={"shutterSwitchButton"}></div>
					</div>

					<div className={styles.lightMeter}>
						<div></div>
					</div>

					<div className={styles.logo}>Chu{"\n"}Eok</div>
				</div>

				<div className={styles.polaroidBody}>
					<div className={styles.topLeftCorner}></div>
					<div className={styles.filmDoorLatch}>
						<div>
							<div className={styles.latchBar}></div>
							<div className={styles.latchCircle}></div>
							<div className={styles.latchVoid}></div>
						</div>
					</div>
					<div className={styles.topRightCorner}></div>

					<div className={styles.filmShield}>
						<div>
							<div className={styles.filmShieldTop}></div>
							<div className={styles.filmShieldCenter}></div>
							<div className={styles.filmShieldBottom}></div>
						</div>
					</div>

					<div className={styles.polaroidLogo}>
						<div className={styles.polaroidLogoBlue}></div>
						<div className={styles.polaroidLogoGreen}></div>
						<div className={styles.polaroidLogoYellow}></div>
						<div className={styles.polaroidLogoOrange}></div>
						<div className={styles.polaroidLogoRed}></div>
					</div>

					<div className={styles.polaroidName}>
						<span>Polaroid</span>
					</div>

					<div className={styles.iTypeCamera}>
						<span>I-TYPE CAMERA</span>
					</div>
				</div>

				<div className={styles.polaroidBodyDepth}></div>
			</div>
		</>
	);
}
