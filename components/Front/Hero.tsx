import { useEffect, useState } from "react";
import SmoothScroll from "../SectionSm/SmoothScroll";
import { CategoriesSelection } from "./CategorySelection";
import { HeroWindow } from "./HeroWindow";
import TextPar from "./Textpa/Model";
import WindowEf from "./WindowEf";
export default function Hero() {
  return (
    <main>
      <WindowEf />
      <div>
        <HeroWindow />
        <CategoriesSelection />
        <TextPar />
        <SmoothScroll />
      </div>
    </main>
  );
}
