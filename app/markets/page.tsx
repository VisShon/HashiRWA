import MarketList from "./_components/MarketList";
import markets from "../../data/markets";

const MarketPage = () => {
  return (
    <main className="mt-24 size-full min-w-[70vw] h-auto pb-10 pt-4">
      <MarketList markets={markets} />
    </main>
  );
};

export default MarketPage;
