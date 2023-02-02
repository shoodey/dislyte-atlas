import { useMemo } from "react";

import { useMyEspersStore } from "../utils/store";
import type { Esper } from "../utils/types";
import EsperCard from "./EsperCard";
import Filters from "./Filters";

interface Props {
  espers: Esper[];
}

const Espers = ({ espers }: Props) => {
  const myEspers = useMyEspersStore((state) => state.myEspers);
  const addEsper = useMyEspersStore((state) => state.addEsper);

  const selectableEspers = useMemo(
    () => espers.filter((esper) => !myEspers.includes(esper.name)),
    [espers, myEspers]
  );

  return (
    <div className="w-full self-start">
      <div className="select-none pb-4 font-raleway text-3xl">All Espers</div>
      <Filters />
      {myEspers.length === espers.length && (
        <div className="text-base text-slate-400">
          You have already collected all Espers...
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-6">
        {selectableEspers.map((esper) => (
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
