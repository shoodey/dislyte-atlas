import { useEsperStore } from "../utils/store";
import EsperCard from "./EsperCard";
import Filters from "./filters/Filters";
import ShareButton from "./ShareButton";

interface Props {
  label?: string;
  shareable?: boolean;
}

const MyEspers = ({ label = "My Espers" }: Props) => {
  const espers = useEsperStore((state) => state.espers);
  const removeEsper = useEsperStore((state) => state.removeEsper);

  return (
    <div className="w-full self-start">
      <div className="mb-4 flex select-none items-center gap-2 font-raleway text-3xl">
        {label}
        <ShareButton espers={espers} />
      </div>
      <Filters />
      {espers.length === 0 && (
        <div className="select-none text-base text-slate-400">
          Start by adding Espers from the top list...
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-6">
        {espers.map((esper) => (
          <EsperCard
            key={esper.name}
            esper={esper}
            handleClick={() => {
              removeEsper(esper);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MyEspers;
