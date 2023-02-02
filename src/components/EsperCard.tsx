import { motion } from "framer-motion";
import Image from "next/image";

import type { Esper } from "../utils/types";

interface Props {
  esper: Esper;
  handleClick?: () => void;
}

const EsperElement = ({ esper }: { esper: Esper }) => {
  return (
    <>
      {esper.element === "inferno" && (
        <Image
          src={`/elements/inferno.webp`}
          width={16}
          height={16}
          alt={`inferno`}
        />
      )}
      {esper.element === "flow" && (
        <Image
          src={`/elements/flow.webp`}
          width={16}
          height={16}
          alt={`flow`}
        />
      )}
      {esper.element === "wind" && (
        <Image
          src={`/elements/wind.webp`}
          width={16}
          height={16}
          alt={`wind`}
        />
      )}
      {esper.element === "shimmer" && (
        <Image
          src={`/elements/shimmer.webp`}
          width={16}
          height={16}
          alt={`shimmer`}
        />
      )}
    </>
  );
};

const EsperCard = ({ esper, handleClick }: Props) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      onClick={() => {
        if (handleClick) {
          handleClick();
        }
      }}
      className="group flex select-none flex-col gap-4 rounded-xl border border-violet-500 bg-white/5 p-4 text-white hover:cursor-pointer hover:border-violet-300"
    >
      <div className="flex gap-2">
        <div className="shrink-0 grow-0">
          <Image
            src={`/espers/${esper.name.replace(" ", "_")}_avatar.webp`}
            width={64}
            height={64}
            alt={esper.name}
            className="skew-x-6 transition ease-in-out group-hover:scale-125"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm capitalize text-slate-400">
            {esper.deity}
          </span>
          <span className="flex items-center gap-1 font-bold capitalize">
            <EsperElement esper={esper} />
            {esper.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default EsperCard;
