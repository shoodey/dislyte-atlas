import { IconMinusVertical } from "@tabler/icons-react";

import ElementSelector from "./ElementSelector";
import RaretySelector from "./RaretySelector";
import RoleSelector from "./RoleSelector";

const Filters = () => {
  return (
    <div className="flex select-none flex-col gap-3 pb-5 lg:flex-row">
      <div className="flex items-center gap-1">
        <span>Rarety</span>
        <RaretySelector rarety="rare" />
        <RaretySelector rarety="epic" />
        <RaretySelector rarety="legendary" />
      </div>

      <div className="hidden items-center lg:flex">
        <IconMinusVertical size={16} />
      </div>

      <div className="flex items-center gap-1">
        Element
        <ElementSelector element="inferno" />
        <ElementSelector element="wind" />
        <ElementSelector element="flow" />
        <ElementSelector element="shimmer" />
      </div>

      <div className="hidden items-center lg:flex">
        <IconMinusVertical size={16} />
      </div>

      <div className="flex items-center gap-1">
        Role
        <RoleSelector role="fighter" />
        <RoleSelector role="support" />
        <RoleSelector role="defender" />
        <RoleSelector role="controller" />
      </div>
    </div>
  );
};

export default Filters;
