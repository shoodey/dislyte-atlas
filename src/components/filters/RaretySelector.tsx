import { IconDiamondsFilled } from "@tabler/icons-react";

import { useFilterStore } from "../../utils/store";
import type { Rarety } from "../../utils/types";

interface Props {
  rarety: Rarety;
}

const RaretySelector = ({ rarety }: Props) => {
  const filter = useFilterStore((state) => state.filter);
  const setRarety = useFilterStore((state) => state.setRarety);

  return (
    <div
      className={`flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1 ${
        filter.rarety.includes(rarety)
          ? "border-amber-400 [&_svg]:text-amber-400"
          : ""
      }`}
      onClick={() => setRarety(rarety)}
    >
      <IconDiamondsFilled size={14} />
      <IconDiamondsFilled size={14} />
      <IconDiamondsFilled size={14} />
      {rarety === "epic" && (
        <>
          <IconDiamondsFilled size={14} />
        </>
      )}
      {rarety === "legendary" && (
        <>
          <IconDiamondsFilled size={14} />
          <IconDiamondsFilled size={14} />
        </>
      )}
    </div>
  );
};

export default RaretySelector;
