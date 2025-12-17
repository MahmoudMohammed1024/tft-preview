import { GridScan } from "../ui/GridScan";

export default function GridScanBackground() {
    return (
        <div className="absolute inset-0 -z-10 isolate pointer-events-none bg-[#050B14]">
            <GridScan
                sensitivity={0.55}
                lineThickness={1}
                linesColor="#392e4e"
                gridScale={0.1}
                scanColor="#7df9ff"
                scanOpacity={0.35}
                enablePost
                bloomIntensity={0.35}
                chromaticAberration={0.0015}
                noiseIntensity={0.01}
                className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        </div>
    );
}
