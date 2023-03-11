import colors from "../Amatelas/config/color";
import {
  StBox,
  StLink,
  StList,
  StListItem,
  StMain,
  StParagraph,
} from "../Amatelas/styled";
import { StHeadline } from "../Amatelas/styled/StHeadline";
import { Space } from "../Amatelas/utils/Space";
import { isShowState } from "@okmtyuta/states/isShow";
import { useRecoilState } from "recoil";
import { Menu } from "../Amatelas/parts/Menu/Menu";
import { menuItems } from "@okmtyuta/sources/menuItems";
import { useRouter } from "next/router";
import { StNav } from "../Amatelas/styled/StNav";
import { opacity } from "../Amatelas/function/style/opacity";

const useMenuItemName = () => {
  const router = useRouter();
  const { menu } = router.query;

  if (Array.isArray(menu)) {
    return menu[0];
  }

  return menu;
};

const SlideMenu = () => {
  const [isShow, setIsShow] = useRecoilState(isShowState);
  const menu = useMenuItemName();
  const menuItemStates = menuItems.map((menuItem) => {
    if (menuItem.content === menu) {
      return {
        content: menuItem.content,
        key: menuItem.content,
        active: true,
      };
    }

    return {
      content: menuItem.content,
      key: menuItem.content,
      active: false,
    };
  });

  return (
    <StBox>
      <StNav
        st={{
          backgroundColor: "white",
          fontSize: "13px",
          position: "fixed",
          top: "0",
          left: "-80%",
          overflowX: "hidden",
          transition: "transform 0.7s",
          height: "100%",
          width: "80%",
          zIndex: "2",
          transform: isShow ? "translateX(100%)" : "none",
        }}
      >
        <StBox st={{ margin: "12px" }}>
          <Menu menuItems={menuItemStates} />
        </StBox>
      </StNav>
      <StBox
        onClick={() => {
          setIsShow(false);
        }}
        st={{
          backgroundColor: isShow
            ? opacity("#000000", 20)
            : opacity("#000000", 0),
          position: "fixed",
          zIndex: "1",
          top: "0",
          left: "0",
          overflowX: "hidden",
          height: "100%",
          width: "100%",
          transition: "0.7s",
          visibility: isShow ? "visible" : "hidden",
        }}
      />
    </StBox>
  );
};

export const Main = () => {
  return (
    <StMain>
      <SlideMenu />
      <StHeadline
        heading="h2"
        st={{ fontWeight: "bold", margin: "12px 0 6px 0" }}
      >
        Amatelas UI - Overview
      </StHeadline>
      <StParagraph>
        Amatelas UI is a flexible UI library for React project. With Amatelas
        UI, you will never write .css file because Amatelas offer a easy way to
        compose inline style.
      </StParagraph>
      <StHeadline st={{ margin: "12px 0 6px 0" }}>Links</StHeadline>
      <StList
        st={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <StListItem>
          <StLink
            st={{ textDecoration: "underline", color: colors.themeColor }}
            href="https://github.com/okmtyuta/amatelas"
          >
            GitHub
          </StLink>
          :
          <Space /> Repository for Amatelas. If you get trouble, you can contact
          me via GitHub.
        </StListItem>
        <StListItem>
          <StLink
            st={{ textDecoration: "underline", color: colors.themeColor }}
            href="https://qiita.com/okmtyuta"
          >
            Qiita
          </StLink>
          : A blog. I
          <Space />
          may post a developer article...
        </StListItem>
      </StList>
    </StMain>
  );
};
