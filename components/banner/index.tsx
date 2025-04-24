import React from "react";
import StarRating from "./startRating";
import Image from "next/image";
import { tick, avator,brand,brand1,brand2,brand3,brand4 } from "@/assets/images";
import MyForm from "./Form";
const BannerSection = () => {
  return (
    <div className="grid grid-cols-1  gap-4  my-10   md:grid-cols-2 lg:gridcols-2">
      <div className="leading-9">
        <div className="flex flex-row ">
          <StarRating /> Die #1 bei 40.000+ Unternehmen
        </div>
        <h1 className="text-4xl font-bold leading-9">
          Sie sind von der ISDN <br/>Abschaltung betroffen?
        </h1>
        <p className="text-lg font-normal">
          Wechseln Sie in nur 14 Tagen zu moderner Cloud-Telefonie – ohne<br/> hohe
          Kosten, ohne Stress und ohne Unterbrechungen.
        </p>
        <div className="flex flex-row  leading-9">
          <Image src={tick} alt="tick" />
          <span className="mx-1"> Ihre Telefonnummern <span className="font-bold"> { " " }bleiben erhalten</span> </span>
        </div>
        <div className="flex flex-row  leading-9">
          <Image src={tick} alt="tick" />
         
          <span className="mx-1"> Keine <span className="font-bold"> { " " } teuren Anschaffungskosten</span> </span>
        </div>
        <div className="flex flex-row  leading-9">
          <Image src={tick} alt="tick" />
         
          <span className="mx-1"> Betreuung durch unser <span className="font-bold"> { " " }  österreichisches Team</span> </span>
        </div>

        <div className="rounded-lg bg-[#FEFDFB] w-[333px] border border-[#FAC800] md:w-[573px] px-2 py-2">
          <p>
            "Unsere ISDN-Leitung wurde mit nur 6 Wochen Frist gekündigt.<br/>
            Hostprofis hat unser neues System in nur 14 Tagen eingerichtet und<br/>
            wir konnten alle Nummern behalten. Keine Ausfallzeit, kein Stress."<br/>
          </p>
          <div className="flex flex-row items-center mt-2">
            <Image src={avator} alt="tick" />
            <div className="flex flex-col mx-2">
              <h5>Gregor Zeisl</h5>
              <StarRating />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#FAF7EB] to-[#FAEFEB] rounded-2xl border border-[#FAC800] w-full max-w-[576px] px-4 py-6">
      <h1 className="text-4xl font-bold leading-9 flex justify-center items-center ">
      Jetzt 100% kostenlos und <br/>unverbindlich beraten lassen
        </h1>
        <MyForm />
        <div className="flex flex-wrap md:flex-row  gap-2  mt-4">
          <Image src={brand} alt="tick" />
          <Image src={brand1} alt="tick" /> 

            <Image src={brand2} alt="tick" />
            <Image src={brand3} alt="tick" />
            <Image src={brand4} alt="tick" />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
