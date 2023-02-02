import { useMemo } from "react";

import espersData from "../data/espers.json";
import { useEsperStore, useFilterStore } from "../utils/store";
import type { Esper } from "../utils/types";
import EsperCard from "./EsperCard";
import Filters from "./filters/Filters";

const Espers = () => {
  const allEspers = espersData as Esper[];

  const espers = useEsperStore((state) => state.espers);
  const addEsper = useEsperStore((state) => state.addEsper);

  const filter = useFilterStore((state) => state.filter);

  const selectableEspers = useMemo(
    () =>
      allEspers.filter(
        // Only show espers that are not already collected
        (baseEsper) =>
          !espers.some((esper) => esper.name === baseEsper.name) &&
          filter.rarety.includes(baseEsper.rarety) &&
          filter.element.includes(baseEsper.element) &&
          filter.role.includes(baseEsper.role)
      ),
    [allEspers, espers, filter]
  );

  return (
    <div className="w-full self-start">
      <div className="select-none pb-4 font-raleway text-3xl">All Espers</div>
      <Filters />
      {espers.length === allEspers.length && (
        <div className="select-none text-base text-slate-400">
          You have already collected all Espers...
        </div>
      )}
      {selectableEspers.length === 0 && espers.length !== allEspers.length && (
        <div className="select-none text-base text-slate-400">
          No Espers match your filters...
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
