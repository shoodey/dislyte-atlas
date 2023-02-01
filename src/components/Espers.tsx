import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";

import { useMyEspersStore } from "../utils/store";
import type { Esper } from "../utils/types";
import EsperCard from "./EsperCard";

interface Props {
  espers: Esper[];
}

const Espers = ({ espers }: Props) => {
  const myEspers = useMyEspersStore((state) => state.myEspers);
  const addEsper = useMyEspersStore((state) => state.addEsper);

  return (
    <div className="self-start">
      <div className="mb-4 font-raleway text-3xl">All Espers</div>
      <div className="flex flex-col lg:flex-row lg:gap-2">
        <div className="mb-4 flex items-center gap-1">
          <span>Rarity</span>
          <div className="flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1">
            <IconStarFilled size={10} />
            <IconStarFilled size={10} />
            <IconStarFilled size={10} />
          </div>
          <div className="flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1">
            <IconStarFilled size={10} />
            <IconStarFilled size={10} />
            <IconStarFilled size={10} />
            <IconStarFilled size={10} />
          </div>
          <div className="flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1">
            <IconStarFilled size={10} />
            <IconStarFilled size={10} />
            <IconStarFilled size={10} />
            <IconStarFilled size={10} />
            <IconStarFilled size={10} />
          </div>
        </div>
        <div className="mb-4 flex items-center gap-1">
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
        <div className="mb-4 flex items-center gap-1">
          Role
          <div className="flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1">
            <span className="text-sm">Fighter</span>
          </div>
          <div className="flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1">
            <span className="text-sm">Support</span>
          </div>
          <div className="flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1">
            <span className="text-sm">Defender</span>
          </div>
          <div className="flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1">
            <span className="text-sm">Controller</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4 2xl:grid-cols-6">
        {espers
          .filter((esper) => !myEspers.includes(esper.name))
          .map((esper) => (
            <EsperCard
              key={esper.name}
              esper={esper}
              handleClick={() => {
                addEsper(esper.name);
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default Espers;
