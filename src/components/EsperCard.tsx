import Image from "next/image";

import type { Esper } from "../utils/types";

interface Props {
  esper: Esper;
  handleClick: () => void;
}

const EsperCard = ({ esper, handleClick }: Props) => {
  return (
    <div
      className="flex -skew-x-6 flex-col gap-4 rounded-xl border border-violet-400 bg-white/10 p-4 text-white hover:cursor-pointer"
      onClick={handleClick}
    >
      <div className="skew-x-6">
        <div className="flex gap-2">
          <div className="shrink-0 grow-0">
            <Image
              src={`/espers/${esper.name.replace(" ", "_")}_avatar.webp`}
              width={64}
              height={64}
              alt={`esper_a`}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm capitalize text-slate-400">
              {esper.element === "inferno" && (
                <Image
                  src={`/elements/inferno.webp`}
                  width={16}
                  height={16}
                  alt={`inferno`}
                  className="mr-1 inline-block"
                />
              )}
              {esper.element === "flow" && (
                <Image
                  src={`/elements/flow.webp`}
                  width={16}
                  height={16}
                  alt={`flow`}
                  className="mr-1 inline-block"
                />
              )}
              {esper.element === "wind" && (
                <Image
                  src={`/elements/wind.webp`}
                  width={16}
                  height={16}
                  alt={`wind`}
                  className="mr-1 inline-block"
                />
              )}
              {esper.element === "shimmer" && (
                <Image
                  src={`/elements/shimmer.webp`}
                  width={16}
                  height={16}
                  alt={`shimmer`}
                  className="mr-1 inline-block"
                />
              )}
              {esper.deity}
            </span>
            <span className="flex items-center gap-2 font-bold capitalize">
              {esper.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsperCard;
