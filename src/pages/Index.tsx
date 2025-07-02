import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Camera, Check, Users, BookOpen, Lightbulb, Eye, Headphones, Smartphone, Quote, HelpCircle, Phone } from "lucide-react";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
const Index = () => {
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6F3FF] rounded-full opacity-50 -translate-y-48 translate-x-48"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block border-2 border-[#292457] text-[#292457] px-4 py-2 rounded-full text-sm font-bold mb-6 bg-slate-50">
                Nu ook als leenset beschikbaar
              </div>
              <h1 className="text-5xl font-black text-[#292457] mb-6 leading-tight font-titillium">
                Virtual reality in het onderwijs
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-extra-light">
                Innovatie in de klas? Dat klinkt mooi. Maar is er tijd voor? Budget? En past het wel in het curriculum?
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-extra-light">
                Virtual Reality (VR) in het onderwijs roept vaak veel vragen op. Toch zien we steeds meer scholen die VR niet alleen inzetten als gimmick, maar als volwaardig leermiddel.
              </p>
              <Button className="bg-[#6ECBF5] hover:bg-[#5BB8E2] text-white px-8 py-3 text-lg font-bold">
                Vraag een demo aan
              </Button>
            </div>
            <div className="bg-gray-200 h-96 flex items-center justify-center rounded-2xl shadow-lg">
              <Camera size={64} className="text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Quote Cards */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-12 text-center font-titillium">
            VR in het onderwijs – hoe werkt dat?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed font-extra-light text-center">
            Uit gesprekken met docenten, managers en innovatiespecialisten blijkt steeds opnieuw:
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="bg-[#F6F3FF] border-0 shadow-lg">
              <CardContent className="p-6">
                <Quote className="text-[#6ECBF5] mb-4" size={32} />
                <p className="text-lg text-gray-700 font-extra-light italic">
                  "VR is leuk, maar blijft vaak een losstaand element."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#F6F3FF] border-0 shadow-lg">
              <CardContent className="p-6">
                <Quote className="text-[#6ECBF5] mb-4" size={32} />
                <p className="text-lg text-gray-700 font-extra-light italic">
                  "We hebben geen tijd om nieuwe tools te implementeren."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#F6F3FF] border-0 shadow-lg">
              <CardContent className="p-6">
                <Quote className="text-[#6ECBF5] mb-4" size={32} />
                <p className="text-lg text-gray-700 font-extra-light italic">
                  "Past dit wel binnen het bestaande curriculum?"
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed font-extra-light text-center">
            En die twijfels zijn terecht. Want VR moet geen extraatje zijn — het moet bestaande lesdoelen versterken. En dat kan, mits goed doordacht toegepast.
          </p>
        </div>
      </section>

      {/* Section 2: Where VR makes a difference - Grid with Icons */}
      <section className="bg-[#F6F3FF] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-8 text-center font-titillium">
            Waar VR wél het verschil maakt in het onderwijs
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-96 flex items-center justify-center rounded-2xl shadow-lg">
              <Camera size={64} className="text-gray-400" />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-extra-light">
                Virtual Reality is geen vervanging van docenten of boeken, maar een krachtige aanvulling. Zeker in situaties waarin theorie en praktijk moeilijk samenkomen:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#6ECBF5] p-3 rounded-full flex-shrink-0">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <p className="text-gray-700 font-extra-light">
                    Praktijklessen simuleren zonder risico of extra materiaal (zoals in techniek- of zorgopleidingen)
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#6ECBF5] p-3 rounded-full flex-shrink-0">
                    <Users className="text-white" size={24} />
                  </div>
                  <p className="text-gray-700 font-extra-light">
                    Gedragstrainingen oefenen in een veilige, gecontroleerde omgeving (zoals omgaan met agressie of samenwerken)
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#6ECBF5] p-3 rounded-full flex-shrink-0">
                    <Lightbulb className="text-white" size={24} />
                  </div>
                  <p className="text-gray-700 font-extra-light">
                    Oriëntatie en motivatie verhogen bij (aankomende) studenten met belevingsgerichte lessen
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#6ECBF5] p-3 rounded-full flex-shrink-0">
                    <Eye className="text-white" size={24} />
                  </div>
                  <p className="text-gray-700 font-extra-light">
                    Nieuwsgierigheid stimuleren en onderwijs toegankelijker maken
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-extra-light">
                Daarnaast stimuleert VR nieuwsgierigheid bij jongere generaties en maakt het onderwijs toegankelijker — of het nu gaat om virtuele laboratoria, archeologische tours of simulaties van chirurgische ingrepen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Innovation possibilities - Enhanced Cards */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-12 text-center font-titillium">
            De mogelijkheden van innovatie in het onderwijs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#6ECBF5] to-[#292457]"></div>
              <CardContent className="p-8">
                <div className="bg-[#F6F3FF] h-32 flex items-center justify-center mb-6 rounded-xl">
                  <Headphones size={48} className="text-[#6ECBF5]" />
                </div>
                <h3 className="text-2xl font-black text-[#292457] mb-4 font-titillium">
                  VR (Virtual Reality)
                </h3>
                <p className="text-gray-700 leading-relaxed font-extra-light">
                  Je stapt volledig in een digitale wereld via een VR-bril. Ideaal voor simulaties, trainingen en beleving.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#6ECBF5] to-[#292457]"></div>
              <CardContent className="p-8">
                <div className="bg-[#F6F3FF] h-32 flex items-center justify-center mb-6 rounded-xl">
                  <Smartphone size={48} className="text-[#6ECBF5]" />
                </div>
                <h3 className="text-2xl font-black text-[#292457] mb-4 font-titillium">
                  AR (Augmented Reality)
                </h3>
                <p className="text-gray-700 leading-relaxed font-extra-light">
                  Je ziet de echte wereld, maar met digitale lagen eroverheen — bijvoorbeeld via een tablet of AR-bril. Handig voor extra uitleg, visuele aanwijzingen of interactieve objecten in de klas.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#6ECBF5] to-[#292457]"></div>
              <CardContent className="p-8">
                <div className="bg-[#F6F3FF] h-32 flex items-center justify-center mb-6 rounded-xl">
                  <Eye size={48} className="text-[#6ECBF5]" />
                </div>
                <h3 className="text-2xl font-black text-[#292457] mb-4 font-titillium">
                  XR (Extended Reality)
                </h3>
                <p className="text-gray-700 leading-relaxed font-extra-light">
                  Overkoepelende term voor alle vormen van 'verrijkte' werkelijkheid, dus zowel VR als AR (en MR). Afhankelijk van je onderwijsdoelen kijken we samen welke technologie past bij jouw situatie. Soms is dat VR, soms AR — of een combinatie van beide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Curio Case Study - Testimonial Style */}
      <section className="bg-[#F6F3FF] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-8 text-center font-titillium">
            VR als oplossing voor betere betrokkenheid bij student en docent – Curio
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <div className="flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <Users size={32} className="text-gray-400" />
                  </div>
                  <div>
                    <p className="font-bold text-[#292457]">Tim Hoefeijzer & Joris van den Broek</p>
                    <p className="text-gray-600 font-extra-light">Curio</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed font-extra-light">
                  Bij beroepsopleider Curio ontwikkelden docenten samen met Unbound XR een VR-traject waarin studenten situaties ervaren die traditioneel moeilijk te simuleren zijn—zoals risicovolle omgevingen of dure apparatuur.
                </p>
                <blockquote className="text-xl italic text-[#292457] mb-6 border-l-4 border-[#6ECBF5] pl-6 font-extra-light">
                  "Dankzij VR wordt leren leuker en interessanter voor onze studenten."
                </blockquote>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed font-extra-light">
                  De samenwerking omvatte hardware-implementatie, docenttraining en structurele integratie in het curriculum. Het resultaat: verhoogde betrokkenheid én een optimaal gebruik van lesmateriaal.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed font-extra-light">
                  Maar hier stopt onze samenwerking niet. Curio wil vooroplopen als het gaat om innovatie in het onderwijs. Zo zijn er plannen om de huidige VR-integratie naar een hoger niveau te tillen.
                </p>
                <blockquote className="text-xl italic text-[#292457] border-l-4 border-[#6ECBF5] pl-6 font-extra-light">
                  "We willen een expertisecentrum oprichten op het gebied van extended reality en innovatieve technologieën die ons onderwijs kunnen verrijken"
                </blockquote>
              </div>
              <div className="bg-gray-200 flex items-center justify-center rounded-2xl shadow-lg">
                <Camera size={64} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits - Icon Grid */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-4 text-center font-titillium">
            Waarom scholen kiezen voor VR met Unbound XR
          </h2>
          <h3 className="text-2xl font-bold text-[#292457] mb-12 text-center font-titillium">
            Wat levert het je op?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="grid gap-6">
              <div className="flex items-start space-x-4 bg-[#F6F3FF] p-6 rounded-xl">
                <Check className="text-[#6ECBF5] mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-gray-700 font-extra-light">Betere motivatie bij studenten (bewezen in verschillende pilots)</p>
              </div>
              <div className="flex items-start space-x-4 bg-[#F6F3FF] p-6 rounded-xl">
                <Check className="text-[#6ECBF5] mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-gray-700 font-extra-light">Snellere opname van lesstof, vooral bij praktijkvakken</p>
              </div>
              <div className="flex items-start space-x-4 bg-[#F6F3FF] p-6 rounded-xl">
                <Check className="text-[#6ECBF5] mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-gray-700 font-extra-light">Minder inzet van fysieke materialen (zoals oefenpoppen of demo's)</p>
              </div>
              <div className="flex items-start space-x-4 bg-[#F6F3FF] p-6 rounded-xl">
                <Check className="text-[#6ECBF5] mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-gray-700 font-extra-light">Sterkere positionering van de school als innovatief en toekomstgericht</p>
              </div>
            </div>
            <div className="bg-gray-200 h-80 flex items-center justify-center rounded-2xl shadow-lg">
              <Camera size={64} className="text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Our approach - Step by Step */}
      <section className="bg-[#F6F3FF] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-12 text-center font-titillium">
            Zo pakken wij het aan
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-80 flex items-center justify-center rounded-2xl shadow-lg">
              <Camera size={64} className="text-gray-400" />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-[#6ECBF5] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#292457] mb-2 font-titillium">Intake & Analyse</h3>
                  <p className="text-gray-700 font-extra-light">We analyseren je onderwijsdoelen en curriculum om de juiste VR-toepassingen te identificeren.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-[#6ECBF5] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#292457] mb-2 font-titillium">Training & Begeleiding</h3>
                  <p className="text-gray-700 font-extra-light">Onze experts trainen je docenten en bieden continue ondersteuning tijdens de implementatie.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-[#6ECBF5] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#292457] mb-2 font-titillium">Integratie & Optimalisatie</h3>
                  <p className="text-gray-700 font-extra-light">We integreren VR naadloos in je lesplannen en optimaliseren de ervaring voor maximaal leerresultaat.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 leading-relaxed font-extra-light max-w-4xl mx-auto">
              Unbound XR werkt met een bewezen methodiek waarbij VR-oplossingen naadloos aansluiten op jouw lesprogramma. Geen losse demo's, maar complete onderwijsscenario's — ontwikkeld samen met docenten, onderwijsontwikkelaars en studenten. Of het nu gaat om het opzetten van een VR-lokaal, het trainen van docenten of het integreren in lesplannen: we denken én doen mee.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: VR Experience - Enhanced Visual */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-8 text-center font-titillium">
            Hoe voelt een VR-les eigenlijk?
          </h2>
          <div className="bg-[#F6F3FF] rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed font-extra-light">
                  Voor veel docenten is VR nog een abstract begrip. Maar in de praktijk is het verrassend eenvoudig:
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#6ECBF5] text-white w-8 h-8 flex items-center justify-center font-bold text-sm rounded-none">1</div>
                    <p className="text-lg text-gray-700 font-extra-light">Je zet de VR bril op</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#6ECBF5] text-white w-8 h-8 flex items-center justify-center font-bold text-sm rounded-none">2</div>
                    <p className="text-lg text-gray-700 font-extra-light">Binnen enkele seconden sta je in een virtueel lokaal, praktijkomgeving of 3D-simulatie</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#6ECBF5] text-white w-8 h-8 flex items-center justify-center font-bold text-sm rounded-none">3</div>
                    <p className="text-lg text-gray-700 font-extra-light">Studenten bewegen zich vrij rond, voeren opdrachten uit of volgen instructies</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#6ECBF5] text-white w-8 h-8 flex items-center justify-center font-bold text-sm rounded-none">4</div>
                    <p className="text-lg text-gray-700 font-extra-light">De docent begeleidt, kijkt mee via een tablet of scherm, en bespreekt na</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed font-extra-light">
                  De interface is gebruiksvriendelijk, volledig in het Nederlands en ontworpen voor onderwijsdoeleinden. Geen complexe knoppen of instelmenu's — net zo intuïtief als een smartphone.
                </p>
                <blockquote className="text-xl italic text-[#292457] border-l-4 border-[#6ECBF5] pl-6 font-extra-light">
                  "Ik had verwacht dat het ingewikkeld zou zijn, maar studenten hadden binnen een paar minuten de controls onder de knie." – Docent tijdens VR-instructie
                </blockquote>
              </div>
              <div className="bg-gray-200 h-96 flex items-center justify-center rounded-2xl shadow-lg">
                <Camera size={64} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: About Unbound XR */}
      <section className="bg-[#F6F3FF] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-8 text-center font-titillium">
            Over Unbound XR
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-80 flex items-center justify-center rounded-2xl shadow-lg">
              <Camera size={64} className="text-gray-400" />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-extra-light">
                Unbound XR is jouw one-stop-shop voor uitgebreide VR-implementatie. Van hardware en software tot training en ondersteuning: wij maken nieuwe vormen van leren mogelijk. En dat doen we samen met jou, stap voor stap.
              </p>
              <Button variant="outline" className="border-[#292457] text-[#292457] hover:bg-[#292457] hover:text-white px-8 py-3">
                Lees ons hele verhaal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Contact CTA - Enhanced */}
      <section className="bg-[#292457] py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl font-black text-white mb-8 font-titillium">
            Even sparren over jouw situatie?
          </h2>
          <p className="text-xl text-white mb-12 leading-relaxed font-extra-light">
            Wil je weten wat VR voor jouw school of onderwijsinstelling kan betekenen? Plan vrijblijvend een kennismaking of vraag een demo aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#6ECBF5] hover:bg-[#5BB8E2] text-white px-8 py-3 text-lg font-bold">
              <Phone className="mr-2" size={20} />
              Plan een adviesgesprek
            </Button>
            <Button variant="outline" className="border-white hover:bg-white px-8 py-3 text-lg font-bold text-[#292457]">
              Vraag een demo aan
            </Button>
          </div>
        </div>
      </section>

      {/* Section 10: FAQ - Accordion Style */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-12 text-center font-titillium">
            Veelgestelde vragen over VR in het onderwijs
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center">
                  <HelpCircle className="text-[#6ECBF5] mr-3 flex-shrink-0" size={24} />
                  <span className="text-xl font-bold text-[#292457] font-titillium">Wat kost zo'n VR-traject?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2">
                <p className="text-lg text-gray-700 leading-relaxed font-extra-light ml-9">
                  De kosten voor VR in het onderwijs zijn afhankelijk van schaal, hardware en integratie. We bieden pilottrajecten of lease-opties. En je kunt zelfs een gratis leenset aanvragen met applicatie naar keuze zodat je vrijblijvend kunt testen of het iets voor jouw onderwijsinstelling is.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center">
                  <HelpCircle className="text-[#6ECBF5] mr-3 flex-shrink-0" size={24} />
                  <span className="text-xl font-bold text-[#292457] font-titillium">Hebben docenten technische kennis nodig?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2">
                <p className="text-lg text-gray-700 leading-relaxed font-extra-light ml-9">
                  Nee. We trainen je team en leveren software die intuïtief is, inclusief blijvende support.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center">
                  <HelpCircle className="text-[#6ECBF5] mr-3 flex-shrink-0" size={24} />
                  <span className="text-xl font-bold text-[#292457] font-titillium">Past VR binnen bestaande lesplannen?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2">
                <p className="text-lg text-gray-700 leading-relaxed font-extra-light ml-9">
                  Ja — vaak wordt VR zelfs gebruikt om lesdoelen juist krachtiger te maken.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center">
                  <HelpCircle className="text-[#6ECBF5] mr-3 flex-shrink-0" size={24} />
                  <span className="text-xl font-bold text-[#292457] font-titillium">Heb je een speciale ruimte of netwerk nodig?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2">
                <p className="text-lg text-gray-700 leading-relaxed font-extra-light ml-9">
                  Meestal volstaat een standaard lokaal met goede WiFi. Wij adviseren in de inrichting en techniek.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Section 11: Other sectors */}
      <section className="bg-[#F6F3FF] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-[#292457] mb-8 text-center font-titillium">
            XR in andere sectoren
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed font-extra-light text-center">
            Bekijk ook de mogelijkheden van VR en AR in andere sectoren.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button variant="outline" className="border-[#292457] text-[#292457] hover:bg-[#292457] hover:text-white p-4 h-auto text-left justify-start font-extra-light">Zorg</Button>
            <Button variant="outline" className="border-[#292457] text-[#292457] hover:bg-[#292457] hover:text-white p-4 h-auto text-left justify-start font-extra-light">Publieke sector </Button>
            <Button variant="outline" className="border-[#292457] text-[#292457] hover:bg-[#292457] hover:text-white p-4 h-auto text-left justify-start font-extra-light">Entertainment</Button>
            <Button variant="outline" className="border-[#292457] text-[#292457] hover:bg-[#292457] hover:text-white p-4 h-auto text-left justify-start font-extra-light">Industrie</Button>
            <Button variant="outline" className="border-[#292457] text-[#292457] hover:bg-[#292457] hover:text-white p-4 h-auto text-left justify-start font-extra-light">
              XR in het bedrijfsleven
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;