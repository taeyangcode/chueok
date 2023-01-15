import styles from "./Home.module.scss";

export default function Home() {
	return (
		<div className={styles.homeContainer}>
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
					<div className={styles.shutterSwitch}></div>
					<div className={styles.lightMeter}></div>
					<div className={styles.logo}></div>
				</div>
				<div className={styles.polaroidBody}></div>
			</div>
		</div>
	);
}
