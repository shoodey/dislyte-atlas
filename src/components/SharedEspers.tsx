import type { Esper } from "../utils/types";
import EsperCard from "./EsperCard";
import Filters from "./filters/Filters";
import ShareButton from "./ShareButton";

interface Props {
  espers: Esper[];
}

const SharedEspers = ({ espers }: Props) => {
  return (
    <div className="w-full self-start">
      <div className="mb-4 flex select-none items-center gap-2 font-raleway text-3xl">
        Shared Espers
        <ShareButton espers={espers} />
      </div>
      <Filters />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-6">
        {espers.map((esper) => (
          <EsperCard key={esper.name} esper={esper} />
        ))}
      </div>
    </div>
  );
};

export default SharedEspers;
