/* ==========================================================================
   config.js: EVERYTHING ABOUT THE CLIENT LIVES IN THIS FILE.
   Client: Eden Villa (Eden Tours Ltd), Belle Mare, Mauritius.
   Facts come from the old site edentourltd.com. Lines marked ESEMPIO / SAMPLE
   or CONFIRM are placeholders to check with the client before launch.

   - type: "accommodation" (rooms, per night). The template can also run "tour" or "rental".
   - Text is written { it: "...", en: "..." }. "languages" decides what visitors see.
   - Leave a value empty ("") or delete a list item to hide it. Set
     enabled: false on a section to remove it.
   - Prices are in euros (currency.base). Visitors can switch to rupees or dollars.
   - Photos: img("unsplash-id", alt) for Unsplash, or img("assets/photos/x.jpg", alt).
   ========================================================================== */
/* Demo only: full dates counted from today. For real ones write the dates: ["2026-12-20", "2027-01-03"] */
function soon(inDays, nights) { const d = (n) => new Date(Date.now() + n * 864e5).toISOString().slice(0, 10); return [d(inDays), d(inDays + nights)]; }
function img(id, alt) { return { src: id.includes('/') ? id : `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=70`, alt: alt || '' }; }
/* A WhatsApp link with a message ready to send (used by the tour photos) */
function wa(text) { return "https://wa.me/393478442855?text=" + encodeURIComponent(text); }

window.SITE = {

  /* ---------- 1. The business ---------- */
  type: "accommodation",
  name: "Eden Villa",
  legalName: "Eden Tours Ltd",
  tagline: { it: "Piccolo hotel di famiglia ed escursioni nel centro di Belle Mare, a 70 metri dalla spiaggia.", en: "A small family hotel and day tours in the centre of Belle Mare, 70 metres from the beach." },
  logo: { image: "", mark: "E", text: "Eden Villa" },

  /* ---------- 2. Brand ---------- */
  colors: {
    primary: "#173B2F",  // deep tropical green
    accent:  "#C0502E",  // hibiscus red: "Prenota", highlights
    dark:    "#0B1E17",
    light:   "#F3EADB",  // sand
  },
  fonts: { heading: "Instrument Serif", headingWeights: "400", headingFallback: "Georgia, serif", body: "Hanken Grotesk", bodyWeights: "400;500;600;700", script: "Caveat", scriptWeights: "500;600" },
  darkMode: true,
  languages: ["en", "it"],   // the High pack has two languages: English (the default) and Italian for Eden's guests
  defaultLanguage: "en",
  timeZone: "Indian/Mauritius",

  currency: {
    base: "EUR",                     // prices below are in euros
    rates: { MUR: 52, USD: 1.08 },   // 1 euro in rupees and dollars. Update now and then
    default: "EUR",
    secondary: "",
  },

  /* ---------- the motion layer (js/fx.js) ---------- */
  effects: {
    enabled: true,
    webgl: true,         // the hero video drawn in 3D: water drift, ripples under the finger
    seaLine: 0.45,
    scrollScenes: true,
    smoothScroll: true,
    cursor: true,
  },

  /* ---------- 3. Contact (from edentourltd.com) ---------- */
  contact: {
    phone: "+39 347 844 2855",
    whatsapp: "393478442855",   // CONFIRM: the old site lists this as a phone number only; check it has WhatsApp (also in wa() above)
    whatsappMessage: { it: "Ciao Eden Villa, vorrei informazioni per un soggiorno.", en: "Hello Eden Villa, I would like to ask about a stay." },
    email: "edentourltd@yahoo.com",
    responseTime: { it: "Ti rispondiamo in italiano, inglese, tedesco, spagnolo o francese.", en: "We reply in Italian, English, German, Spanish or French." },
    street: { it: "Centro di Belle Mare, di fronte alla stazione di polizia", en: "Belle Mare village centre, opposite the police station" },
    city: "Belle Mare",
    region: "Flacq",
    postalCode: "",
    country: { it: "Mauritius", en: "Mauritius" },
    countryCode: "MU",
    lat: -20.1905, lng: 57.7645,   // CONFIRM the exact pin
    mapEmbed: "https://www.google.com/maps?q=Belle+Mare+Police+Station+Mauritius&z=16&output=embed",
    mapsLink: "",
    // Google Business profile. CONFIRM: replace both with the hotel's own profile and its "write a review" link
    googleBusiness: "https://www.google.com/maps/search/?api=1&query=Eden+Villa+Belle+Mare+Mauritius",
    googleReview: "https://www.google.com/maps/search/?api=1&query=Eden+Villa+Belle+Mare+Mauritius",
  },
  hours: null,
  social: { facebook: "https://www.facebook.com/Eden-Tours-607553109400207", instagram: "", tripadvisor: "", google: "", tiktok: "", youtube: "" },

  /* ---------- 4. Google and link previews ---------- */
  seo: {
    title: { it: "Eden Villa | Hotel ed escursioni a Belle Mare, Mauritius", en: "Eden Villa | Hotel and day tours in Belle Mare, Mauritius" },
    description: { it: "Piccolo hotel di famiglia a 70 m dalla spiaggia di Belle Mare: piscina, ristorante, B&B o mezza pensione ed escursioni. Prenota in diretta, senza intermediari.", en: "A small family hotel 70 m from Belle Mare beach: pool, restaurant, B&B or half board and day tours. Book direct, no middlemen." },
    image: "https://images.unsplash.com/photo-1634972312739-d7237018e06a?auto=format&fit=crop&q=70",
    favicon: "assets/favicon.svg",
    schemaType: "Hotel",
    priceRange: "€60 – €130",
    siteUrl: "https://edentourltd.com/",   // CONFIRM the final address. Also in sitemap.xml and robots.txt
  },

  /* ---------- 5. Booking requests ---------- */
  form: { endpoint: "" },  // e.g. "https://formspree.io/f/abcdwxyz". Empty = the request opens the visitor's email app
  booking: {
    sendVia: "both",     // "both", "endpoint" or "whatsapp"
    depositPct: 0,       // CONFIRM the deposit policy; e.g. 30 shows "30% deposit to confirm". 0 hides it
    defaultUnits: 7,     // nights pre-filled in the search bar
    refPrefix: "EV",
    commissionPct: 18,   // what booking sites add, for the "you keep" receipt on the home page; 0 hides it
    times: [],
    childAge: "",
  },

  /* ---------- 6. Rooms ----------
     ESEMPIO / SAMPLE: the old site does not list room types or prices. These three come from the real room photos; confirm names and prices.
     price: per room per night, bed & breakfast, in euros. seasons: other prices between two dates ("MM-DD").
     capacity: most guests. minUnits: shortest stay.
     features: up to 4 show on cards (icons: bed, users, snow, wave, wifi, coffee, pool, home, lock, leaf...) */
  listings: [
    {
      id: "superior", name: { it: "Camera Superior", en: "Superior Room" }, badge: { it: "La più ampia", en: "Most space" },
      short: { it: "Letto matrimoniale, vasca da bagno e posto per un bambino.", en: "A double bed, a bathtub and space for a child." },
      price: 85, capacity: 3, minUnits: 3,
      booked: [soon(4, 6), soon(18, 5), soon(33, 8), soon(55, 7)],   // nights taken, crossed out in the calendars: [first night, day they leave]
      seasons: [{ name: { it: "Natale e Capodanno", en: "Christmas and New Year" }, from: "12-20", to: "01-06", price: 130 }, { name: { it: "Alta stagione", en: "High season" }, from: "11-01", to: "04-30", price: 100 }, { name: { it: "Inverno australe", en: "Southern winter" }, from: "06-01", to: "08-31", price: 75 }],
      images: [img("assets/photos/eden-superior-room.jpg", { it: "Camera Superior con letto matrimoniale", en: "Superior Room with a double bed" }), img("assets/photos/eden-pool.jpg", { it: "La piscina dell'hotel", en: "The hotel pool" }), img("assets/photos/eden-pool-terrace.jpg", { it: "Lettini a bordo piscina", en: "Loungers by the pool" })],
      features: [{ icon: "bed", label: { it: "Matrimoniale", en: "Double bed" } }, { icon: "users", label: { it: "Fino a 3", en: "Up to 3" } }, { icon: "home", label: { it: "Vasca", en: "Bathtub" } }, { icon: "wifi", label: { it: "Wi-Fi", en: "Wi-Fi" } }],
      description: [{ it: "La nostra camera più spaziosa, arredata con mobili etnici in bambù e tessuti decorati. Bagno privato con vasca, minibar, cassaforte e spazio per un lettino. Pochi passi e sei in piscina.", en: "Our most spacious room, furnished with ethnic bamboo pieces and decorated fabrics. A private bathroom with a bathtub, minibar, safe and room for a child's bed. A few steps and you are at the pool." }],
      amenities: [{ it: "Bagno privato con vasca", en: "Private bathroom with bathtub" }, { it: "Minibar", en: "Minibar" }, { it: "Cassaforte", en: "Safe" }, { it: "Asciugacapelli", en: "Hairdryer" }, { it: "Wi-Fi gratuito", en: "Free Wi-Fi" }, { it: "Frutta e acqua di benvenuto", en: "Welcome fruit and water" }],
    },
    {
      id: "double", name: { it: "Camera Doppia", en: "Double Room" }, badge: { it: "La più richiesta", en: "Most booked" },
      short: { it: "Luminosa e tranquilla, con letto matrimoniale e doccia.", en: "Bright and quiet, with a double bed and a shower." },
      price: 70, capacity: 2, minUnits: 3,
      booked: [soon(2, 5), soon(12, 4), soon(27, 9), soon(64, 6)],
      seasons: [{ name: { it: "Natale e Capodanno", en: "Christmas and New Year" }, from: "12-20", to: "01-06", price: 110 }, { name: { it: "Alta stagione", en: "High season" }, from: "11-01", to: "04-30", price: 85 }, { name: { it: "Inverno australe", en: "Southern winter" }, from: "06-01", to: "08-31", price: 60 }],
      images: [img("assets/photos/eden-double-room.jpg", { it: "Camera Doppia con letto matrimoniale", en: "Double Room with a double bed" }), img("assets/photos/eden-restaurant.jpg", { it: "Il ristorante", en: "The restaurant" }), img("assets/photos/eden-pool.jpg", { it: "La piscina dell'hotel", en: "The hotel pool" })],
      features: [{ icon: "bed", label: { it: "Matrimoniale", en: "Double bed" } }, { icon: "users", label: { it: "2 persone", en: "2 guests" } }, { icon: "home", label: { it: "Doccia", en: "Shower" } }, { icon: "wifi", label: { it: "Wi-Fi", en: "Wi-Fi" } }],
      description: [{ it: "Una camera nuova e semplice con mobili in bambù, bagno privato con box doccia e tutto quello che serve dopo una giornata al mare.", en: "A new, simple room with bamboo furniture, a private bathroom with a shower and everything you need after a day at the beach." }],
      amenities: [{ it: "Bagno privato con doccia", en: "Private bathroom with shower" }, { it: "Minibar", en: "Minibar" }, { it: "Cassaforte", en: "Safe" }, { it: "Asciugacapelli", en: "Hairdryer" }, { it: "Wi-Fi gratuito", en: "Free Wi-Fi" }],
    },
    {
      id: "twin", name: { it: "Camera Twin", en: "Twin Room" }, badge: "",
      short: { it: "Due letti singoli: per amici o per chi viaggia con un ragazzo.", en: "Two single beds: for friends, or a parent with an older child." },
      price: 70, capacity: 2, minUnits: 3,
      booked: [soon(7, 4), soon(21, 6), soon(41, 5)],
      seasons: [{ name: { it: "Natale e Capodanno", en: "Christmas and New Year" }, from: "12-20", to: "01-06", price: 110 }, { name: { it: "Alta stagione", en: "High season" }, from: "11-01", to: "04-30", price: 85 }, { name: { it: "Inverno australe", en: "Southern winter" }, from: "06-01", to: "08-31", price: 60 }],
      images: [img("assets/photos/eden-twin-room.jpg", { it: "Camera Twin con due letti", en: "Twin Room with two beds" }), img("assets/photos/eden-pool-terrace.jpg", { it: "Lettini a bordo piscina", en: "Loungers by the pool" }), img("assets/photos/eden-lobster.jpg", { it: "Aragosta dalla nostra cucina", en: "Lobster from our kitchen" })],
      features: [{ icon: "bed", label: { it: "Due letti", en: "Two beds" } }, { icon: "users", label: { it: "2 persone", en: "2 guests" } }, { icon: "snow", label: { it: "Aria condizionata", en: "Air-con" } }, { icon: "wifi", label: { it: "Wi-Fi", en: "Wi-Fi" } }],
      description: [{ it: "Due letti, tende calde e un'atmosfera tranquilla. Bagno privato, minibar e cassaforte come in tutte le nostre camere.", en: "Two beds, warm curtains and a calm feel. Private bathroom, minibar and safe, as in all our rooms." }],
      amenities: [{ it: "Bagno privato", en: "Private bathroom" }, { it: "Minibar", en: "Minibar" }, { it: "Cassaforte", en: "Safe" }, { it: "Asciugacapelli", en: "Hairdryer" }, { it: "Wi-Fi gratuito", en: "Free Wi-Fi" }],
    },
  ],

  /* Extras (prices from the old site unless marked). per: "booking" (once), "unit" (each night), "person", "personUnit" (each guest, each night) */
  extras: [
    { id: "halfboard", icon: "coffee", price: 25, per: "personUnit", label: { it: "Mezza pensione", en: "Half board" }, text: { it: "Cena nel nostro ristorante ogni sera (ESEMPIO: prezzo da confermare)", en: "Dinner in our restaurant every evening (SAMPLE price, to confirm)" } },
    { id: "airport", icon: "car", price: 100, per: "person", label: { it: "Transfer aeroporto andata e ritorno", en: "Airport transfer, both ways" }, text: { it: "€50 a persona per tratta", en: "€50 per person each way" } },
    { id: "cerfs", icon: "anchor", price: 40, per: "person", label: { it: "Escursione all'Île aux Cerfs", en: "Île aux Cerfs day trip" }, text: { it: "Barca privata, cascata e barbecue con bevande", en: "Private boat, the waterfall and a barbecue with drinks" } },
    { id: "lobster", icon: "fish", price: 50, per: "person", label: { it: "Aragosta all'Île aux Cerfs", en: "Lobster on Île aux Cerfs" }, text: { it: "In aggiunta al barbecue", en: "Added to the barbecue" } },
    { id: "xmas", icon: "heart", price: 50, per: "person", label: { it: "Cenone della Vigilia", en: "Christmas Eve dinner" }, text: { it: "24 dicembre", en: "24 December" } },
    { id: "nye", icon: "sparkle", price: 50, per: "person", label: { it: "Cenone di Capodanno con aragosta", en: "New Year's Eve dinner with lobster" }, text: { it: "31 dicembre", en: "31 December" } },
  ],

  /* Policies shown on every room page */
  policies: {
    checkIn: "", checkOut: "",   // CONFIRM check-in and check-out times
    items: [
      { icon: "coffee", title: { it: "B&B o mezza pensione", en: "B&B or half board" }, text: { it: "La colazione è sempre inclusa. Con la mezza pensione ceni anche nel nostro ristorante.", en: "Breakfast is always included. With half board you also dine in our restaurant." } },
      { icon: "users", title: { it: "Bambini", en: "Children" }, text: { it: "Gratis fino a 2 anni, metà prezzo da 2 a 12 anni, prezzo adulto oltre i 12.", en: "Free under 2, half price from 2 to 12, adult price over 12." } },
      { icon: "heart", title: { it: "Benvenuto", en: "Welcome" }, text: { it: "Frutta fresca e mezzo litro d'acqua in camera all'arrivo.", en: "Fresh fruit and half a litre of water in your room on arrival." } },
      { icon: "calendar", title: { it: "Feste", en: "Festive season" }, text: { it: "Cenone della Vigilia e di Capodanno con aragosta: €50 a persona ciascuno.", en: "Christmas Eve and New Year's Eve dinner with lobster: €50 per person each." } },
    ],
  },

  /* ---------- 7. Pages, section by section ---------- */
  sections: {
    hero: {
      eyebrow: { it: "Belle Mare · Mauritius", en: "Belle Mare · Mauritius" },
      title: { it: "Mauritius da vivere, a 70 metri dal mare", en: "Mauritius to live, 70 metres from the sea" },
      text: { it: "Un piccolo hotel di famiglia nel centro di Belle Mare, con piscina, ristorante, escursioni nostre e qualcuno che parla la tua lingua.", en: "A small family hotel in the centre of Belle Mare, with a pool, a restaurant, our own day tours and someone who speaks your language." },
      video: "assets/video/lagoon.mp4",   // a stock lagoon loop (see assets/video/CREDITS.md). Empty = the photos below take turns
      poster: "assets/video/lagoon-poster.jpg",
      videoTall: "assets/video/lagoon-tall.mp4",
      posterTall: "assets/video/lagoon-tall-poster.jpg",
      images: [img("1634972312739-d7237018e06a", "A beach in Mauritius with the mountains behind"), img("1513415277900-a62401e19be4", "Le Morne and its lagoon from the air"), img("1513415563383-4e580ed27a46", "The south-west coast of Mauritius from the air")],
    },
    ticker: {
      words: [{ it: "Belle Mare", en: "Belle Mare" }, { it: "70 metri dal mare", en: "70 metres from the sea" }, { it: "Mezza pensione", en: "Half board" }, { it: "Escursioni", en: "Day tours" }, { it: "Si parla italiano", en: "Italian spoken" }, { it: "Mauritius", en: "Mauritius" }],
    },
    day: {      // "A day at": hour by hour, from what the hotel organises. tone = the background colour while that hour is on screen
      eyebrow: { it: "Una giornata a Eden Villa", en: "A day at Eden Villa" },
      title: { it: "Dalla prima nuotata all'ultimo ballo", en: "From the first swim to the last dance" },
      items: [
        { time: "07:30", tone: "#F7E1C6", image: img("1634972312739-d7237018e06a", "The beach in the morning"), title: { it: "Settanta metri e sei in acqua", en: "Seventy metres and you're in the water" }, text: { it: "La laguna di Belle Mare è calma al mattino. Ci arrivi a piedi.", en: "The Belle Mare lagoon is calm in the morning. You walk there." } },
        { time: "09:00", tone: "#FBEBD6", image: img("assets/photos/eden-pool.jpg", { it: "La piscina di Eden Villa", en: "The Eden Villa pool" }), title: { it: "Colazione e piscina", en: "Breakfast and the pool" }, text: { it: "Frutta fresca, caffè e un tuffo prima di partire.", en: "Fresh fruit, coffee and a dip before you head out." } },
        { time: "10:30", tone: "#CFE9EA", image: img("assets/photos/tour-ile-aux-cerfs.jpg", { it: "L'Île aux Cerfs dall'alto", en: "Île aux Cerfs from the air" }), title: { it: "In barca verso l'Île aux Cerfs", en: "By boat to Île aux Cerfs" }, text: { it: "Barca privata, la cascata e un barbecue in spiaggia.", en: "A private boat, the waterfall and a beach barbecue." } },
        { time: "18:00", tone: "#E9A274", image: img("1580629844914-374f3b707fe5", "Palms against a golden sunset"), title: { it: "Aperitivo al bar", en: "Aperitivo at the bar" }, text: { it: "Un cocktail sotto il tetto in legno mentre il cielo diventa rosa.", en: "A cocktail under the timber roof while the sky turns pink." } },
        { time: "20:00", tone: "#142630", image: img("assets/photos/eden-lobster.jpg", { it: "Aragosta", en: "Lobster" }), title: { it: "Cena a tema e danza locale", en: "Themed dinner and local dance" }, text: { it: "Cucina mauriziana, aragosta nelle sere speciali, e la séga al ritmo dei tamburi.", en: "Mauritian cooking, lobster on special nights, and séga to the beat of the drums." } },
      ],
    },
    whyDirect: {
      eyebrow: { it: "Prenota con noi, non su un portale", en: "Book with us, not a booking site" },
      title: { it: "Stessa camera. Senza intermediari.", en: "Same room. No middlemen." },
      text: { it: "I portali di prenotazione ci chiedono una commissione e la scaricano sul prezzo. Prenota qui e resta a te.", en: "Booking sites charge us a commission and pass it on to you. Book here and it stays with you." },
      items: [
        { icon: "tag", title: { it: "Prezzo migliore", en: "Best price" }, text: { it: "Nessuna commissione di portale.", en: "No booking-site commission." } },
        { icon: "wa", title: { it: "Parliamo italiano", en: "We speak Italian" }, text: { it: "E altre quattro lingue.", en: "And four other languages." } },
        { icon: "car", title: { it: "Transfer ed escursioni", en: "Transfers and tours" }, text: { it: "Organizziamo tutto noi.", en: "We arrange it all." } },
        { icon: "heart", title: { it: "Benvenuto in camera", en: "A welcome in your room" }, text: { it: "Frutta fresca e acqua.", en: "Fresh fruit and water." } },
      ],
    },
    intro: {
      eyebrow: { it: "Benvenuti", en: "Welcome" },
      title: { it: "Una piccola perla nel centro di Belle Mare", en: "A small gem in the centre of Belle Mare" },
      text: [
        { it: "Eden Villa è un hotel di recente costruzione, a conduzione familiare, a 70 metri dalla spiaggia. Le camere sono nuove, con mobili etnici in bambù; ci sono la piscina, il ristorante e il bar.", en: "Eden Villa is a recently built, family-run hotel 70 metres from the beach. The rooms are new, with ethnic bamboo furniture; there is a pool, a restaurant and a bar." },
        { it: "Siamo anche un'agenzia italiana a Mauritius: escursioni, mercati, cene a tema, barbecue in spiaggia, spettacoli di danza locale, serate al casinò di Port Louis, noleggio auto e corsi di sub PADI. Ci pensiamo noi.", en: "We are also an Italian agency in Mauritius: day tours, markets, themed dinners, beach barbecues, local dance shows, casino evenings in Port Louis, car hire and PADI diving courses. We take care of it." },
      ],
      signature: { it: "Eliana Maria Busetto, Front Office", en: "Eliana Maria Busetto, Front Office" },
      images: [img("assets/photos/eden-pool-terrace.jpg", { it: "La piscina con lettini e ombrellone", en: "The pool with loungers and a parasol" }), img("assets/photos/eden-restaurant.jpg", { it: "Il ristorante sotto il tetto in legno", en: "The restaurant under the timber roof" })],
    },
    featured: { eyebrow: { it: "Soggiorna con noi", en: "Stay with us" }, title: { it: "Le camere", en: "The rooms" }, count: 3 },
    parallax: { image: img("1580629844914-374f3b707fe5", "Palm trees against a golden sunset"), quote: { it: "“Ottimi i tour, camera stupenda e situazione da sogno.”", en: "“Great tours, a beautiful room and a dreamy setting.”" }, by: { it: "Antonio, dall'Italia", en: "Antonio, from Italy" } },
    reviews: {
      eyebrow: { it: "Dicono di noi", en: "What guests say" },
      title: { it: "Ospiti felici", en: "Happy guests" },
      // From a photo on the old site (2016): Booking.com Guest Review Award 8.4 and a TripAdvisor Certificate of Excellence. CONFIRM the current score
      summary: { rating: 8.4, best: 10, source: { it: "Booking.com · Certificato di Eccellenza TripAdvisor", en: "Booking.com · TripAdvisor Certificate of Excellence" } },
      links: [{ name: "Facebook", icon: "facebook", url: "https://www.facebook.com/Eden-Tours-607553109400207" }],
      // From the old site. Add 4 to 6 real reviews copied from Booking.com or TripAdvisor (first name, country, month, source)
      items: [
        { name: "Antonio Rossi", from: { it: "Italia", en: "Italy" }, date: "", source: "", text: { it: "Ottimi i tour, camera stupenda e situazione da sogno.", en: "Great tours, a beautiful room and a dreamy setting." } },
      ],
    },
    location: {
      eyebrow: { it: "Dove siamo", en: "Location" },
      title: { it: "Nel centro di Belle Mare", en: "In the centre of Belle Mare" },
      text: { it: "Zona residenziale con negozi, bar, ristoranti e boutique. La stazione di polizia è di fronte e il tempio indù Ram Mandir è a pochi passi.", en: "A residential area with shops, bars, restaurants and boutiques. The police station is opposite and the Ram Mandir Hindu temple is a short walk away." },
      facts: [
        { icon: "wave", value: { it: "70 m", en: "70 m" }, label: { it: "dalla spiaggia", en: "from the beach" } },
        { icon: "plane", value: { it: "45 min", en: "45 min" }, label: { it: "dall'aeroporto", en: "from the airport" } },
        { icon: "anchor", value: { it: "15 min", en: "15 min" }, label: { it: "dalle barche per l'Île aux Cerfs", en: "to the Île aux Cerfs boats" } },
        { icon: "bag", value: { it: "Sotto casa", en: "On the doorstep" }, label: { it: "negozi, bar e ristoranti", en: "shops, bars and restaurants" } },
      ],
      howToGetHere: [
        { icon: "car", title: { it: "Transfer aeroporto:", en: "Airport transfer:" }, text: { it: "€50 a persona per tratta. L'autista ti aspetta agli arrivi; aggiungilo alla prenotazione.", en: "€50 per person each way. The driver waits at arrivals; add it to your booking." } },
        { icon: "compass", title: { it: "In auto:", en: "By car:" }, text: { it: "siamo nel centro di Belle Mare, di fronte alla stazione di polizia. Possiamo prenotarti un'auto a noleggio.", en: "we are in the centre of Belle Mare, opposite the police station. We can book you a rental car." } },
      ],
    },
    instagram: {   // used here for Eden's own day tours: each photo opens WhatsApp with a message about that tour
      eyebrow: { it: "Le nostre escursioni", en: "Our day tours" }, title: { it: "Mauritius da vivere", en: "Mauritius to live" },
      lead: { it: "Quattro giornate organizzate da noi. Tocca una foto e chiedici il prezzo per il tuo gruppo.", en: "Four days out that we run ourselves. Tap a photo to ask the price for your group." },
      handle: { it: "Chiedi un'escursione", en: "Ask about a tour" }, url: wa("Ciao Eden Villa, vorrei informazioni sulle escursioni."),
      images: [
        { ...img("1673659541305-9d7f5d8ff876", "Port Louis harbour with the mountains behind"), caption: { it: "i colori del Nord", en: "the colours of the North" }, href: wa("Ciao Eden Villa, vorrei informazioni sull'escursione I colori del Nord.") },
        { ...img("1704759928716-7657e3ad7615", "Chamarel waterfall in the forest"), caption: { it: "il selvaggio Sud", en: "the wild South" }, href: wa("Ciao Eden Villa, vorrei informazioni sull'escursione Il selvaggio Sud.") },
        { ...img("assets/photos/tour-ile-aux-cerfs.jpg", { it: "L'Île aux Cerfs dall'alto", en: "Île aux Cerfs from the air" }), caption: { it: "Île aux Cerfs, da €40", en: "Île aux Cerfs, from €40" }, href: wa("Ciao Eden Villa, vorrei informazioni sull'escursione all'Île aux Cerfs.") },
        { ...img("assets/photos/tour-gris-gris.jpg", { it: "Le scogliere di Gris Gris", en: "The Gris Gris cliffs" }), caption: { it: "la natura del Sud", en: "nature in the south" }, href: wa("Ciao Eden Villa, vorrei informazioni sull'escursione Una giornata nella natura.") },
      ],
    },
    gallery: {
      images: [img("assets/photos/eden-pool.jpg", { it: "La piscina di Eden Villa", en: "The Eden Villa pool" }), img("assets/photos/eden-superior-room.jpg", { it: "Camera Superior", en: "Superior Room" }), img("assets/photos/eden-restaurant.jpg", { it: "Il ristorante", en: "The restaurant" }), img("assets/photos/eden-double-room.jpg", { it: "Camera Doppia", en: "Double Room" }), img("assets/photos/eden-pool-terrace.jpg", { it: "Lettini a bordo piscina", en: "Loungers by the pool" }), img("assets/photos/eden-twin-room.jpg", { it: "Camera Twin", en: "Twin Room" }), img("assets/photos/eden-lobster.jpg", { it: "Aragosta dalla nostra cucina", en: "Lobster from our kitchen" }), img("1634972312739-d7237018e06a", { it: "Una spiaggia di Mauritius", en: "A beach in Mauritius" }), img("assets/photos/tour-ile-aux-cerfs.jpg", { it: "L'Île aux Cerfs dall'alto", en: "Île aux Cerfs from the air" }), img("1704759928716-7657e3ad7615", { it: "Le cascate di Chamarel", en: "Chamarel falls" }), img("1673659541305-9d7f5d8ff876", { it: "Port Louis", en: "Port Louis" }), img("1580629844914-374f3b707fe5", { it: "Tramonto tra le palme", en: "Sunset through the palms" })],
    },
    faq: {
      eyebrow: { it: "Prima di partire", en: "Before you come" }, title: { it: "Domande frequenti", en: "Questions, answered" },
      items: [
        { q: { it: "Bed & breakfast o mezza pensione?", en: "Bed & breakfast or half board?" }, a: { it: "Scegli tu. La colazione è sempre inclusa; la mezza pensione si aggiunge negli extra.", en: "Your choice. Breakfast is always included; add half board in the extras." } },
        { q: { it: "Quanto pagano i bambini?", en: "What do children pay?" }, a: { it: "Gratis fino a 2 anni, metà prezzo da 2 a 12 anni, prezzo adulto dai 12 anni.", en: "Free under 2, half price from 2 to 12, adult price from 12." } },
        { q: { it: "Organizzate il transfer dall'aeroporto?", en: "Can you arrange an airport transfer?" }, a: { it: "Sì: €50 a persona per tratta, con autista agli arrivi.", en: "Yes: €50 per person each way, with a driver at arrivals." } },
        { q: { it: "Organizzate altri servizi?", en: "Do you arrange anything else?" }, a: { it: "Sì: noleggio auto, altri hotel, cena tipica con una famiglia mauriziana, matrimoni tradizionali, corsi di sub PADI e underwater walking.", en: "Yes: car hire, other hotels, a Mauritian dinner with a local family, traditional weddings, PADI diving courses and underwater walking." } },
        { q: { it: "Cosa succede a Natale e Capodanno?", en: "What happens at Christmas and New Year?" }, a: { it: "Cenone della Vigilia e cenone di Capodanno con aragosta, €50 a persona ciascuno.", en: "Christmas Eve dinner and New Year's Eve dinner with lobster, €50 per person each." } },
      ],
    },
    finalCta: {
      title: { it: "Mauritius ti aspetta", en: "Mauritius is waiting" },
      text: { it: "Scegli le date, guarda il prezzo e prenota in diretta: ti rispondiamo in italiano.", en: "Pick your dates, see the price and book direct." },
      image: img("1513415563383-4e580ed27a46", "Le Morne and its lagoon from the air"),
    },
    pageHeads: {
      listings: { title: { it: "Le camere", en: "The rooms" }, text: { it: "Tre tipi di camera, tutte nuove, a 70 metri dal mare.", en: "Three kinds of room, all new, 70 metres from the sea." }, image: img("1634972312739-d7237018e06a", "") },
      gallery: { title: { it: "Galleria", en: "Gallery" }, text: { it: "L'hotel, la cucina e l'isola.", en: "The hotel, the kitchen and the island." }, image: img("1513415563383-4e580ed27a46", "") },
      reviews: { title: { it: "Recensioni", en: "Reviews" }, text: { it: "8,4 su 10 su Booking.com.", en: "8.4 out of 10 on Booking.com." }, image: img("1580629844914-374f3b707fe5", "") },
      contact: { title: { it: "Contatti e posizione", en: "Contact and location" }, text: { it: "Una domanda prima di prenotare? Scrivici in italiano.", en: "A question before you book? Write to us." }, image: img("1513415277900-a62401e19be4", "") },
    },
  },

  credit: { name: "WebLuxe", url: "https://webluxe.github.io/WebLuxe/" },

  /* ---------- Admin panel (/admin/). Changes are saved to data/site.js in this GitHub repository ---------- */
  admin: { repo: "WebLuxe/HighTier_EdenVilla", branch: "main" },
  inbox: { url: "" },   // the Google Sheet inbox: paste the web-app address from admin/inbox.gs here (see README). Empty = requests go by email/WhatsApp only
  payments: {   // a "Pay the deposit" button after a booking request. {amount} {currency} {ref} are filled in
    link: "",   // e.g. "https://paypal.me/edenvilla/{amount}{currency}" or a Stripe / bank payment page. Empty hides the button
    note: { en: "We confirm availability before you pay; if your dates are taken, the deposit is refunded in full.", it: "Confermiamo la disponibilità prima del pagamento; se le date non sono libere, l'acconto viene rimborsato per intero." },
  },

  /* ---------- 8. Demo mode. Set enabled: false when the site goes live ---------- */
  demo: {
    enabled: true,
    note: { it: "Proposta di nuovo sito per Eden Villa, a cura di WebLuxe. Prezzi e disponibilità sono di esempio.", en: "New website proposal for Eden Villa by WebLuxe. Prices and availability are samples." },
    studioWhatsapp: "",
    examples: null,   // the tour / car-rental switch is for WebLuxe's own demo; off for Eden
    tiers: [
      { label: { it: "Essenziale", en: "Essentials" }, url: "https://webluxe.github.io/LowTier_EdenVilla/" },
      { label: { it: "Soggiorni", en: "Stays" }, url: "https://webluxe.github.io/MidTier_EdenVilla/" },
      { label: { it: "Prenotazioni", en: "Bookings" }, url: "https://webluxe.github.io/HighTier_EdenVilla/", current: true },
    ],
  },

  /* ---------- 9. All the small words ---------- */
  text: {
    it: {
      // ----- parole usate su tutti i modelli WebLuxe (menu, pulsanti, messaggi) -----
      home: "Home", skip: "Vai al contenuto", menu: "Menu", switchLang: "Cambia lingua", toggleTheme: "Passa al tema chiaro o scuro",
      explore: "Esplora", footerNav: "Link del piè di pagina", contactTitle: "Contatti", hoursTitle: "Orari", rights: "Tutti i diritti riservati.", websiteBy: "Sito web di",
      whatsappUs: "Scrivici su WhatsApp", phone: "Telefono", email: "Email", address: "Indirizzo", chatNow: "Scrivici adesso",
      closed: "Chiuso", today: "oggi", tomorrow: "domani", openUntil: "Aperto ora, fino alle {time}", closedOpens: "Ora chiuso. Apre {day} alle {time}",
      days: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"], daysShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
      introSkip: "Salta", close: "Chiudi", ok: "OK", prev: "Precedente", next: "Successivo", slide: "Vai alla foto {n}", showMap: "Mostra la mappa", mapTitle: "Mappa con la nostra posizione",
      formSending: "Invio in corso…", formSent: "Grazie. Il messaggio è stato inviato e ti risponderemo presto.", formError: "Spiacenti, il messaggio non è partito. Chiamaci al {phone}.",
      formMailto: "Si è aperta la tua app email con il messaggio. Premi invia per completare.", formDemoDone: "Demo: non è stato inviato nulla.",
      demoLabel: "Informazioni su questa demo", demoBadge: "Demo", demoNote: "Sito di esempio di WebLuxe. Prezzi e disponibilità sono di prova.",
      demoTitle: "Questa è una demo", demoWa: "Sul sito vero, qui si apre WhatsApp con questo messaggio pronto da inviare:", demoTel: "Sul sito vero, qui parte la chiamata:",
      demoMail: "Sul sito vero, qui si apre un'email all'attività.", demoForm: "Sul sito vero, l'attività riceve questo:",
      demoStudio: "Voglio un sito così", demoStudioMsg: "Ciao WebLuxe, ho visto la demo di {site} e vorrei un sito simile.",
      reviewOnGoogle: "Lascia una recensione su Google", seeOnGoogle: "Vedi su Google Maps", nfTitle: "Questa pagina è andata al mare", nfText: "L'indirizzo forse contiene un errore, oppure la pagina è stata spostata. Trovi tutto nella home page.", nfHome: "Vai alla home page",
      // ----- questo modello -----
      navGallery: "Galleria", navReviews: "Recensioni", navContact: "Contatti", breadcrumb: "Sei qui", currency: "Cambia valuta",
      bookNow: "Prenota", bookDirect: "Prenota in diretta", from: "Da", checkAvailability: "Verifica disponibilità", readAll: "Leggi tutte le recensioni", ratingOf: "{n} stelle su 5",
      basedOn: "su {n} recensioni", seeUsOn: "Seguici su {site}", howToGetHere: "Come arrivare", directions: "Indicazioni", viewFull: "Vedi a schermo intero", allPhotos: "Tutte le {n} foto",
      responseTime: "Risposte rapide", prices: "Prezzi", period: "Periodo", standardRate: "Tariffa base", policies: "Buono a sapersi", noPayNow: "Nessun pagamento adesso: prima confermiamo la disponibilità.",
      estTotal: "Totale indicativo", pickDates: "Scegli le date per vedere il prezzo", pickDate: "Scegli una data per vedere il prezzo", outAfterIn: "La data di fine deve essere dopo quella di inizio.", seasonalRates: "tariffe stagionali",
      back: "Indietro", continue: "Continua", bookTitle: "Richiedi la tua prenotazione", bookLead: "Tre passaggi veloci. Nessun pagamento adesso: verifichiamo la disponibilità e ti rispondiamo al più presto.",
      stepExtras: "Extra", stepDetails: "I tuoi dati", time: "Orario di partenza", less: "Uno in meno", more: "Uno in più", free: "Gratis",
      availNote: "Verifichiamo la disponibilità e ti rispondiamo con il prezzo finale e come confermare.", extrasTitle: "Rendilo speciale",
      per_booking: "una volta", per_unit: "a {unit}", per_person: "a {person}", per_personUnit: "a {person}, a {unit}",
      yourDetails: "I tuoi dati", fName: "Nome e cognome", fEmail: "Email", fPhone: "Telefono / WhatsApp", withCode: "(con prefisso)", fCountry: "Paese", fMessage: "Qualcosa da dirci?", optional: "(facoltativo)",
      sendRequest: "Invia la richiesta", confirmWa: "Conferma su WhatsApp", yourBooking: "La tua prenotazione", dates: "Date", details: "Dettagli",
      depositLine: "Acconto del {pct}% per confermare: {amount}", ref: "Riferimento {ref}", doneTitle: "Grazie, richiesta ricevuta",
      doneSent: "Verifichiamo la disponibilità e ti scriviamo via email al più presto.", doneWa: "Premi invia su WhatsApp e ti confermiamo al più presto.",
      next1: "Ti confermiamo le date e il prezzo finale.", next2: "Confermi con un acconto, con bonifico o carta.", next3: "Ti mandiamo le indicazioni e organizziamo il transfer.", backHome: "Torna alla home",
      waIntro: "Ciao {name}, vorrei prenotare:", waFollow: "Ciao, a proposito della mia richiesta {ref}:", bookSubject: "Nuova richiesta di prenotazione dal sito {name}",
      cursorView: "Vedi", cursorDrag: "Trascina", onSites: "Sui portali", bookedHere: "Prenotato qui", youKeep: "Risparmi", commissionNote: "I portali di prenotazione aggiungono circa il {pct}% di commissioni.",
      demoTypeLabel: "Vedi questo modello per", demoType_accommodation: "un hotel o una villa", demoType_tour: "escursioni", demoType_rental: "noleggio auto",
      addDate: "Scegli", nNights: "{n} notti", payNow: "Paga ora {amount}",
      calTitle: "Scegli le date", calPickIn: "Tocca il giorno di arrivo", calPickOut: "Ora tocca il giorno di partenza (min. {n} notti)", calFree: "Libero", calBooked: "Completo",
      calClear: "Cancella date", calDone: "Fatto", calMin: "Da questo giorno il soggiorno minimo è di {n} notti.", calClash: "Alcune di queste notti sono al completo. Scegli altre date.", calPriceNote: "Prezzi a notte in {cur}",
      countries: ["Italia", "Svizzera", "Francia", "Germania", "Austria", "Spagna", "Belgio", "Regno Unito", "Paesi Bassi", "Mauritius", "La Riunione", "Sudafrica", "Stati Uniti", "Altro"],
      types: {
        accommodation: { items: "Camere", item: "Camera", unit: "notte", units: "notti", perUnit: "a notte", people: "Ospiti", person: "ospite", adults: "Ospiti", adult: "ospite", child: "bambino", children: "Bambini", checkIn: "Arrivo", checkOut: "Partenza", date: "Data", minUnits: "Soggiorno minimo: {n} notti.", tooMany: "Questa camera ospita fino a {n} persone.", seeAll: "Vedi tutte le {n}", amenities: "In camera", alsoLike: "Potrebbe piacerti anche", view: "Vedi la camera", sample: "{n} notti in {item}", step1: "Il tuo soggiorno", messageHint: "Età dei bambini, orario di arrivo, numero del volo…" },
      },
    },
    en: {
      // ----- words used on every WebLuxe template (menus, buttons, messages) -----
      home: "Home", skip: "Skip to content", menu: "Menu", switchLang: "Voir le site en français", toggleTheme: "Switch light or dark mode",
      explore: "Explore", footerNav: "Footer links", contactTitle: "Contact", hoursTitle: "Opening hours", rights: "All rights reserved.", websiteBy: "Website by",
      whatsappUs: "Chat on WhatsApp", phone: "Phone", email: "Email", address: "Address", chatNow: "Chat with us now",
      closed: "Closed", today: "today", tomorrow: "tomorrow", openUntil: "Open now, until {time}", closedOpens: "Closed now. Opens {day} at {time}",
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      introSkip: "Skip", close: "Close", ok: "OK", prev: "Previous", next: "Next", slide: "Go to slide {n}", showMap: "Show the map", mapTitle: "Map showing our location",
      formSending: "Sending…", formSent: "Thank you. Your message has been sent and we will reply soon.", formError: "Sorry, the message could not be sent. Please call us on {phone}.",
      formMailto: "Your email app has opened with your message. Press send there to finish.", formDemoDone: "Demo: nothing was sent.",
      demoLabel: "About this demo", demoBadge: "Demo", demoNote: "Example website by WebLuxe. The business, prices and reviews are samples.",
      demoTitle: "This is a demo", demoWa: "On the real website, this opens WhatsApp with this message ready to send:", demoTel: "On the real website, this calls the business:",
      demoMail: "On the real website, this opens an email to the business.", demoForm: "On the real website, the business receives this:",
      demoStudio: "Get a site like this", demoStudioMsg: "Hello WebLuxe, I saw the {site} demo and would like a website like it.",
      reviewOnGoogle: "Review us on Google", seeOnGoogle: "See us on Google Maps", nfTitle: "This page has gone for a swim", nfText: "The address may have a typo, or the page has moved. Everything is still here on the home page.", nfHome: "Go to the home page",
      // ----- this template -----
      navGallery: "Gallery", navReviews: "Reviews", navContact: "Contact", breadcrumb: "You are here", currency: "Change currency",
      bookNow: "Book now", bookDirect: "Book direct", from: "From", checkAvailability: "Check availability", readAll: "Read all reviews", ratingOf: "{n} out of 5 stars",
      basedOn: "from {n} reviews", seeUsOn: "Follow us on {site}", howToGetHere: "How to get here", directions: "Get directions", viewFull: "View full screen", allPhotos: "All {n} photos",
      responseTime: "Quick replies", prices: "Prices", period: "Period", standardRate: "Standard rate", policies: "Good to know", noPayNow: "No payment now. We confirm availability first.",
      estTotal: "Estimated total", pickDates: "Choose your dates to see the price", pickDate: "Choose a date to see the price", outAfterIn: "The end date must be after the start date.", seasonalRates: "seasonal rates",
      back: "Back", continue: "Continue", bookTitle: "Request your booking", bookLead: "Three quick steps. Nothing is charged now: we check availability and reply as soon as possible.",
      stepExtras: "Extras", stepDetails: "Your details", time: "Departure time", less: "One less", more: "One more", free: "Free",
      availNote: "We check availability and reply with the final price and how to confirm.", extrasTitle: "Make it special",
      per_booking: "once", per_unit: "per {unit}", per_person: "per {person}", per_personUnit: "per {person}, per {unit}",
      yourDetails: "Your details", fName: "Full name", fEmail: "Email", fPhone: "Phone / WhatsApp", withCode: "(with country code)", fCountry: "Country", fMessage: "Anything we should know?", optional: "(optional)",
      sendRequest: "Send booking request", confirmWa: "Confirm on WhatsApp", yourBooking: "Your booking", dates: "Dates", details: "Details",
      depositLine: "{pct}% deposit to confirm: {amount}", ref: "Reference {ref}", doneTitle: "Thank you, request received",
      doneSent: "We are checking availability and will email you as soon as possible.", doneWa: "Press send in WhatsApp and we will confirm as soon as possible.",
      next1: "We confirm your dates and the final price.", next2: "You confirm with a deposit by bank transfer or card.", next3: "We send directions and arrange your transfer.", backHome: "Back to the home page",
      waIntro: "Hello {name}, I would like to book:", waFollow: "Hello, about my booking request {ref}:", bookSubject: "New booking request from the {name} website",
      cursorView: "View", cursorDrag: "Drag", onSites: "On booking sites", bookedHere: "Booked here", youKeep: "You keep", commissionNote: "Booking sites add around {pct}% in fees and commission.",
      demoTypeLabel: "See this template for", demoType_accommodation: "a hotel or villa", demoType_tour: "boat trips and tours", demoType_rental: "car rental",
      addDate: "Add date", nNights: "{n} nights", payNow: "Pay {amount} now",
      calTitle: "Choose your dates", calPickIn: "Tap your check-in day", calPickOut: "Now tap your check-out day (min. {n} nights)", calFree: "Available", calBooked: "Full",
      calClear: "Clear dates", calDone: "Done", calMin: "From this day the minimum stay is {n} nights.", calClash: "Some of those nights are full. Pick other dates.", calPriceNote: "Prices per night in {cur}",
      countries: ["Italy", "Switzerland", "France", "Germany", "Austria", "Spain", "Belgium", "United Kingdom", "Netherlands", "Mauritius", "Réunion", "South Africa", "United States", "Other"],
      types: {
        accommodation: { items: "Rooms", item: "Room", unit: "night", units: "nights", perUnit: "per night", people: "Guests", person: "guest", adults: "Guests", adult: "guest", child: "child", children: "Children", checkIn: "Check-in", checkOut: "Check-out", date: "Date", minUnits: "Minimum stay: {n} nights.", tooMany: "This room sleeps up to {n} guests.", seeAll: "See all {n}", amenities: "In the room", alsoLike: "You may also like", view: "See the room", sample: "{n} nights in the {item}", step1: "Your stay", messageHint: "Children's ages, arrival time, flight number…" },
        tour: { items: "Trips", item: "Trip", unit: "trip", units: "trips", perUnit: "per person", people: "People", person: "person", adults: "Adults", adult: "adult", child: "child", children: "Children", checkIn: "Date", checkOut: "", date: "Date", minUnits: "", tooMany: "This trip takes up to {n} people per booking.", seeAll: "See all {n} trips", amenities: "Included", alsoLike: "Other trips", view: "See the trip", sample: "{n} people on the {item}", step1: "Your trip", messageHint: "Hotel for pick-up, swimming level, celebrations…" },
        rental: { items: "Cars", item: "Car", unit: "day", units: "days", perUnit: "per day", people: "Drivers", person: "driver", adults: "Drivers", adult: "driver", child: "", children: "", checkIn: "Pick-up", checkOut: "Return", date: "Date", minUnits: "Minimum rental: {n} days.", tooMany: "Up to {n} drivers.", seeAll: "See all {n} cars", amenities: "Included", alsoLike: "Other cars", view: "See the car", sample: "{n} days with the {item}", step1: "Your rental", messageHint: "Flight number, delivery address, driver's age…" },
      },
    },
  },
};
