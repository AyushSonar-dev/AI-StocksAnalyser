import Tradingviewwidget from "@/components/tradingviewwidget";
import Header from "@/components/ui/Header";
import { HEATMAP_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from "@/lib/constants";

const Home = () => {
  const scriptURL = `https://s3.tradingview.com/external-embedding/embed-widget-`;
  return (
    <div className="flex min-h-screen home-wrapper">
      <section className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl: col-span-1 ">
          <Tradingviewwidget
            title="Market Overview"
            scriptURL={`${scriptURL}market-overview.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custom-chart "
            height={600}
          />
        </div>
        <div className="md:col-span-2 xl-col-span-2">
          <Tradingviewwidget
            title="Stocks HeatMap"
            scriptURL={`${scriptURL}stock-heatmap.js `}
            config={HEATMAP_WIDGET_CONFIG}
            
            height={600}
          />
        </div>
      </section>
      <section className="grid w-full gap-8 home-section">
        <div className=" h-full md:col-span-1 xl: col-span-1 ">
          <Tradingviewwidget
            
            scriptURL={`${scriptURL}timeline.js`}
            config={TOP_STORIES_WIDGET_CONFIG}
            className="custom-chart "
            height={600}
          />
        </div>
        <div className="h-full md:col-span-2 xl-col-span-2">
          <Tradingviewwidget
           
            scriptURL={`${scriptURL}market-quotes.js `}
            config={MARKET_DATA_WIDGET_CONFIG}
            
            height={600}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
