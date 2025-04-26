import {
  cloud,
  img,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  ohneIT1,
  ohneIT2,
  ohneIT3,
  ohneIT4,
 
  tele,
  tick,
  womenImg,
} from "@/assets/images";
import BannerSection from "@/components/banner";
import StarRating from "@/components/banner/startRating";

import CircleNetwork from "@/components/circleNetwork";
import FAQSection from "@/components/faq/fawSection";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import PricingCard from "@/components/pricingCard";
import { testimonials } from "@/components/testinomial/testinomial";
import TestimonialCard from "@/components/testinomial/testinomialCard";
import TopBar from "@/components/topBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <TopBar />
      <NavBar />
      <div className="px-6 md:px-8 lg:px-15">
        <BannerSection />
      </div>

      <div className="bg-gradient-to-r from-[#FAF7EB] to-[#FAEFEB]   flex flex-col  justify-between px-6 md:px-8 lg:px-15 ">
        <h1 className="flex justify-center items-center text-xl font-bold mt-12">
          Die #1 bei 40.000+ Unternehmen
        </h1>
        <div className="flex flex-wrap md:flex-row my-2 py-12">
          <Image src={img} alt="brand1" className="w-1/2 md:w-1/4 lg:w-1/9" />
          <Image src={img1} alt="brand1" className="w-1/2 md:w-1/4 lg:w-1/9" />
          <Image src={img2} alt="brand1" className="w-1/2 md:w-1/4 lg:w-1/9" />
          <Image src={img3} alt="brand1" className="w-1/2 md:w-1/4 lg:w-1/9" />
          <Image src={img4} alt="brand1" className="w-1/2 md:w-1/4 lg:w-1/9" />
          <Image src={img5} alt="brand1" className="w-1/2 md:w-1/4 lg:w-1/9" />
          <Image src={img6} alt="brand1" className="w-1/2 md:w-1/4 lg:w-1/9" />
          <Image src={img7} alt="brand1" className="w-1/2 md:w-1/4 lg:w-1/9" />
          <Image src={img8} alt="brand1" className="w-1/2 md:w-1/4 lg:w-1/9" />
        </div>
      </div>

      <div className="  px-6 md:px-8 lg:px-15 my-20 ">
        <h1 className="flex justify-center items-center text-4xl font-bold mt-12">
        Ihre komplette Cloud Telefonanlage schon ab €14,90 pro Nutzer
        </h1>

        <h1 className="flex justify-center items-center text-xl  mt-12">
        Sie erhalten alle Premium-Funktionen einer Enterprise-Telefonanlage, kombiniert mit maximaler 
        Benutzerfreundlichkeit und das zu einem Bruchteil der Kosten. Wir kümmern uns um den perfekten Start und 
         den reibungslosen Betrieb – Sie genießen modernste Kommunikationstechnik ohne komplizierte Installation.
        </h1>
       
      </div>

      <div className=" flex flex-col   lg:flex-row  gap-12 px-6 md:px-8 lg:px-15 ">
       
        <CircleNetwork />
        <div className="leading-9">
          <h1 className="text-4xl font-bold leading-9">
            Sie sind von der ISDN <br />
            Abschaltung betroffen?
          </h1>
          <p className="text-lg font-normal py-4">
          Wir übernehmen den gesamten Umstieg von der alten <br/>
          Telefonanlage in die Cloud für Sie.<span className="font-bold">Schnell, einfach und <br/>
          kostenlos.</span> 
          </p>
          <div className="flex items-start">
            <Image src={tick} alt="tick" className="mt-1" />
            <span className="mx-1 ">
             
              Ihr System ist in nur 14   {" "}
              <span className="font-bold"> Tagen einsatzbereit</span>{" "}
              – professionell eingerichtet und perfekt konfiguriert.
            </span>
          </div>
          
          <div className="flex items-start">
            <Image src={tick} alt="tick" className="mt-1" />

            <span className="mx-1">
             
            Sie bleiben während dem Umstieg für Ihre Kunden   {" "}
              <span className="font-bold"> 100%  <br/>ohne Unterbrechung erreichbar. </span>{" "}
             
            </span>
          </div>
         
          <div className="flex items-start">
              <Image src={tick} alt="tick" className="mt-1" />
              <p className="ml-2">
              Wir kümmern uns um die komplette Nummernübertragung,<br/> damit   {" "}
              <span className="font-bold"> Ihre alten Nummern nahtlos weiter funktionieren.</span>{" "}
              </p>
            </div>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row items-center gap-10 px-6 md:px-8 lg:px-20 py-12">
        <div className="leading-relaxed flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Persönlicher und regionaler
            <br />
            Support aus Österreich
          </h1>
          <p className="text-lg mb-6">
            Wir sind ein österreichisches Unternehmen mit Standorten in allen
            Bundesländern. Sie erreichen uns jederzeit – und bei dringenden
            Fällen sind wir blitzschnell vor Ort!
            <br />
            hohe Kosten, ohne Stress und ohne Unterbrechungen.
          </p>

          <div className="space-y-3">
            <div className="flex items-start">
              <Image src={tick} alt="tick" className="mt-1" />
              <p className="ml-2">
                <span className="font-bold">
                  Ihr persönlicher, lokaler Experte kennt Ihre Bedürfnisse -{" "}
                </span>
                <br />
                kein lästiges Weiterleiten an dutzende Ansprechpartner
              </p>
            </div>

            <div className="flex items-start">
              <Image src={tick} alt="tick" className="mt-1" />
              <p className="ml-2">
                Unser <span className="font-bold">Expertenteam </span>{" "}
                gewährleistet einen{" "}
                <span className="font-bold">reibungslosen</span>
                <br />
                Betrieb, ohne Aufwand für Ihr Unternehmen.
              </p>
            </div>

            <div className="flex items-start">
              <Image src={tick} alt="tick" className="mt-1" />
              <span className="ml-2">
                Verlassen Sie sich auf{" "}
                <span className="font-bold">
                  erstklassigen Support aus Österreich
                </span>{" "}
                mit persönlicher Betreuung vor Ort.
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <Image
            src={ohneIT1}
            alt="Support aus Österreich"
            className="w-full h-auto rounded-xl border "
          />
        </div>
      </div>

      {/*  */}
      <div className=" flex flex-col md:flex-row jus gap-12 px-6 md:px-8 lg:px-15">
        <div className="">
          <Image
            src={ohneIT2}
            alt="Support aus Österreich"
            className="w-full h-auto rounded-xl border "
          />
        </div>
        <div className="leading-9">
          <h1 className="text-4xl font-bold leading-9">
            Über 150 Premium Funktionen für <br />
            Ihre Business-Telefonie
          </h1>
          <p className="text-lg font-normal py-4">
            Mit unserer Cloud-Telefonanlage erhalten Sie alle
            <br />
            Funktionen einer Enterprise-Telefonanlage – nur einfacher
            <br />
            zu bedienen und zu einem Bruchteil der Kosten.
          </p>
          <div className="flex items-start">
              <Image src={tick} alt="tick" className="mt-1" />
              <span className="ml-2">
              Eine smarte  {" "}
                <span className="font-bold">
                digitale Rezeption
                </span>{" "}
                leitet Ihre Anrufer sofort <br/> zum richtigen Ansprechpartner weiter.
              </span>
            </div>
            <div className="flex items-start">
              <Image src={tick} alt="tick" className="mt-1" />
              <span className="ml-2">
              Unser  {" "}
                <span className="font-bold">intelligentes Warteschleifensystem</span>{" "}mit {" "}<br/>
                <span className="font-bold">Rückrufoptionen  </span>{" "}sorgt für{" "}
                <span className="font-bold">zufriedene Kunden.</span>{" "}
              </span>
            </div>
          <div className="flex items-start">
            <Image src={tick} alt="tick" className="mt-1" />

            <span className="mx-1">
              {" "}
              Nahtlose Anrufweiterleitung auf mobile Geräte, Call<br/> Recording, Konferenzschaltungen,{" "}
              <span className="font-bold">  und vieles mehr.</span>{" "}
            </span>
          </div>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row items-center gap-10 px-6 md:px-8 lg:px-20 py-12">
        <div className="leading-relaxed flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Professionelle Geschäftsanrufe <br />
            von jedem Gerät aus tätigen
          </h1>
          <p className="text-lg mb-6">
            Bleiben Sie überall erreichbar – ob im Büro, unterwegs oder
            <br />
            im Home-Office:
          </p>

          <div className="space-y-3">
            <div className="flex items-start">
              <Image src={tick} alt="tick" className="mt-1" />
              <span className="ml-2">
              Nutzen Sie Ihre geschäftliche Rufnummer auf allen Geräten: {" "}<br/>
                <span className="font-bold">Tischtelefon, Smartphone oder Computer.</span>
              </span>
            </div>

            <div className="flex items-start">
              <Image src={tick} alt="tick" className="mt-1" />
              <span className="ml-2">
              Wechseln Sie nahtlos zwischen  {" "}
                <span className="font-bold">verschiedenen<br/> Arbeitsorten.</span>
                Ihre Erreichbarkeit bleibt konstant.
              </span>
            </div>

            <div className="flex items-start">
              <Image src={tick} alt="tick" className="mt-1" />
              <span className="ml-2">
              Ermöglichen Sie Ihrem Team  {" "}
                <span className="font-bold">maximale Bewegungsfreiheit</span><br/>
                bei gleichbleibend 
                <span className="font-bold">professionellem Auftreten.</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <Image
            src={ohneIT3}
            alt="Support aus Österreich"
            className="w-full h-auto rounded-xl border "
          />
        </div>
      </div>

      <div className=" flex flex-col md:flex-row jus gap-12 px-6 md:px-8 lg:px-15">
        <div className="">
          <Image
            src={ohneIT4}
            alt="Support aus Österreich"
            className="w-full h-auto rounded-xl border "
          />
        </div>
        <div className="leading-9">
          <h1 className="text-4xl font-bold leading-9">
            Nahtlose Integration mit Ihren <br />
            bestehenden Systemen
          </h1>
          <p className="text-lg font-normal my-4">
            Vernetzen Sie Ihre Kommunikation auf Knopfdruck mit <br />
            all Ihren Tools und Geschäftsprozessen:
            <br />
          </p>
          <div className="flex items-start">
              <Image src={tick} alt="tick" className="mt-1" />
              <span className="ml-2">
              Steigern Sie Ihre Servicequalität durch   {" "}
                <span className="font-bold"> sofortigen Zugriff <br/> auf Kundeninformationen bei eingehenden Anrufen.</span><br/>
               
               
              </span>
            </div>

            <div className="flex items-start">
              <Image src={tick} alt="tick" className="mt-1" />
              <span className="ml-2">
              Dokumentieren Sie jede Kundeninteraktion <br/>    {" "}
                <span className="font-bold">automatisch</span> {" "}
                in Ihrem CRM-System. 
              </span>
            </div>
            <div className="flex items-start">
              <Image src={tick} alt="tick" className="mt-1" />
              <span className="ml-2">
              Optimieren Sie Ihre Workflows durch direkte   {" "}
                <span className="font-bold"> Verknüpfung<br/> von Telefonaten mit digitalen Kundenakten.</span> {" "}
             
              </span>
            </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#FAF7EB] to-[#FAEFEB] px-6 md:px-8 lg:px-15 my-6">
        <h1 className="flex justify-center items-center text-2xl font-bold pt-16">
          60% weniger Kosten bei 100x mehr Leistung
        </h1>
        <div className="flex justify-center items-center flex-col pt-6">
          <div className="flex items-start">
            <Image src={tick} alt="tick" className="mt-1" />
            <span className="mx-1">
              {" "}
              Genießen Sie volle Planungssicherheit durch eine{" "}
              <span className="font-bold"> All-inclusive-Pauschale </span> ohne
              Überraschungen.
            </span>
          </div>
          <div className="flex items-start">
            <Image src={tick} alt="tick" className="mt-1"  />
            <span className="mx-1">
              {" "}
              Bis zu <span className="font-bold">
                60% Kostenersparnis{" "}
              </span>{" "}
              gegenüber konventionellen Telefonanlagen – bei deutlich mehr
              Funktionsumfang.
            </span>
          </div>
          <div className="flex items-start">
            <Image src={tick} alt="tick" className="mt-1"  />
            <span className="mx-1">
              {" "}
              <span className="font-bold">
                Reduzieren Sie Ihre Mobilfunkkosten{" "}
              </span>{" "}
              durch intelligente Cloud Telefonie auf allen Geräten
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1  gap-6 my-10  lg:grid-cols-2 w-full  lg:w-2/3 ">
      <PricingCard
        title="Cloud Telefonie Pakete"
        icon={cloud}
        features={[
          "Behalten Sie Ihre Nummern",
          "Kostenlose Einrichtung",
          "Nutzbar auf jedem Gerät",
          "Hosting in Österreich",
          "150+ Funktionen inklusive",
          "Jederzeit kündbar",
        ]}
        prices={[
          { price: "€14,90", unit: "/ Monat", note: "pro Nutzer" },
          { price: "€58,90", unit: "/ Monat", note: "für unbegrenzte Nutzer" },
        ]}
      />

      <PricingCard
        title="Telefon Tarife"
        icon={tele}
        features={[
          "Festnetz & Mobil in AT",
          "Einfache Anrufverwaltung",
          "Festnetz & Mobil in EU",
          "Transparente Preise",
          "Unbegrenzte Nutzer",
          "Jederzeit kündbar",
        ]}
        prices={[
          { price: "4,9 Cent", unit: "/ Minute", note: "pro Nutzer" },
          { price: "€14,90", unit: "/ Monat", note: "für unbegrenzte Nutzer" },
        ]}
      />
    </div>
        <div className="flex flex-col items-center justify-center text-center text-2xl font-bold space-y-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#AB8900] to-[#FAC800] hover:from-[#FAC800] hover:to-[#AB8900]
             text-black font-bold py-3 px-6 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            Jetzt Kostenlos Beraten Lassen
          </button>
          

          <div className="flex flex-col md:flex-row items-center space-x-2 text-base font-normal py-4">
            <StarRating />
            <span>Die #1 bei 40.000+ Unternehmen</span>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {testimonials.map((item, index) => (
        <TestimonialCard key={index} {...item} />
      ))}
    </div>
    <div className="bg-[red]">
    <FAQSection />
    </div>

    <div className="flex flex-col md:flex-row justify-between items-center gap-10 px-6 md:px-8 lg:px-20 py-12">
    <div className="">

    <h1 className="text-3xl md:text-4xl font-bold mb-4">
    Starten Sie jetzt mit moderner <br /> 
    Cloud-Telefonie
          </h1>
          <p className="text-lg mb-6">
          Vereinbaren Sie ein kurzes Gespräch mit unserem Team und erleben Sie,  wie
        viel einfacher Geschäftstelefonie sein kann.{" "}
          </p>

          <div className="space-y-3">
            <div className="flex items-start">
              <Image src={tick} alt="tick" className="mt-1" />
             
              <span className="ml-2">
               {" "}
                <span className="font-bold">Sparen Sie bis zu 60% </span>
                Ihrer Kosten
              </span>
            </div>

            <div className="flex items-start">
              <Image src={tick} alt="tick" className="mt-1" />
              <span className="ml-2">
                Keine{" "}Tätigen Sie Geschäftsanrufe 
                <span className="font-bold">von jedem Gerät, überall</span>
              </span>
            </div>

            <div className="flex items-start">
              <Image src={tick} alt="tick" className="mt-1" />
              <span className="ml-2">
              Professionelle Anrufverwaltung mit {" "}
                <span className="font-bold">lokalem Support aus Österreich</span>
              </span>
            </div>
            <div className="flex flex-col   text-2xl font-bold space-y-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#AB8900] to-[#FAC800] hover:from-[#FAC800] hover:to-[#AB8900]
             text-black font-bold py-3 px-6 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            Jetzt Kostenlos Beraten Lassen
          </button>

          <div className="flex flex-col md:flex-row  space-x-2 text-base font-normal">
            <StarRating />
            <span>Über 40.000 zufriedene Kunden</span>
          </div>
        </div>
          </div>
    
    </div>
    <div className="flex">
    <Image src={womenImg} alt="tick" className="w-[792px] h-[458px]" />
    </div>
    
    </div>

    <Footer />

   

    </div>
  );
}
