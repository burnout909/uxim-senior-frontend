import clsx from "clsx";

interface SidebarNavProps {
  current: string;
  onSelect: (key: string) => void;
  items: { key: string; label: string }[];
  title: string; // ✅ title prop 추가
}

function SidebarNav({ current, onSelect, items, title }: SidebarNavProps) {
  return (
    <nav className="w-[220px] bg-white shadow-sm border rounded">
      <div className="bg-blue-600 text-white px-4 py-3 font-semibold">{title}</div>
      <ul className="flex flex-col">
        {items.map((item) => {
          const isActive = current === item.key;

          return (
            <li key={item.key}>
              <button
                onClick={() => onSelect(item.key)}
                className={clsx(
                  "w-full text-left text-sm px-4 py-3 transition border-l-4",
                  isActive
                    ? "bg-blue-100 border-blue-600 text-blue-800 font-semibold"
                    : "bg-white border-transparent text-gray-700 hover:bg-blue-50"
                )}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SidebarNav;
