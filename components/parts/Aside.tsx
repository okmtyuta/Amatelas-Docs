import colors from "../Amatelas/config/color";
import { StBox, StList, StListItem, StSpan } from "../Amatelas/styled";
import { StAside } from "../Amatelas/styled/StAside";

export const Aside = () => {
  return (
    <StAside
      st={{
        display: {
          sp: "none",
        },
      }}
    >
      <StBox
        st={{
          margin: "0 0 6px 0",
          fontSize: "14px",
          color: colors.lightCharColor,
        }}
      >
        CONTENTS
      </StBox>
      <StList
        st={{
          flexDirection: "column",
          gap: "4px",
          display: "flex",
          color: colors.lightCharColor,
          fontSize: "12px",
        }}
      >
        <StListItem
          st={{
            color: colors.themeColor,
            borderLeft: `solid 1px ${colors.themeColor}`,
            padding: "4px 12px",
          }}
        >
          Overview
        </StListItem>
        <StListItem st={{ padding: "4px 12px" }}>Installation</StListItem>
        <StListItem st={{ padding: "4px 12px" }}>Usage</StListItem>
      </StList>
    </StAside>
  );
};
