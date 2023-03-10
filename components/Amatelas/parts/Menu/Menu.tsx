import { useState } from "react";
import colors from "../../config/color";
import { StBox, StList, StListItem, StSpan } from "../../styled";
import { MenuItem } from "./MenuItem";

const menuItems = [
  {
    content: "overview",
    key: crypto.randomUUID(),
    active: true,
  },
  {
    content: "installation",
    key: crypto.randomUUID(),
    active: false,
  },
  {
    content: "usage",
    key: crypto.randomUUID(),
    active: false,
  },
];

export const Menu = () => {
  const [menuItemStates, setMenuItemStates] = useState<
    {
      content: string;
      key: string;
      active: boolean;
    }[]
  >(menuItems);

  return (
    <div>
      <StBox st={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <StSpan
          st={{
            fontFamily: "anton",
            color: colors.themeColor,
            borderRight: `1px solid ${colors.lineGray}`,
            padding: "6px",
            margin: "4px",
            fontSize: "26px",
          }}
        >
          AmUI
        </StSpan>
        <StSpan st={{ color: colors.themeColor, fontSize: "12px" }}>
          Amatelas UI v0.0.1
        </StSpan>
      </StBox>
      <StBox st={{ margin: "0 0 6px 0" }}>Getting Started</StBox>
      <StList
        st={{
          flexDirection: "column",
          gap: "4px",
          display: "flex",
          color: colors.lightCharColor,
        }}
      >
        {menuItemStates.map((menuItem) => {
          return (
            <MenuItem
              key={menuItem.key}
              isActive={menuItem.active}
              st={{ padding: "4px 12px" }}
              onClick={() => {
                setMenuItemStates(
                  menuItemStates.map((menuItemEd) => {
                    if (menuItem.key === menuItemEd.key) {
                      return {
                        ...menuItemEd,
                        active: true,
                      };
                    }

                    return {
                      ...menuItemEd,
                      active: false,
                    };
                  })
                );
              }}
            >
              {menuItem.content}
            </MenuItem>
          );
        })}
      </StList>
    </div>
  );
};
