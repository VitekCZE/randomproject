import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { LogoGrid } from "@/components/sections/LogoGrid";
import { ArtistGrid } from "@/components/sections/ArtistGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactStrip } from "@/components/sections/ContactStrip";
import {
  FreeFeatureContent,
  StoresFeatureContent,
  CzechFeatureContent,
  YoutubeFeatureContent,
} from "@/components/sections/FeatureContent";

const Index: React.FC = () => {
  return (
    <div className="max-md:pl-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[27%] max-md:w-full max-md:ml-0">
          <div className="text-neutral-100 text-lg font-normal leading-[1.3] z-10 mr-[-133px] mt-[4554px] max-md:max-w-full max-md:mt-10">
            Vojta Kalina, Manažer Pipes and Pints
          </div>
        </div>
        <div className="w-[73%] ml-5 max-md:w-full max-md:ml-0">
          <main className="bg-[rgba(29,29,27,1)] relative flex w-full flex-col overflow-hidden items-center mx-auto max-md:max-w-full">
            <Header />

            <Hero />

            <div className="z-0 flex min-h-[522px] w-[1172px] max-w-full items-center gap-[40px_128px] text-neutral-100 font-[612] flex-wrap mt-12 max-md:mt-10">
              <FeatureSection
                id="how-it-works"
                title="Zdarma a bez poplatků"
                description="Za prodej hudby přes nás neplatíte žádné registrační poplatky. Odměnou za naši práci je až následně 30% procent z toho, co reálně prodáte. Nic neriskujete, proč to tedy nezkusit?"
                titleColor="rgba(250,186,0,1)"
                imageContent={<FreeFeatureContent />}
                imagePosition="right"
              />
            </div>

            <FeatureSection
              title="Dostaňte svou hudbu do více než 200 onlineobchodů"
              description="Prodávejte svou hudbu najednou ve více než 200 online obchodech po celém světě. Spolupracujeme s největšími světovými online obchody, jakými jsou například Spotify, YouTube Music, Apple Music, iTunes, Deezer, Amazon, Tidal, Instagram, TikTok a desítky dalších. V České republice se pak vaše skladby objeví na Supraphonline a MusicJet nebo Youradio."
              titleColor="rgba(150,195,85,1)"
              imageContent={<StoresFeatureContent />}
              imagePosition="left"
            />

            <FeatureSection
              title="Prodejhudbu.cz je český projekt"
              description="Hudební vydavatelství SUPRAPHON vytvořilo českou platformu, díky níž mohou všichni jednoduše prodávat svou hudbu po celém světě. Nikde na vás nečekají složité anglické formulace ani záludnosti s převody peněz ze zahraničí. Technická podpora i právní servis je v češtině."
              titleColor="rgba(45,175,229,1)"
              imageContent={<CzechFeatureContent />}
              imagePosition="right"
            />

            <FeatureSection
              id="youtube-revenue"
              title="Postaráme se o vaše práva na YouTube"
              description="Získejte peníze za vaši hudbu, které vám teď unikají. Díky nám můžete získavat peníze i za přehrání videí s vaší hudbou na Youtube. Z každé reklamy, kterou Youtube zobrazí u vašeho videa, vám půjde podíl."
              titleColor="rgba(230,0,50,1)"
              imageContent={<YoutubeFeatureContent />}
              imagePosition="left"
            />

            <LogoGrid />

            <ArtistGrid />

            <div className="z-0 w-[1439px] max-w-full text-lg text-neutral-100 font-normal leading-[1.3] pb-[-5px] mt-12 pt-[668px] px-[70px] max-md:max-w-full max-md:mt-10 max-md:pt-[100px] max-md:px-5">
              Vojta Kalina, Manažer Pipes and Pints
            </div>

            <ContactStrip />

            <Footer />

            <Testimonials />

            <img
              src="https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/fe68f31b7aecfd883db946f99051914fc8f8acee?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-24 shadow-[0px_0px_40px_rgba(29,29,27,1)] absolute z-0 h-24 rounded-[50%] right-[650px] top-[2406px]"
              alt="Decorative element"
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
