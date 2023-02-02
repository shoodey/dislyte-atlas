import { useFilterStore } from "../../utils/store";
import type { Role } from "../../utils/types";

interface Props {
  role: Role;
}

const RoleSelector = ({ role }: Props) => {
  const filter = useFilterStore((state) => state.filter);
  const setRole = useFilterStore((state) => state.setRole);

  return (
    <div
      className={`flex shrink-0 cursor-pointer items-center rounded-2xl border border-slate-400 px-2 py-1 ${
        filter.role.includes(role) ? "border-amber-400 text-amber-400" : ""
      }`}
      onClick={() => setRole(role)}
    >
      <span className="text-sm capitalize">{role}</span>
    </div>
  );
};

export default RoleSelector;
