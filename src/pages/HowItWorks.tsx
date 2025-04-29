
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
    const baseClasses = "transition-all duration-700";
    
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
        {/* Hero Section with new image and fade-in animation */}
        <section className="w-full h-[500px] bg-center bg-cover relative flex items-center animate-fade-in" style={{ backgroundImage: "url('/lovable-uploads/67ce14ee-5946-48e7-8960-473f7a79f207.png')" }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="container mx-auto px-8 relative z-10">
            <h1 className="text-6xl font-bold text-white mb-8 animate-slide-up">Jak to funguje</h1>
          </div>
        </section>

        {/* Process Steps Section with Centered Timeline */}
        <section className="container mx-auto px-8 py-16 relative">
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            {/* Centered Timeline Container */}
            <div className="relative w-full">
              {/* Centered Timeline Line with grow animation */}
              <div className="absolute left-[120px] top-0 bottom-0 w-[2px] bg-[#8E9196]">
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
                <div className="flex items-start mb-24 relative">
                  <div className="w-[120px] text-right pr-8">
                    <span className="text-[rgba(45,175,229,1)] text-3xl font-bold">1</span>
                  </div>
                  <div className="ml-8 max-w-xl">
                    <h3 className="text-3xl font-bold text-white mb-2">Začněte s formulářem.</h3>
                    <h4 className="text-3xl font-bold text-white mb-6">Jednoduše, bez registrace</h4>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div 
                ref={stepRefs[1]} 
                data-step={1} 
                className={getStepClassNames(1)}
              >
                <div className="flex items-start mb-24 relative">
                  <div className="w-[120px] text-right pr-8">
                    <span className="text-[rgba(45,175,229,1)] text-3xl font-bold">2</span>
                  </div>
                  <div className="ml-8 max-w-xl">
                    <h3 className="text-3xl font-bold text-white mb-2">Doplňte osobní info, informace o</h3>
                    <h4 className="text-3xl font-bold text-white mb-4">svém albu a nahrajte skladby</h4>
                    <p className="text-gray-300 text-lg mb-6">
                      Připravte si skladby ve formátu WAV nebo FLAC (44.1 kHz, 16 bit, celé album v jednotném formátu) a obal alba o rozměru 1500×1500 px.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div 
                ref={stepRefs[2]} 
                data-step={2} 
                className={getStepClassNames(2)}
              >
                <div className="flex items-start mb-24 relative">
                  <div className="w-[120px] text-right pr-8">
                    <span className="text-[rgba(45,175,229,1)] text-3xl font-bold">3</span>
                  </div>
                  <div className="ml-8 max-w-xl">
                    <h3 className="text-3xl font-bold text-white mb-2">Vyberte si, kde a za kolik se bude</h3>
                    <h4 className="text-3xl font-bold text-white mb-4">vaše hudba prodávat</h4>
                    <p className="text-gray-300 text-lg mb-6">
                      Vaše hudba se může prodávat až ve 200 online obchodech po celém světě za jednu z vámi zvolených cenových hladin.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div 
                ref={stepRefs[3]} 
                data-step={3} 
                className={getStepClassNames(3)}
              >
                <div className="flex items-start mb-24 relative">
                  <div className="w-[120px] text-right pr-8">
                    <span className="text-[rgba(45,175,229,1)] text-3xl font-bold">4</span>
                  </div>
                  <div className="ml-8 max-w-xl">
                    <h3 className="text-3xl font-bold text-white mb-4">Potvrďte smlouvu</h3>
                    <p className="text-gray-300 text-lg mb-6">
                      Na základě vámi zadaných informací vygenerujeme smlouvu, kterou si budete moci zobrazit a uložit. Vy si ji vytisknete a podepsanou odešlete poštou na SUPRAPHON.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div 
                ref={stepRefs[4]} 
                data-step={4} 
                className={getStepClassNames(4)}
              >
                <div className="flex items-start mb-16 relative">
                  <div className="w-[120px] text-right pr-8">
                    <span className="text-[rgba(45,175,229,1)] text-3xl font-bold">5</span>
                  </div>
                  <div className="ml-8 max-w-xl">
                    <h3 className="text-3xl font-bold text-white mb-2">Vaše hudba se začne prodávat po</h3>
                    <h4 className="text-3xl font-bold text-white mb-4">celém světě</h4>
                    <p className="text-gray-300 text-lg mb-6">
                      Do 3 týdnů se vaše hudba začne objevovat v online obchodech po celém světě. Služba je zdarma. Pouze za zprostředkování si bereme 30% z toho, co reálně prodáte. Nic neriskujete, proč to tedy nezkusit?
                    </p>
                  </div>
                </div>
              </div>

              {/* Note Box with fade-in animation */}
              <div className="ml-[160px] mr-4 bg-[rgba(50,50,50,0.7)] p-6 mb-8 max-w-xl animate-fade-in">
                <p className="text-gray-300 text-sm">
                  Všechny vyplňované informace prosím pečlivě kontrolujte, stejně tak nahrávané stopy. Jakákoliv změna trvá na zahraničních obchodech až několik týdnů. Děkujeme za pochopení.
                </p>
              </div>

              {/* Button with hover effect - centered to the text block */}
              <div className="ml-[160px] mr-4 mb-12 flex">
                <CustomButton
                  variant="medium"
                  className="bg-[rgba(45,175,229,1)] text-white border-none hover:bg-[rgba(45,175,229,0.8)] hover:scale-105 transition-all"
                >
                  Pokračovat formulářem
                </CustomButton>
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
