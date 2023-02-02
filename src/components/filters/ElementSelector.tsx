import Image from "next/image";

import { useFilterStore } from "../../utils/store";
import type { Element } from "../../utils/types";

interface Props {
  element: Element;
}

const ElementSelector = ({ element }: Props) => {
  const filter = useFilterStore((state) => state.filter);
  const setElement = useFilterStore((state) => state.setElement);

  return (
    <div
      className={`flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1 ${
        filter.element.includes(element) ? "border-amber-400" : ""
      }`}
      onClick={() => setElement(element)}
    >
      <Image
        src={`/elements/${element}.webp`}
        width={16}
        height={16}
        alt={`${element}`}
      />
    </div>
  );
};

export default ElementSelector;
