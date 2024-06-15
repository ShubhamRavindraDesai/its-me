"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavItem from "../component-nav-item/component";
import { useEffect, useState } from "react";
export interface NavigationProps {
  links: { path: string; label: string }[];
}
const Navigation = ({ links }: NavigationProps) => {
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    const location = document?.location?.pathname;
    setActivePath(location);
  }, []);

  return (
    <NavigationMenu>
      <NavigationMenuList className="bg-black p-6 rounded-xl flex justify-between">
        {links &&
          links?.map((link, index) => {
            return (
              <NavItem
                key={index}
                path={link?.path}
                label={link?.label}
                active={activePath === link.path}
              />
            );
          })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
