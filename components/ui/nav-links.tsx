"use client"

import { MdOutlineFeedback } from "react-icons/md";
import { BsChatDots, BsBarChart, BsHouse, BsListUl } from "react-icons/bs";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: BsHouse },
  {
    name: "Posts",
    href: "/dashboard/posts",
    icon: BsListUl,
  },
  { name: "Comments", href: "/dashboard/comments", icon: BsChatDots },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: BsBarChart,
    sub: [
      { name: "Key metrics", href: "/dashboard/analytics/keymetrics" },
      { name: "Content", href: "/dashboard/analytics/content" },
      { name: "Followers", href: "/dashboard/analytics/followers" },
    ],
  },
  { name: "Feedback", href: "/dashboard/feedback", icon: MdOutlineFeedback },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Accordion type="single" collapsible>
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "flex items-center mt-2 md:mt-0 justify-center gap-2 text-lg hover:text-blue-600 md:flex-none md:justify-start md:px-3",
                {
                  " text-blue-600": pathname === link.href,
                }
              )}
            >
              <LinkIcon className="w-6 md:mr-4" />
              <AccordionItem value="item-1" className="border-0">
                <AccordionTrigger
                  className="py-0 md:py-4"
                  chevronIconClassName={!link.sub ? "hidden" : "md:mx-2"}
                >
                  <p className="hidden md:block">{link.name}</p>
                </AccordionTrigger>

                {link.sub?.map((subs) => (
                  <Link href={subs.href} >
                    <AccordionContent>{subs.name}</AccordionContent>
                  </Link>
                ))}
              </AccordionItem>
            </Link>
          </Accordion>
        );
      })}
    </>
  );
}

// "use client";

// import { MdOutlineFeedback } from "react-icons/md";
// import { BsChatDots, BsBarChart, BsHouse, BsListUl } from "react-icons/bs";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import clsx from "clsx";

// // Map of links to display in the side navigation.
// // Depending on the size of the application, this would be stored in a database.
// const links = [
//   { name: "Home", href: "/dashboard", icon: BsHouse },
//   {
//     name: "Posts",
//     href: "/dashboard/posts",
//     icon: BsListUl,
//   },
//   { name: "Comments", href: "/dashboard/comments", icon: BsChatDots },
//   {
//     name: "Analytics",
//     href: "/dashboard/analytics",
//     icon: BsBarChart,
//     sub: [
//       { name: "Key metrics", href: "/dashboard/analytics/keymetrics"},
//       { name: "Content", href: "/dashboard/analytics/content"},
//       { name: "Followers", href: "/dashboard/analytics/followers"},
//     ],
//   },
//   { name: "Feedback", href: "/dashboard/feedback", icon: MdOutlineFeedback },
// ];

// export default function NavLinks() {
//   const pathname = usePathname();
//   return (
//     <>
//       {links.map((link) => {
//         const LinkIcon = link.icon;
//         return (
//           <Link
//             key={link.name}
//             href={link.href}
//             className={clsx(
//               "flex h-[48px] grow items-center justify-center gap-2 p-3 text-lg font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
//               {
//                 "bg-sky-100 text-blue-600": pathname === link.href,
//               }
//             )}
//           >
//             <LinkIcon className="w-6" />
//             <p className="hidden md:block">{link.name}</p>
//           </Link>
//         );
//       })}
//     </>
//   );
// }
