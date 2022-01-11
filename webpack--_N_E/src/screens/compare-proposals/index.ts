import createDeckScreen from "../../features/deck/createDeckScreen";
import CompareProposals from "./CompareProposals";

const screen = createDeckScreen(CompareProposals, {
  id: "compare-proposals",
  title: "Compare Your Options",
  canRender: proposal => !!proposal?.compareProposals?.length,
});

export default screen;
