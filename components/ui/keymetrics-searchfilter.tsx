"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import CustomDatePicker from "./cutom-datepaker";

const filters = [
  { name: "Last 7 days", href: "/dashboard/analytics" },
  { name: "Last 28 days", href: "#" },
  { name: "Last 60 days", href: "#" },
];

const KeyMetricsSearchFilter = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex flex-row flex-wrap gap-4">
        {filters.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "flex grow items-center justify-center rounded-full bg-gray-50 gap-2 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-1 md:px-2",
                {
                  "bg-sky-100 text-blue-600 rounded-full":
                    pathname === link.href,
                }
              )}
            >
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
        <CustomDatePicker />
      </div>
    </>
  );
};

export default KeyMetricsSearchFilter;
