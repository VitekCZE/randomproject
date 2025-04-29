
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomButton } from "@/components/ui/CustomButton";
import { Link } from "react-router-dom";

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-[rgba(29,29,27,1)]">
      <Header />
      <main className="relative flex w-full flex-col overflow-hidden items-center">
        {/* Hero Section */}
        <section className="w-full h-[500px] bg-center bg-cover relative flex items-center" style={{ backgroundImage: "url('/lovable-uploads/b7c2a43c-337e-4c4f-916c-686f8dda5e6a.png')" }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="container mx-auto px-8 relative z-10">
            <h1 className="text-6xl font-bold text-white mb-8">Jak to funguje</h1>
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="container mx-auto px-8 py-16">
          <div className="flex flex-col md:flex-row">
            {/* Steps Column with Timeline */}
            <div className="md:w-2/3 relative">
              {/* Timeline Line */}
              <div className="absolute left-[18px] top-10 bottom-0 w-[2px] bg-[rgba(45,175,229,1)]"></div>

              {/* Step 1 */}
              <div className="flex mb-24 relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(45,175,229,1)] flex items-center justify-center text-white font-bold z-10">1</div>
                <div className="ml-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Začněte s formulářem.</h3>
                  <h4 className="text-3xl font-bold text-white mb-6">Jednoduše, bez registrace</h4>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex mb-24 relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(45,175,229,1)] flex items-center justify-center text-white font-bold z-10">2</div>
                <div className="ml-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Doplňte osobní info, informace o</h3>
                  <h4 className="text-3xl font-bold text-white mb-4">svém albu a nahrajte skladby</h4>
                  <p className="text-white text-lg mb-6">
                    Připravte si skladby ve formátu WAV nebo FLAC (44.1 kHz, 16 bit, celé album v jednotném formátu) a obal alba o rozměru 1500×1500 px.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex mb-24 relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(45,175,229,1)] flex items-center justify-center text-white font-bold z-10">3</div>
                <div className="ml-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Vyberte si, kde a za kolik se bude</h3>
                  <h4 className="text-3xl font-bold text-white mb-4">vaše hudba prodávat</h4>
                  <p className="text-white text-lg mb-6">
                    Vaše hudba se může prodávat až ve 200 online obchodech po celém světě za jednu z vámi zvolených cenových hladin.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex mb-24 relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(45,175,229,1)] flex items-center justify-center text-white font-bold z-10">4</div>
                <div className="ml-8">
                  <h3 className="text-3xl font-bold text-white mb-4">Potvrďte smlouvu</h3>
                  <p className="text-white text-lg mb-6">
                    Na základě vámi zadaných informací vygenerujeme smlouvu, kterou si budete moci zobrazit a uložit. Vy si ji vytisknete a podepsanou odešlete poštou na SUPRAPHON.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex mb-24 relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(45,175,229,1)] flex items-center justify-center text-white font-bold z-10">5</div>
                <div className="ml-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Vaše hudba se začne prodávat po</h3>
                  <h4 className="text-3xl font-bold text-white mb-4">celém světě</h4>
                  <p className="text-white text-lg mb-6">
                    Do 3 týdnů se vaše hudba začne objevovat v online obchodech po celém světě. Služba je zdarma. Pouze za zprostředkování si bereme 30% z toho, co reálně prodáte. Nic neriskujete, proč to tedy nezkusit?
                  </p>
                </div>
              </div>

              {/* Note Box */}
              <div className="bg-[rgba(50,50,50,0.7)] p-6 mb-8 max-w-2xl">
                <p className="text-white text-sm">
                  Všechny vyplňované informace prosím pečlivě kontrolujte, stejně tak nahrávané stopy. Jakákoliv změna trvá na zahraničních obchodech až několik týdnů. Děkujeme za pochopení.
                </p>
              </div>

              {/* Button */}
              <div className="mb-12">
                <CustomButton
                  variant="medium"
                  className="bg-[rgba(45,175,229,1)] text-white border-none hover:bg-[rgba(45,175,229,0.8)]"
                >
                  Pokračovat formulářem
                </CustomButton>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:w-1/3 pl-8">
              {/* Project Publisher Info */}
              <div className="mb-12">
                <p className="text-white mb-4">Projekt vydavatelství</p>
                <img 
                  src="/lovable-uploads/151772f3-bf5d-4b20-b5d6-6ec098eb2609.png" 
                  alt="Supraphon logo" 
                  className="w-32"
                />
              </div>

              {/* Need Help Box */}
              <div className="mb-12">
                <h4 className="text-[rgba(45,175,229,1)] text-xl font-bold mb-4">Potřebujete poradit?</h4>
                <p className="text-white mb-4">Zkuste si projít <Link to="/faq" className="text-[rgba(45,175,229,1)] hover:underline">nápovědu</Link> a nebo <Link to="/contacts" className="text-[rgba(45,175,229,1)] hover:underline">nám napište</Link>, rádi vám poradíme.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
