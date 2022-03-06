import Roact from "@rbxts/roact";
import { pure } from "@rbxts/roact-hooked";
import Canvas from "components/Canvas";
import { useScale } from "hooks/use-scale";
import { scale } from "utils/udim2";
import ThemesCard from "views/Pages/Options/ThemesCard/ThemesCard";

function Options() {
	const scaleFactor = useScale();

	return (
		<Canvas position={scale(0, 1)} anchor={new Vector2(0, 1)}>
			<uiscale Scale={scaleFactor} />

			<ThemesCard />
		</Canvas>
	);
}

export default pure(Options);
