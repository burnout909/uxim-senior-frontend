import { NavLink } from "react-router-dom";

export interface MenuItem {
  label: string;
  path: string;
}

interface LeftNavProps {
  title: string;
  items: MenuItem[];
}

export default function LeftNav({ title, items }: LeftNavProps) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-md overflow-hidden">
      {/* Title Header */}
      <div className="py-[42px] bg-[#246BEB] text-white text-center font-semibold text-[20px]">
        {title}
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col divide-y divide-gray-200">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-[28px] py-[13px] text-[16px] text-[#246BEB] ${
                isActive ? "font-bold" : "hover:bg-gray-100"
              }`
            }
          >
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
