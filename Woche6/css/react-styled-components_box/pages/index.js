import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxwithStyledComponent from "@/components/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxwithStyledComponent $isBlack />
      <BoxwithStyledComponent />
    </div>
  );
}
