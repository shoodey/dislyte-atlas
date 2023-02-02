import { IconShare } from "@tabler/icons-react";
import { useState } from "react";

import useCopyToClipboard from "../hooks/useCopy";
import { encode } from "../utils/lib";
import type { Esper } from "../utils/types";

interface Props {
  espers: Esper[];
}

const ShareButton = ({ espers }: Props) => {
  const [_value, copy] = useCopyToClipboard();

  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = () => {
    const protocol = window.location.protocol;
    const host = window.location.host;
    const basePath = protocol + "//" + host;

    const esperNames = espers.map((esper) => esper.name).join(",");
    const encoding = encode(esperNames);

    void copy(basePath + "/profile/" + encoding);

    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 2000);
  };

  return (
    <>
      {espers.length > 0 && (
        <span
          className="flex cursor-pointer items-center justify-center rounded-full bg-sky-500 px-2 py-2 hover:bg-sky-600"
          onClick={handleCopy}
        >
          <IconShare className="inline" size={24} />
        </span>
      )}

      <div
        className={`rounded-full bg-violet-600 py-1 px-4 text-base transition duration-1000 ease-in-out ${
          showCopied ? "opacity-100" : "opacity-0"
        }`}
      >
        Link copied to clipboard!
      </div>
    </>
  );
};

export default ShareButton;
