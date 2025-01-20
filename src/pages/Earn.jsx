import { useSearchParams } from "react-router-dom";
import Challenges from "../components/Challenges";
import Rewards from "../components/Rewards";
import Tasks from "../components/Task";

export default function Earn() {
  const [componentParams, setComponentParams] = useSearchParams();
  const componentState = componentParams.get("q");
  const changeComp = (name) => {
    setComponentParams((prev) => {
      if (name === "task") {
        prev.delete("q");
      } else {
        prev.set("q", name);
      }
      return prev;
    });
  };
  const navState = {
    active:
      "w-[108px] py-2 bg-white/10 border border-[#60A5FA]/30 rounded-lg text-base font-jakarta font-bold text-accent outline-none",
    passive:
      "w-[108px] py-2 text-base font-jakarta font-bold text-white outline-none",
  };
  return (
    <section className="flex flex-col items-start justify-start w-full px-4">
      <section className="max-w-[350px] w-full flex justify-center items-center gap-3 mt-12 mx-auto">
        <button
          className={!componentState ? navState.active : navState.passive}
          onClick={() => changeComp("task")}
        >
          Tasks
        </button>
        <button
          className={
            componentState === "challenges" ? navState.active : navState.passive
          }
          onClick={() => changeComp("challenges")}
        >
          Challenges
        </button>
        <button
          className={
            componentState === "rewards" ? navState.active : navState.passive
          }
          onClick={() => changeComp("rewards")}
        >
          Rewards
        </button>
      </section>
      {componentState === "challenges" ? (
        <Challenges />
      ) : componentState === "rewards" ? (
        <Rewards />
      ) : (
        <Tasks />
      )}
    </section>
  );
}
