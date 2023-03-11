import { menuItems } from "@okmtyuta/sources/menuItems";
import { useRouter } from "next/router";
import { Menu } from "../Amatelas/parts/Menu/Menu";
import { StNav } from "../Amatelas/styled/StNav";

const useMenuItemName = () => {
  const router = useRouter();
  const { menu } = router.query;

  if (Array.isArray(menu)) {
    return menu[0];
  }

  return menu;
};

export const Nav = () => {
  const menu = useMenuItemName();
  const menuItemStates = menuItems.map((menuItem) => {
    if (menuItem.content === menu) {
      return {
        content: menuItem.content,
        key: menuItem.key,
        active: true,
      };
    }

    return {
      content: menuItem.content,
      key: menuItem.key,
      active: false,
    };
  });

  return (
    <StNav
      st={{
        display: {
          sp: "none",
        },
      }}
    >
      <Menu menuItems={menuItemStates} />
    </StNav>
  );
};
