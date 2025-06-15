import Link from "next/link";
import iconPerson from "@/public/icons/person.png";
import iconChart from "@/public/icons/chart.png";
import iconChat from "@/public/icons/chat.png";
import logo from "@/public/icons/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    icon: (
      <Image src={iconPerson} alt="Ícone de Pessoa" width={24} height={24} />
    ),
    path: "/visao360",
    tooltip: "Visão 360º",
  },
  {
    icon: (
      <Image src={iconChart} alt="Ícone de Gráfico" width={24} height={24} />
    ),
    path: "/dashboard",
    tooltip: "dashboard",
  },
  {
    icon: <Image src={iconChat} alt="Ícone de Chat" width={24} height={24} />,
    path: "#",
    tooltip: "Conversas",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="flex flex-col items-center bg-[#20273e] py-4 w-[150px] border-r border-gray-800 drop-shadow-2xl
                 rounded-tr-4xl rounded-br-4xl h-screen z-20"
    >
      <div className="mb-6">
        <div className="h-10 w-10 rounded-full  flex items-center justify-center text-xl font-bold">
          <Image src={logo} alt="Logo" width={40} height={40} />
        </div>
      </div>

      <nav className="flex flex-col justify-center gap-10 flex-1">
        {sidebarItems.map((item, index) => {
          const isActive = item.path === pathname;

          return (
            <Link
              href={item.path}
              key={index}
              className={`p-3 rounded-xl transition-all flex items-center justify-center h-[64px] w-[60px] bg-[#2b3248]
                          ${
                            isActive ? "bg-strong-blue" : "hover:bg-strong-blue"
                          }`}
              title={item.tooltip}
            >
              {item.icon}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto mb-8">
        <div className="h-16 w-16 rounded-full bg-strong-blue flex items-center justify-center text-xs font-bold">
          AC
        </div>
      </div>
    </aside>
  );
}
