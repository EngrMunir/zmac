import Ads from "@/components/sections/home/ads"
import AdsTwo from "@/components/sections/home/adsTwo"
import BestSelling from "@/components/sections/home/bestSelling"
import CompanyFeatures from "@/components/sections/home/companyFeatures"
import FooterCategory from "@/components/sections/home/footerCategory"
import SliderCategory from "@/components/sections/home/sliderCategory"
import HomeProducts from "@/components/sections/home/homeProducts"
import HotSales from "@/components/sections/home/hotSales"
import TodayDeals from "@/components/sections/home/todayDeals"
import TodayDealsSecondPart from "@/components/sections/home/todayDealsSecondPart"
import TopBrands from "@/components/sections/home/topBrands"
import WeeklyDeals from "@/components/sections/home/weeklyDeals"
import YearlayOffer from "@/components/sections/home/yearlayOffer"
import Header from "@/components/sections/header/header"
import Footer from "@/components/sections/footer"
import { getProducts } from "@/lib/getProducts"
import AuctionProducts from "@/components/sections/home/auctionProducts"

const Home = async () => {
  const data = await getProducts()
  return (
    <>
      <Header />
      <Ads />
      <div className="container grid grid-cols-[32%_auto] gap-7.5 mt-8">
        <YearlayOffer />
        <AdsTwo />
      </div>
      <TodayDeals data={data} />
      <TodayDealsSecondPart />
      <SliderCategory data={data} />
      <CompanyFeatures />
      <div className="container grid 2xl:grid-cols-[24%_32%_41%] grid-cols-[35%_auto] justify-between gap-5">
        <HotSales />
        <BestSelling />
        <div className="flex 2xl:flex-col flex-row gap-5 col-span-2 2xl:col-span-1">
          <TopBrands />
          <WeeklyDeals />
        </div>
      </div>
      <HomeProducts />
      <AuctionProducts data={data}/>
      <FooterCategory />
      <Footer />
    </>
  )
}

export default Home