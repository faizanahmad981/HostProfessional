import FAQItem from "./faqItem";


const faqData = [
    {
      question: "Brauche ich spezielle Telefone oder Geräte?",
      answer: "Nein, herkömmliche IP-Telefone oder Softphones reichen völlig aus.",
    },
    {
      question: "Kann ich meine bestehenden Telefonnummern behalten?",
      answer: "Ja, bestehende Rufnummern können problemlos übernommen werden.",
    },
    {
      question: "Kann ich das System im Homeoffice nutzen?",
      answer: "Ja, es eignet sich ideal für flexible Arbeitsmodelle wie Homeoffice.",
    },
    {
      question: "Wie viel kostet das?",
      answer: "Die Kosten variieren je nach Bedarf – kontaktieren Sie uns für ein Angebot.",
    },
    {
      question: "Gibt es Einrichtungsgebühren?",
      answer: "In der Regel fallen keine Einrichtungsgebühren an.",
    },
    {
      question: "Wie lange dauert die Einrichtung?",
      answer: "Die Einrichtung erfolgt in der Regel innerhalb weniger Tage.",
    },
  ];
  
  const FAQSection = () => {
    return (
      <section className="bg-[#fdfaf5] py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Left side */}
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Häufig gestellte <br /> Fragen
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              Brauchen Sie mehr Informationen? Hier finden Sie die Antworten.
            </p>
          </div>
  
          {/* Right side */}
          <div className="md:w-2/3 space-y-6">
            {/* Top highlighted FAQ */}
            <div className="border border-[#f1e8d6] rounded-xl bg-white px-6 py-5 shadow-sm">
              <h3 className="font-semibold text-base md:text-lg text-gray-900 mb-1">
                Was ist die Cloud-Telefonie von Hostprofis?
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Eine komplette Telefonanlage für Unternehmen, die über das Internet funktioniert. Sie bietet
                alle Funktionen eines klassischen Telefonsystems und zusätzlich moderne Features wie mobile
                Apps und Videotelefonie – alles betreut von einem lokalen österreichischen Team.
              </p>
            </div>
  
            {/* Other FAQ items */}
            <div className="mt-2">
              {faqData.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQSection;
