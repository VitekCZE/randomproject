
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
    <div className="bg-[rgba(29,29,27,1)]">
      <main className="relative flex w-full flex-col overflow-hidden items-center">
        <Header />

        <Hero />

        <div className="container mx-auto px-8">
          <FeatureSection
            id="how-it-works"
            title="Zdarma a bez poplatků"
            description="Za prodej hudby přes nás neplatíte žádné registrační poplatky. Odměnou za naši práci je až následně 30% procent z toho, co reálně prodáte. Nic neriskujete, proč to tedy nezkusit?"
            titleColor="rgba(250,186,0,1)"
            imageContent={<FreeFeatureContent />}
            imagePosition="right"
          />

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
        </div>

        <ArtistGrid />

        <div className="container mx-auto relative px-8 py-24">
          <Testimonials />
        </div>

        <ContactStrip />

        <Footer />

        <img
          src="https://cdn.builder.io/api/v1/image/assets/94fc374a9fa94560817364a268f955ee/fe68f31b7aecfd883db946f99051914fc8f8acee?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-24 shadow-[0px_0px_40px_rgba(29,29,27,1)] absolute z-0 h-24 rounded-[50%] right-[650px] top-[2406px]"
          alt="Decorative element"
        />
      </main>
    </div>
  );
};

export default Index;
