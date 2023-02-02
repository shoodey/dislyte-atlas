import { useMyEspersStore } from "../utils/store";
import type { Esper } from "../utils/types";
import EsperCard from "./EsperCard";
import Filters from "./Filters";
import ShareButton from "./ShareButton";

interface Props {
  espers: Esper[];
  label?: string;
  shareable?: boolean;
}

const MyEspers = ({ espers, label = "My Espers", shareable = true }: Props) => {
  const myEspers = useMyEspersStore((state) => state.myEspers);
  const removeEsper = useMyEspersStore((state) => state.removeEsper);

  return (
    <div className="w-full self-start">
      <div className="mb-4 flex select-none items-center gap-2 font-raleway text-3xl">
        {label}
        <ShareButton shareable={shareable} espers={myEspers} />
      </div>
      <Filters />
      {myEspers.length === 0 && (
        <div className="text-base text-slate-400">
          Start by adding Espers from the top list...
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-6">
        {espers
          .filter((esper) => myEspers.includes(esper.name))
          .map((esper) => (
            <EsperCard
              key={esper.name}
              esper={esper}
              handleClick={() => {
                removeEsper(esper.name);
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default MyEspers;
