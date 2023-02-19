import { Slider } from "@shadcn/ui"

export function SliderDemo() {
  return <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
}
