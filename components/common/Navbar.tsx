"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Kasparro", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "About", href: "/about" },
  { label: "Dashboard", href: "/app/dashboard" },
  { label: "Audit", href: "/app/audit" },
  { label: "Architecture", href: "/app/architecture" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    
    if (href === "/") return pathname === "/";
  
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className="border-b px-6 py-4 flex flex-wrap items-center gap-6">
      {navItems.map((item, idx) => {
        
        const shouldShowSeparator = idx === 2;

        return (
          <div key={item.href} className="flex items-center gap-6">
            <Link
              href={item.href}
              className={cn(
                "text-sm text-gray-700 hover:text-black transition-colors",
                isActive(item.href) ? "font-semibold text-black" : "font-normal"
              )}
            >
              {item.label}
            </Link>

            {shouldShowSeparator && (
              <span className="text-gray-300 select-none">|</span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
