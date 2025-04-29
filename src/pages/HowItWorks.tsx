
import React, { useRef, useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomButton } from "@/components/ui/CustomButton";
import { Link } from "react-router-dom";

const HowItWorks: React.FC = () => {
  // Track which step is currently visible in the viewport
  const [activeStep, setActiveStep] = useState(0);
  // References to each step section
  const stepRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    // Create an intersection observer to detect which step is in view
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -10% 0px', // Consider element in view when it's 10% from center
      threshold: 0.5 // Element is considered in view when 50% visible
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Get the step number from the data attribute
          const stepNumber = Number(entry.target.getAttribute('data-step'));
          setActiveStep(stepNumber);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all step elements
    stepRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Function to determine the animation class based on active step
  const getStepClassNames = (stepIndex: number) => {
    const baseClasses = "transition-all duration-700 relative flex";
    
    if (stepIndex === activeStep) {
      return `${baseClasses} scale-105 translate-y-0 opacity-100 animate-bounce-light`;
    } else if (stepIndex < activeStep) {
      return `${baseClasses} translate-y-0 opacity-80`;
    } else {
      return `${baseClasses} translate-y-8 opacity-60`;
    }
  };

  return (
    <div className="bg-[rgba(29,29,27,1)]">
      <Header />
      <main className="relative flex w-full flex-col overflow-hidden items-center">
        {/* Hero Section with fade-in animation */}
        <section className="w-full h-[500px] bg-center bg-cover relative flex items-center animate-fade-in" style={{ backgroundImage: "url('/lovable-uploads/b7c2a43c-337e-4c4f-916c-686f8dda5e6a.png')" }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="container mx-auto px-8 relative z-10">
            <h1 className="text-6xl font-bold text-white mb-8 animate-slide-up">Jak to funguje</h1>
          </div>
        </section>

        {/* Process Steps Section with Timeline */}
        <section className="container mx-auto px-8 py-16 relative">
          <div className="flex flex-col md:flex-row">
            {/* Steps Column with Animated Timeline */}
            <div className="md:w-2/3 relative">
              {/* Timeline Line with grow animation */}
              <div className="absolute left-[18px] top-10 bottom-0 w-[2px] bg-[rgba(45,175,229,0.3)]">
                <div 
                  className="bg-[rgba(45,175,229,1)] w-full transition-all duration-1000 ease-out" 
                  style={{ 
                    height: `${Math.min(100, (activeStep + 1) * 20)}%`, 
                    transitionDelay: '0.3s' 
                  }}
                ></div>
              </div>

              {/* Step 1 */}
              <div 
                ref={stepRefs[0]} 
                data-step={0} 
                className={getStepClassNames(0)}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(45,175,229,1)] flex items-center justify-center text-white font-bold z-10 shadow-glow">1</div>
                <div className="ml-8 mb-24">
                  <h3 className="text-3xl font-bold text-white mb-2">Začněte s formulářem.</h3>
                  <h4 className="text-3xl font-bold text-white mb-6">Jednoduše, bez registrace</h4>
                </div>
              </div>

              {/* Step 2 */}
              <div 
                ref={stepRefs[1]} 
                data-step={1} 
                className={getStepClassNames(1)}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(45,175,229,1)] flex items-center justify-center text-white font-bold z-10 shadow-glow">2</div>
                <div className="ml-8 mb-24">
                  <h3 className="text-3xl font-bold text-white mb-2">Doplňte osobní info, informace o</h3>
                  <h4 className="text-3xl font-bold text-white mb-4">svém albu a nahrajte skladby</h4>
                  <p className="text-white text-lg mb-6">
                    Připravte si skladby ve formátu WAV nebo FLAC (44.1 kHz, 16 bit, celé album v jednotném formátu) a obal alba o rozměru 1500×1500 px.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div 
                ref={stepRefs[2]} 
                data-step={2} 
                className={getStepClassNames(2)}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(45,175,229,1)] flex items-center justify-center text-white font-bold z-10 shadow-glow">3</div>
                <div className="ml-8 mb-24">
                  <h3 className="text-3xl font-bold text-white mb-2">Vyberte si, kde a za kolik se bude</h3>
                  <h4 className="text-3xl font-bold text-white mb-4">vaše hudba prodávat</h4>
                  <p className="text-white text-lg mb-6">
                    Vaše hudba se může prodávat až ve 200 online obchodech po celém světě za jednu z vámi zvolených cenových hladin.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div 
                ref={stepRefs[3]} 
                data-step={3} 
                className={getStepClassNames(3)}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(45,175,229,1)] flex items-center justify-center text-white font-bold z-10 shadow-glow">4</div>
                <div className="ml-8 mb-24">
                  <h3 className="text-3xl font-bold text-white mb-4">Potvrďte smlouvu</h3>
                  <p className="text-white text-lg mb-6">
                    Na základě vámi zadaných informací vygenerujeme smlouvu, kterou si budete moci zobrazit a uložit. Vy si ji vytisknete a podepsanou odešlete poštou na SUPRAPHON.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div 
                ref={stepRefs[4]} 
                data-step={4} 
                className={getStepClassNames(4)}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(45,175,229,1)] flex items-center justify-center text-white font-bold z-10 shadow-glow">5</div>
                <div className="ml-8 mb-24">
                  <h3 className="text-3xl font-bold text-white mb-2">Vaše hudba se začne prodávat po</h3>
                  <h4 className="text-3xl font-bold text-white mb-4">celém světě</h4>
                  <p className="text-white text-lg mb-6">
                    Do 3 týdnů se vaše hudba začne objevovat v online obchodech po celém světě. Služba je zdarma. Pouze za zprostředkování si bereme 30% z toho, co reálně prodáte. Nic neriskujete, proč to tedy nezkusit?
                  </p>
                </div>
              </div>

              {/* Note Box with fade-in animation */}
              <div className="bg-[rgba(50,50,50,0.7)] p-6 mb-8 max-w-2xl animate-fade-in">
                <p className="text-white text-sm">
                  Všechny vyplňované informace prosím pečlivě kontrolujte, stejně tak nahrávané stopy. Jakákoliv změna trvá na zahraničních obchodech až několik týdnů. Děkujeme za pochopení.
                </p>
              </div>

              {/* Button with hover effect */}
              <div className="mb-12">
                <CustomButton
                  variant="medium"
                  className="bg-[rgba(45,175,229,1)] text-white border-none hover:bg-[rgba(45,175,229,0.8)] hover:scale-105 transition-all"
                >
                  Pokračovat formulářem
                </CustomButton>
              </div>
            </div>

            {/* Right Column with slide-in animation */}
            <div className="md:w-1/3 pl-8 animate-slide-in-right">
              {/* Project Publisher Info */}
              <div className="mb-12">
                <p className="text-white mb-4">Projekt vydavatelství</p>
                <img 
                  src="/lovable-uploads/151772f3-bf5d-4b20-b5d6-6ec098eb2609.png" 
                  alt="Supraphon logo" 
                  className="w-32"
                />
              </div>

              {/* Need Help Box with pulsing animation */}
              <div className="mb-12 border border-[rgba(45,175,229,0.3)] p-6 rounded-lg hover:border-[rgba(45,175,229,1)] transition-colors">
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
