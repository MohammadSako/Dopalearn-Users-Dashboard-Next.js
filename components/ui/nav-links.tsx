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
    href: "",
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
              className={clsx("text-xl hover:text-dopalearnblue", {
                "text-dopalearnblue": pathname === link.href,
              })}
            >
              <AccordionItem value="item-1" className="border-0 mx-4">
                <AccordionTrigger
                  className=" md:[&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:rotate-0"
                  chevronIconClassName={
                    !link.sub ? "hidden" : "md:mx-2 hidden md:block"
                  }
                >
                  <p className="hidden md:block">{link.name}</p>
                  <LinkIcon className="mr-2 md:hidden" />
                </AccordionTrigger>
                {link.sub?.map((subs) => (
                  <Link
                    href={subs.href}
                    className={clsx("hover:text-dopalearnblue text-black", {
                      " text-dopalearnblue": pathname === subs.href,
                    })}
                  >
                    <AccordionContent className=" md:text-sm text-xs">
                      {subs.name}
                    </AccordionContent>
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
