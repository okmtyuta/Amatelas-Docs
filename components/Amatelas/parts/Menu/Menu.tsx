import Link from "next/link";
import colors from "../../config/color";
import { StBox, StList, StSpan } from "../../styled";
import { MenuItem } from "./MenuItem";

interface MenuItem {
  content: string;
  active: boolean;
}

interface MenuProps {
  menuItems: MenuItem[];
}

export const Menu = (props: MenuProps) => {
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
        {props.menuItems.map((menuItem) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              key={menuItem.key}
              href={`/${menuItem.content}`}
            >
              <MenuItem isActive={menuItem.active} st={{ padding: "4px 12px" }}>
                {menuItem.content}
              </MenuItem>
            </Link>
          );
        })}
      </StList>
    </div>
  );
};
