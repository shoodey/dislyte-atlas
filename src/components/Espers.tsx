import { useMemo } from "react";

import espersData from "../data/espers.json";
import { useEsperStore } from "../utils/store";
import type { Esper } from "../utils/types";
import EsperCard from "./EsperCard";
import Filters from "./Filters";

const Espers = () => {
  const allEspers = espersData as Esper[];

  const espers = useEsperStore((state) => state.espers);
  const addEsper = useEsperStore((state) => state.addEsper);

  const selectableEspers = useMemo(
    () =>
      allEspers.filter(
        (baseEsper) => !espers.some((esper) => esper.name === baseEsper.name)
      ),
    [allEspers, espers]
  );

  return (
    <div className="w-full self-start">
      <div className="select-none pb-4 font-raleway text-3xl">All Espers</div>
      <Filters />
      {espers.length === allEspers.length && (
        <div className="text-base text-slate-400">
          You have already collected all Espers...
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 2xl:grid-cols-6">
        {selectableEspers.map((esper) => (
          <EsperCard
            key={esper.name}
            esper={esper}
            handleClick={() => {
              addEsper(esper);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Espers;
