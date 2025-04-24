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
    ohnyit,
    tele,
    tick,
  } from "@/assets/images";
  import BannerSection from "@/components/banner";
  import StarRating from "@/components/banner/startRating";
  import CircleNetwork from "@/components/circleNetwork";
  import NavBar from "@/components/navbar";
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
          <h1 className="flex justify-center items-center text-2xl font-bold">
            Die #1 bei 40.000+ Unternehmen
          </h1>
          <div className="flex flex-wrap md:flex-row my-2">
            <Image src={img} alt="brand1" className="w-1/2 md:w-1/4 lg:w-1/6" />
            <Image src={img1} alt="brand1" className="w-1/2 md:w-1/4 lg:w-1/6" />
            <Image src={img2} alt="brand1" className="w-1/2 md:w-1/4 lg:w-1/6" />
            <Image src={img3} alt="brand1" className="w-1/2 md:w-1/4 lg:w-1/6" />
            <Image src={img4} alt="brand1" className="w-1/2 md:w-1/4 lg:w-1/6" />
            <Image src={img5} alt="brand1" className="w-1/2 md:w-1/4 lg:w-1/6" />
            <Image src={img6} alt="brand1" className="w-1/2 md:w-1/4 lg:w-1/6" />
            <Image src={img7} alt="brand1" className="w-1/2 md:w-1/4 lg:w-1/6" />
            <Image src={img8} alt="brand1" className="w-1/2 md:w-1/4 lg:w-1/6" />
          </div>
        </div>
  
        <div className=" flex flex-col md:flex-row jus gap-12 px-6 md:px-8 lg:px-15">
          <CircleNetwork />
          <div className="leading-9">
            <h1 className="text-4xl font-bold leading-9">
              Sie sind von der ISDN <br />
              Abschaltung betroffen?
            </h1>
            <p className="text-lg font-normal">
              Wechseln Sie in nur 14 Tagen zu moderner Cloud-Telefonie – ohne
              <br /> hohe Kosten, ohne Stress und ohne Unterbrechungen.
            </p>
            <div className="flex flex-row  leading-9">
              <Image src={tick} alt="tick" />
              <span className="mx-1">
                {" "}
                Ihre Telefonnummern{" "}
                <span className="font-bold"> bleiben erhalten</span>{" "}
              </span>
            </div>
            <div className="flex flex-row  leading-9">
              <Image src={tick} alt="tick" />
  
              <span className="mx-1">
                {" "}
                Keine{" "}
                <span className="font-bold"> teuren Anschaffungskosten</span>{" "}
              </span>
            </div>
            <div className="flex flex-row  leading-9">
              <Image src={tick} alt="tick" />
  
              <span className="mx-1">
                {" "}
                Betreuung durch unser{" "}
                <span className="font-bold"> österreichisches Team</span>{" "}
              </span>
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
            <p className="text-lg font-normal">
              Mit unserer Cloud-Telefonanlage erhalten Sie alle
              <br />
              Funktionen einer Enterprise-Telefonanlage – nur einfacher
              <br />
              zu bedienen und zu einem Bruchteil der Kosten.
            </p>
            <div className="flex flex-row  leading-9">
              <Image src={tick} alt="tick" />
              <span className="mx-1">
                {" "}
                Ihre Telefonnummern{" "}
                <span className="font-bold"> bleiben erhalten</span>{" "}
              </span>
            </div>
            <div className="flex flex-row  leading-9">
              <Image src={tick} alt="tick" />
  
              <span className="mx-1">
                {" "}
                Keine{" "}
                <span className="font-bold"> teuren Anschaffungskosten</span>{" "}
              </span>
            </div>
            <div className="flex flex-row  leading-9">
              <Image src={tick} alt="tick" />
  
              <span className="mx-1">
                {" "}
                Betreuung durch unser{" "}
                <span className="font-bold"> österreichisches Team</span>{" "}
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
                  Ihre Telefonnummern{" "}
                  <span className="font-bold">bleiben erhalten</span>
                </span>
              </div>
  
              <div className="flex items-start">
                <Image src={tick} alt="tick" className="mt-1" />
                <span className="ml-2">
                  Keine{" "}
                  <span className="font-bold">teuren Anschaffungskosten</span>
                </span>
              </div>
  
              <div className="flex items-start">
                <Image src={tick} alt="tick" className="mt-1" />
                <span className="ml-2">
                  Betreuung durch unser{" "}
                  <span className="font-bold">österreichisches Team</span>
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
            <div className="flex flex-row  leading-9">
              <Image src={tick} alt="tick" />
              <span className="mx-1">
                {" "}
                Ihre Telefonnummern{" "}
                <span className="font-bold"> bleiben erhalten</span>{" "}
              </span>
            </div>
            <div className="flex flex-row  leading-9">
              <Image src={tick} alt="tick" />
  
              <span className="mx-1">
                {" "}
                Keine{" "}
                <span className="font-bold"> teuren Anschaffungskosten</span>{" "}
              </span>
            </div>
            <div className="flex flex-row  leading-9">
              <Image src={tick} alt="tick" />
  
              <span className="mx-1">
                {" "}
                Betreuung durch unser{" "}
                <span className="font-bold"> österreichisches Team</span>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#FAF7EB] to-[#FAEFEB] px-6 md:px-8 lg:px-15">
          <h1 className="flex justify-center items-center text-2xl font-bold">
            60% weniger Kosten bei 100x mehr Leistung
          </h1>
          <div className="flex justify-center items-center flex-col">
            <div className="flex flex-row  leading-9">
              <Image src={tick} alt="tick" />
              <span className="mx-1">
                {" "}
                Genießen Sie volle Planungssicherheit durch eine{" "}
                <span className="font-bold"> All-inclusive-Pauschale </span> ohne
                Überraschungen.
              </span>
            </div>
            <div className="flex flex-row  leading-9">
              <Image src={tick} alt="tick" />
              <span className="mx-1">
                {" "}
                Bis zu <span className="font-bold">
                  60% Kostenersparnis{" "}
                </span>{" "}
                gegenüber konventionellen Telefonanlagen – bei deutlich mehr
                Funktionsumfang.
              </span>
            </div>
            <div className="flex flex-row  leading-9">
              <Image src={tick} alt="tick" />
              <span className="mx-1">
                {" "}
                <span className="font-bold">
                  Reduzieren Sie Ihre Mobilfunkkosten{" "}
                </span>{" "}
                durch intelligente Cloud Telefonie auf allen Geräten
              </span>
            </div>
          </div>
  
          <div className="grid grid-cols-1 gap-6 my-10 md:grid-cols-2">
            {/* Cloud Telefonie Pakete */}
            <div className="rounded-xl w-[300px] md:w-[500px] border border-yellow-300 p-6 shadow-sm">
              <div className="flex flex-row">
                <Image src={cloud} alt="tick" className="" />
                <h2 className="text-2xl font-semibold text-yellow-500  flex items-center gap-2">
                  Cloud Telefonie Pakete
                </h2>
              </div>
  
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700 mb-4">
                <li className="w-full sm:w-[calc(50%-0.75rem)] flex flex-row items-start leading-6">
                  <Image src={tick} alt="tick" className="mt-1" />
                  <span className="ml-2 font-bold">
                    Behalten Sie Ihre Nummern
                  </span>
                </li>
                <li className="w-full sm:w-[calc(50%-0.75rem)] flex flex-row items-start leading-6">
                  <Image src={tick} alt="tick" className="mt-1" />
                  <span className="ml-2 font-bold">Kostenlose Einrichtung</span>
                </li>
                <li className="w-full sm:w-[calc(50%-0.75rem)] flex flex-row items-start leading-6">
                  <Image src={tick} alt="tick" className="mt-1" />
                  <span className="ml-2 font-bold">Nutzbar auf jedem Gerät</span>
                </li>
                <li className="w-full sm:w-[calc(50%-0.75rem)] flex flex-row items-start leading-6">
                  <Image src={tick} alt="tick" className="mt-1" />
                  <span className="ml-2 font-bold">Hosting in Österreich</span>
                </li>
                <li className="w-full sm:w-[calc(50%-0.75rem)] flex flex-row items-start leading-6">
                  <Image src={tick} alt="tick" className="mt-1" />
                  <span className="ml-2 font-bold">
                    150+ Funktionen inklusive
                  </span>
                </li>
                <li className="w-full sm:w-[calc(50%-0.75rem)] flex flex-row items-start leading-6">
                  <Image src={tick} alt="tick" className="mt-1" />
                  <span className="ml-2 font-bold">Jederzeit kündbar</span>
                </li>
              </ul>
  
              <div className="border-t border-gray-200 pt-4 text-sm">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <p className="text-gray-500">Schon ab</p>
                    <p>
                      <span className="text-lg font-bold text-[#6b5402]">
                        €14,90
                      </span>
                      <span className="text-gray-900"> / Monat</span>
                    </p>
                    <p className="text-gray-500">pro Nutzer</p>
                  </div>
  
                  <div>
                    <p className="text-gray-500">Schon ab</p>
                    <p>
                      <span className="text-lg font-bold text-[#6b5402]">
                        €58,90
                      </span>
                      <span className="text-gray-900"> / Monat</span>
                    </p>
                    <p className="text-gray-500">für unbegrenzte Nutzer</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Telefon Tarife */}
            <div className="rounded-xl w-[300px] md:w-[500px] border border-yellow-300 p-6 shadow-sm">
              <div className="flex flex-row">
                <Image src={tele} alt="tick" className="" />
                <h2 className="text-2xl font-semibold text-yellow-500  flex items-center gap-2">
                  Telefon Tarife
                </h2>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700 mb-4">
                <li className="w-full sm:w-[calc(50%-0.75rem)] flex flex-row items-start leading-6">
                  <Image src={tick} alt="tick" className="mt-1" />
                  <span className="ml-2 font-bold">
                    Behalten Sie Ihre Nummern
                  </span>
                </li>
                <li className="w-full sm:w-[calc(50%-0.75rem)] flex flex-row items-start leading-6">
                  <Image src={tick} alt="tick" className="mt-1" />
                  <span className="ml-2 font-bold">Kostenlose Einrichtung</span>
                </li>
                <li className="w-full sm:w-[calc(50%-0.75rem)] flex flex-row items-start leading-6">
                  <Image src={tick} alt="tick" className="mt-1" />
                  <span className="ml-2 font-bold">Nutzbar auf jedem Gerät</span>
                </li>
                <li className="w-full sm:w-[calc(50%-0.75rem)] flex flex-row items-start leading-6">
                  <Image src={tick} alt="tick" className="mt-1" />
                  <span className="ml-2 font-bold">Hosting in Österreich</span>
                </li>
                <li className="w-full sm:w-[calc(50%-0.75rem)] flex flex-row items-start leading-6">
                  <Image src={tick} alt="tick" className="mt-1" />
                  <span className="ml-2 font-bold">
                    150+ Funktionen inklusive
                  </span>
                </li>
                <li className="w-full sm:w-[calc(50%-0.75rem)] flex flex-row items-start leading-6">
                  <Image src={tick} alt="tick" className="mt-1" />
                  <span className="ml-2 font-bold">Jederzeit kündbar</span>
                </li>
              </ul>
              <div className="border-t border-gray-200 pt-4 text-sm">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <p className="text-gray-500">Schon ab</p>
                    <p>
                      <span className="text-lg font-bold text-[#6b5402]">
                        €14,90
                      </span>
                      <span className="text-gray-900"> / Monat</span>
                    </p>
                    <p className="text-gray-500">pro Nutzer</p>
                  </div>
  
                  <div>
                    <p className="text-gray-500">Schon ab</p>
                    <p>
                      <span className="text-lg font-bold text-[#6b5402]">
                        €58,90
                      </span>
                      <span className="text-gray-900"> / Monat</span>
                    </p>
                    <p className="text-gray-500">für unbegrenzte Nutzer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center text-2xl font-bold space-y-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#AB8900] to-[#FAC800] hover:from-[#FAC800] hover:to-[#AB8900] text-black font-bold py-3 px-6 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              Jetzt Kostenlos Beraten Lassen
            </button>
  
            <div className="flex flex-col md:flex-row items-center space-x-2 text-base font-normal">
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
      </div>
    );
  }
  