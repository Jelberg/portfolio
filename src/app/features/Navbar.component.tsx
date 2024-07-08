import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Avatar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import {VerifiedIcon} from "@/app/assets/VerifiedIcon";


export default function NavbarComponent() {

  const menuItems = [
    "Experiencia",
    "Proyectos",
    "Contáctame",
  ];

  return (
    <Navbar isBordered >
      <NavbarBrand className="gap-4">
      <Avatar src={'img/photo.jpg'} size="md" className="rounded-full" />
        <p className="font-bold text-inherit">Jessica Elberg</p>
        <VerifiedIcon className="bg-white" color="#1379F3" />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="font-semibold" color="foreground" href="#">
            Experiencia
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link className="font-semibold" href="#" color="foreground">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-semibold" color="foreground" href="#">
            Contáctame
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

    </Navbar>
  );
}
