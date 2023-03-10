import { StBox } from "@okmtyuta/components/Amatelas/styled";
import { Nav } from "@okmtyuta/components/parts/Nav";
import { Main } from "@okmtyuta/components/parts/Main";
import { Aside } from "@okmtyuta/components/parts/Aside";
import { Header } from "@okmtyuta/components/parts/Header";

export default function Home() {
  return (
    <StBox
      st={{
        display: {
          pc: "grid",
          tab: "grid",
        },
        gridTemplateAreas: {
          pc: [["Nav", "Main", "Aside"]],
          tab: [["Nav", "Main", "Aside"]],
        },
        gridTemplateColumns: {
          pc: ["3fr", "4fr", "2fr"],
          tab: ["3fr", "4fr", "2fr"],
        },
        margin: "20px",
      }}
    >
      <StBox st={{ display: { pc: "none", tab: "none" } }}>
        <Header />
      </StBox>
      <StBox st={{ padding: "0 12px", gridArea: "Nav" }}>
        <Nav />
      </StBox>
      <StBox st={{ gridArea: "Main" }}>
        <Main />
      </StBox>
      <StBox st={{ gridArea: "Aside" }}>
        <Aside />
      </StBox>
    </StBox>
  );
}
