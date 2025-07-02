
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Check } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-black text-[#292457] mb-6 leading-tight" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                Virtual reality in het onderwijs
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Innovatie in de klas? Dat klinkt mooi. Maar is er tijd voor? Budget? En past het wel in het curriculum?
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Virtual Reality (VR) in het onderwijs roept vaak veel vragen op. Toch zien we steeds meer scholen die VR niet alleen inzetten als gimmick, maar als volwaardig leermiddel.
              </p>
              <Button className="bg-[#6ECBF5] hover:bg-[#5BB8E2] text-white px-8 py-3 text-lg font-bold">
                Vraag een demo aan
              </Button>
            </div>
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <Camera size={64} className="text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: How VR works in education */}
      <section className="bg-[#F6F3FF] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-8" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            VR in het onderwijs – hoe werkt dat?
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Uit gesprekken met docenten, managers en innovatiespecialisten blijkt steeds opnieuw:
              </p>
              <ul className="space-y-3 text-lg text-gray-700 mb-6">
                <li>– "VR is leuk, maar blijft vaak een losstaand element."</li>
                <li>– "We hebben geen tijd om nieuwe tools te implementeren."</li>
                <li>– "Past dit wel binnen het bestaande curriculum?"</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                En die twijfels zijn terecht. Want VR moet geen extraatje zijn — het moet bestaande lesdoelen versterken. En dat kan, mits goed doordacht toegepast.
              </p>
            </div>
            <div className="bg-gray-200 h-80 flex items-center justify-center">
              <Camera size={64} className="text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Where VR makes a difference */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-8" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            Waar VR wél het verschil maakt in het onderwijs
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-80 flex items-center justify-center">
              <Camera size={64} className="text-gray-400" />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Virtual Reality is geen vervanging van docenten of boeken, maar een krachtige aanvulling. Zeker in situaties waarin theorie en praktijk moeilijk samenkomen:
              </p>
              <ul className="space-y-3 text-lg text-gray-700 mb-6">
                <li>– Praktijklessen simuleren zonder risico of extra materiaal (zoals in techniek- of zorgopleidingen)</li>
                <li>– Gedragstrainingen oefenen in een veilige, gecontroleerde omgeving (zoals omgaan met agressie of samenwerken)</li>
                <li>– Oriëntatie en motivatie verhogen bij (aankomende) studenten met belevingsgerichte lessen</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Daarnaast stimuleert VR nieuwsgierigheid bij jongere generaties en maakt het onderwijs toegankelijker — of het nu gaat om virtuele laboratoria, archeologische tours of simulaties van chirurgische ingrepen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Innovation possibilities */}
      <section className="bg-[#F6F3FF] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-12" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            De mogelijkheden van innovatie in het onderwijs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-gray-200 h-32 flex items-center justify-center mb-6">
                  <Camera size={48} className="text-gray-400" />
                </div>
                <h3 className="text-2xl font-black text-[#292457] mb-4" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  VR (Virtual Reality)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Je stapt volledig in een digitale wereld via een VR-bril. Ideaal voor simulaties, trainingen en beleving.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-gray-200 h-32 flex items-center justify-center mb-6">
                  <Camera size={48} className="text-gray-400" />
                </div>
                <h3 className="text-2xl font-black text-[#292457] mb-4" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  AR (Augmented Reality)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Je ziet de echte wereld, maar met digitale lagen eroverheen — bijvoorbeeld via een tablet of AR-bril. Handig voor extra uitleg, visuele aanwijzingen of interactieve objecten in de klas.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-gray-200 h-32 flex items-center justify-center mb-6">
                  <Camera size={48} className="text-gray-400" />
                </div>
                <h3 className="text-2xl font-black text-[#292457] mb-4" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  XR (Extended Reality)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Overkoepelende term voor alle vormen van 'verrijkte' werkelijkheid, dus zowel VR als AR (en MR). Afhankelijk van je onderwijsdoelen kijken we samen welke technologie past bij jouw situatie. Soms is dat VR, soms AR — of een combinatie van beide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Curio Case Study */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-8" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            VR als oplossing voor betere betrokkenheid bij student en docent – Curio
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bij beroepsopleider Curio ontwikkelden docenten samen met Unbound XR een VR-traject waarin studenten situaties ervaren die traditioneel moeilijk te simuleren zijn—zoals risicovolle omgevingen of dure apparatuur.
              </p>
              <blockquote className="text-xl italic text-[#292457] mb-6 border-l-4 border-[#6ECBF5] pl-6">
                "Dankzij VR wordt leren leuker en interessanter voor onze studenten." – Tim Hoefeijzer en Joris van den Broek van Curio
              </blockquote>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                De samenwerking omvatte hardware-implementatie, docenttraining en structurele integratie in het curriculum. Het resultaat: verhoogde betrokkenheid én een optimaal gebruik van lesmateriaal.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Maar hier stopt onze samenwerking niet. Curio wil vooroplopen als het gaat om innovatie in het onderwijs. Zo zijn er plannen om de huidige VR-integratie naar een hoger niveau te tillen.
              </p>
              <blockquote className="text-xl italic text-[#292457] border-l-4 border-[#6ECBF5] pl-6">
                "We willen een expertisecentrum oprichten op het gebied van extended reality en innovatieve technologieën die ons onderwijs kunnen verrijken"
              </blockquote>
            </div>
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <Camera size={64} className="text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits */}
      <section className="bg-[#F6F3FF] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-12" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            Wat levert het je op?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Check className="text-[#6ECBF5] mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-gray-700">Betere motivatie bij studenten (bewezen in verschillende pilots)</p>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="text-[#6ECBF5] mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-gray-700">Snellere opname van lesstof, vooral bij praktijkvakken</p>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="text-[#6ECBF5] mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-gray-700">Minder inzet van fysieke materialen (zoals oefenpoppen of demo's)</p>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="text-[#6ECBF5] mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-gray-700">Sterkere positionering van de school als innovatief en toekomstgericht</p>
              </div>
            </div>
            <div className="bg-gray-200 h-80 flex items-center justify-center">
              <Camera size={64} className="text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Our approach */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-8" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            Zo pakken wij het aan
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-80 flex items-center justify-center">
              <Camera size={64} className="text-gray-400" />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Unbound XR werkt met een bewezen methodiek waarbij VR-oplossingen naadloos aansluiten op jouw lesprogramma. Geen losse demo's, maar complete onderwijsscenario's — ontwikkeld samen met docenten, onderwijsontwikkelaars en studenten.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Of het nu gaat om het opzetten van een VR-lokaal, het trainen van docenten of het integreren in lesplannen: we denken én doen mee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: VR Experience */}
      <section className="bg-[#F6F3FF] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-8" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            Hoe voelt een VR-les eigenlijk?
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Voor veel docenten is VR nog een abstract begrip. Maar in de praktijk is het verrassend eenvoudig:
              </p>
              <ul className="space-y-3 text-lg text-gray-700 mb-6">
                <li>– Je zet de VR bril op</li>
                <li>– Binnen enkele seconden sta je in een virtueel lokaal, praktijkomgeving of 3D-simulatie</li>
                <li>– Studenten bewegen zich vrij rond, voeren opdrachten uit of volgen instructies</li>
                <li>– De docent begeleidt, kijkt mee via een tablet of scherm, en bespreekt na</li>
              </ul>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                De interface is gebruiksvriendelijk, volledig in het Nederlands en ontworpen voor onderwijsdoeleinden. Geen complexe knoppen of instelmenu's — net zo intuïtief als een smartphone.
              </p>
              <blockquote className="text-xl italic text-[#292457] border-l-4 border-[#6ECBF5] pl-6">
                "Ik had verwacht dat het ingewikkeld zou zijn, maar studenten hadden binnen een paar minuten de controls onder de knie." – Docent tijdens VR-instructie
              </blockquote>
            </div>
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <Camera size={64} className="text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: About Unbound XR */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-8" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            Over Unbound XR
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-80 flex items-center justify-center">
              <Camera size={64} className="text-gray-400" />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Unbound XR is jouw one-stop-shop voor uitgebreide VR-implementatie. Van hardware en software tot training en ondersteuning: wij maken nieuwe vormen van leren mogelijk. En dat doen we samen met jou, stap voor stap.
              </p>
              <Button variant="outline" className="border-[#292457] text-[#292457] hover:bg-[#292457] hover:text-white px-8 py-3">
                Lees ons hele verhaal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Contact CTA */}
      <section className="bg-[#292457] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-8" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            Even sparren over jouw situatie?
          </h2>
          <p className="text-xl text-white mb-12 leading-relaxed">
            Wil je weten wat VR voor jouw school of onderwijsinstelling kan betekenen? Plan vrijblijvend een kennismaking of vraag een demo aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#6ECBF5] hover:bg-[#5BB8E2] text-white px-8 py-3 text-lg font-bold">
              Plan een adviesgesprek
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#292457] px-8 py-3 text-lg font-bold">
              Vraag een demo aan
            </Button>
          </div>
        </div>
      </section>

      {/* Section 10: FAQ */}
      <section className="bg-[#F6F3FF] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-12" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            Veelgestelde vragen over VR in het onderwijs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-black text-[#292457] mb-4" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                Wat kost zo'n VR-traject?
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                De kosten voor VR in het onderwijs zijn afhankelijk van schaal, hardware en integratie. We bieden pilottrajecten of lease-opties. En je kunt zelfs een gratis leenset aanvragen met applicatie naar keuze zodat je vrijblijvend kunt testen of het iets voor jouw onderwijsinstelling is.
              </p>
              
              <h3 className="text-2xl font-black text-[#292457] mb-4" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                Hebben docenten technische kennis nodig?
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nee. We trainen je team en leveren software die intuïtief is, inclusief blijvende support.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-black text-[#292457] mb-4" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                Past VR binnen bestaande lesplannen?
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Ja — vaak wordt VR zelfs gebruikt om lesdoelen juist krachtiger te maken.
              </p>
              
              <h3 className="text-2xl font-black text-[#292457] mb-4" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                Heb je een speciale ruimte of netwerk nodig?
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Meestal volstaat een standaard lokaal met goede WiFi. Wij adviseren in de inrichting en techniek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Other sectors */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-8" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            XR in andere sectoren
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Bekijk ook de mogelijkheden van VR en AR in andere sectoren.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button variant="outline" className="border-[#292457] text-[#292457] hover:bg-[#292457] hover:text-white p-4 h-auto text-left justify-start">
              XR in de zorg
            </Button>
            <Button variant="outline" className="border-[#292457] text-[#292457] hover:bg-[#292457] hover:text-white p-4 h-auto text-left justify-start">
              XR in de publieke sector (politie, overheid en defensie)
            </Button>
            <Button variant="outline" className="border-[#292457] text-[#292457] hover:bg-[#292457] hover:text-white p-4 h-auto text-left justify-start">
              XR in entertainment
            </Button>
            <Button variant="outline" className="border-[#292457] text-[#292457] hover:bg-[#292457] hover:text-white p-4 h-auto text-left justify-start">
              XR in de industrie
            </Button>
            <Button variant="outline" className="border-[#292457] text-[#292457] hover:bg-[#292457] hover:text-white p-4 h-auto text-left justify-start">
              XR in het bedrijfsleven
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
