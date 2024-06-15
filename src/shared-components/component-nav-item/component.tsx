import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
export interface NavItemProps {
  path: string;
  label: string;
  active: boolean;
}
const NavItem = ({ path, label, active }: NavItemProps) => {
  console.log({ path, label, active });
  return (
    <NavigationMenuItem>
      <Link href={path} legacyBehavior passHref>
        <NavigationMenuLink
          className={`${navigationMenuTriggerStyle()} w-full h-20 rounded-[10px] cursor-pointer font-poppins  font-medium text-xtiny 
            text-gray-lite dark:text-[#A6A6A6] justify-center flex flex-col items-center dark:hover:text-white 
            dark:bg-[#212425] hover:text-black hover:bg-zinc-200  hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] 
            lg:text-white lg:dark:text-white lg:bg-gradient-to-r  bg-${
              active ? "gradient-to-r" : "#F3F6F6"
            }`}
        >
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export default NavItem;
