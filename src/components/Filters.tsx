import { IconDiamondsFilled, IconMinusVertical } from "@tabler/icons-react";
import Image from "next/image";

const Filters = () => {
  return (
    <div className="flex select-none flex-col gap-3 pb-5 lg:flex-row">
      <div className="flex items-center gap-1">
        <span>Rarity</span>
        <div className="flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1">
          <IconDiamondsFilled size={14} />
          <IconDiamondsFilled size={14} />
          <IconDiamondsFilled size={14} />
        </div>
        <div className="flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1">
          <IconDiamondsFilled size={14} />
          <IconDiamondsFilled size={14} />
          <IconDiamondsFilled size={14} />
          <IconDiamondsFilled size={14} />
        </div>
        <div className="flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1">
          <IconDiamondsFilled size={14} />
          <IconDiamondsFilled size={14} />
          <IconDiamondsFilled size={14} />
          <IconDiamondsFilled size={14} />
          <IconDiamondsFilled size={14} />
        </div>
      </div>

      <div className="hidden items-center lg:flex">
        <IconMinusVertical size={16} />
      </div>

      <div className="flex items-center gap-1">
        Element
        <div className="flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1">
          <Image
            src={`/elements/inferno.webp`}
            width={16}
            height={16}
            alt={`inferno`}
          />
        </div>
        <div className="flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1">
          <Image
            src={`/elements/flow.webp`}
            width={16}
            height={16}
            alt={`flow`}
          />
        </div>
        <div className="flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1">
          <Image
            src={`/elements/wind.webp`}
            width={16}
            height={16}
            alt={`wind`}
          />
        </div>
        <div className="flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1">
          <Image
            src={`/elements/shimmer.webp`}
            width={16}
            height={16}
            alt={`shimmer`}
          />
        </div>
      </div>

      <div className="hidden items-center lg:flex">
        <IconMinusVertical size={16} />
      </div>

      <div className="flex items-center gap-1">
        Role
        <div className="flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1">
          <span className="text-xs">Fighter</span>
        </div>
        <div className="flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1">
          <span className="text-xs">Support</span>
        </div>
        <div className="flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1">
          <span className="text-xs">Defender</span>
        </div>
        <div className="flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1">
          <span className="text-xs">Controller</span>
        </div>
      </div>
    </div>
  );
};

export default Filters;
