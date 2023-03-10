import { Menu } from "../Amatelas/parts/Menu/Menu";
import { StNav } from "../Amatelas/styled/StNav";

export const Nav = () => {
  return (
    <StNav
      st={{
        display: {
          sp: "none",
        },
      }}
    >
      <Menu />
    </StNav>
  );
};
