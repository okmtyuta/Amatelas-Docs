import colors from "../Amatelas/config/color";
import {
  StLink,
  StList,
  StListItem,
  StMain,
  StParagraph,
} from "../Amatelas/styled";
import { StHeadline } from "../Amatelas/styled/StHeadline";
import { Space } from "../Amatelas/utils/Space";

export const Main = () => {
  return (
    <StMain>
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
