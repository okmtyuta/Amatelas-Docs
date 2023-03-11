import { logoImages } from "@okmtyuta/public/logo";
import colors from "../Amatelas/config/color";
import { StBox, StImage, StLink, StSpan } from "../Amatelas/styled";
import { StHeader } from "../Amatelas/styled/StHeader";
import MenuIcon from "@mui/icons-material/Menu";
import { useRecoilState } from "recoil";
import { isShowState } from "@okmtyuta/states/isShow";

export const Header = () => {
  const [isShow, setIsShow] = useRecoilState(isShowState);
  return (
    <StHeader>
      <StBox
        st={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <StBox st={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <MenuIcon
            onClick={() => {
              setIsShow(true);
            }}
          />
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

        <StBox st={{ display: "flex", gap: "12px" }}>
          <StBox st={{ width: "24px" }}>
            <StLink href="https://github.com/okmtyuta/amatelas">
              <StImage
                st={{ width: "100%" }}
                alt="github"
                src={logoImages.github.src}
              />
            </StLink>
          </StBox>
          <StBox st={{ width: "24px" }}>
            <StLink href="https://qiita.com/okmtyuta">
              <StImage
                st={{ width: "100%" }}
                alt="qiita"
                src={logoImages.qiita.src}
              />
            </StLink>
          </StBox>
        </StBox>
      </StBox>
    </StHeader>
  );
};
