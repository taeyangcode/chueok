import PhotoTest from "../components/PhotoTest/PhotoTest";

export default function Home() {
	return (
		<div
			style={{
				display: "grid",
				placeItems: "center",
				transformStyle: "preserve-3d",
				perspective: 1000,
				perspectiveOrigin: "right center",
			}}
		>
			<PhotoTest frameWidth={200} />
		</div>
	);
}
