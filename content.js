/* =====================================================================
   HIER PFLEGST DU ALLES – die index.html musst du nie anfassen.

   Text ändern:        einfach den Text zwischen den Anführungszeichen ändern.
   Neues Projekt/Labor: einen Block in PROJEKTE kopieren und ausfüllen.
   Bilder & Videos:    Datei in den Ordner images/ legen und beim Projekt
                       unter "bilder" eintragen:
                         { src: "images/aufbau.jpg", caption: "Messaufbau" },
                         { src: "images/clip.mp4", poster: "images/clip.jpg", caption: "Test" },
                       Dateien, die es nicht gibt, blendet die Seite aus.
   Parallax-Bilder:    unter PARALLAX bei "bild" eine eigene Datei eintragen,
                       sonst zeichnet die Seite ein Schaltbild.
   Was du nicht brauchst: leer lassen ("" oder []).
   ===================================================================== */

const SITE = {
  vorname: "Alexander",
  nachname: "Assmann",
  rolle: "Elektrotechnik-Student (B.Eng.) mit IT-Ausbildung",
  hochschule: "Technische Hochschule Georg Agricola, Bochum",

  // Wonach suchst du? Steht ganz oben, das lesen Recruiter zuerst.
  status: "Offen für Werkstudentenstelle",
  verfuegbar: "Zum nächstmöglichen Zeitpunkt (unter Berücksichtigung meiner aktuellen Kündigungsfrist)",                       // z. B. "ab März 2027"

  pitch: "Ich arbeite am liebsten dort, wo Elektronik, Steuerung und Software zusammenkommen: von der Siebensegmentanzeige am Mikrocontroller bis zur Förderbandstrecke an der S7-1500.",

  foto: "images/portrait.jpg",          // optional: Foto im Typenschild
  lebenslauf: "images/lebenslauf.pdf",  // optional: PDF in images/ legen, sonst ""

  ueberMich: [
    "Elektrotechnikstudent mit abgeschlossener Ausbildung zum Informationstechnischen Assistenten und Fachhochschulreife. Laborpraxis habe ich in Gebäudeautomation, Digitaltechnik, Mikrocontrollertechnik, Messtechnik, Automatisierungstechnik und elektrischen Maschinen gesammelt.",
    "Ich möchte mein technisches Wissen beruflich anwenden und vertiefen. Neben dem Studium arbeite ich seit 2021 und kenne den Alltag mit Kunden, Teams und Zeitdruck.",
  ],
  // Typenschild neben dem Text – Zeilen beliebig ändern
  typenschild: [
    ["Name", "Alexander Assmann"],
    ["Typ", "B.Eng. Elektrotechnik"],
    ["Hochschule", "THGA Bochum"],
    ["Ausbildung", "Informationstechnischer Assistent"],
    ["Schwerpunkte", "Automatisirungstechnik"],
    ["Sprachen", "Deutsch, Russisch (Muttersprache), Englisch B2"],
    ["Standort", "Bochum"],
  ],

  kontakt: {
    mail: "alexander.assmann.arbeit@gmail.com",
    links: [   // nur Einträge mit href werden angezeigt
      { label: "LinkedIn", text: "linkedin.com/in/…", href: "" },
      { label: "GitHub",   text: "github.com/…",      href: "" },
    ],
    standort: "Bochum, Deutschland",
  },
};

/* ---------------- Parallax-Bänder zwischen den Abschnitten ----------------
   art: "ladder" | "pcb" | "wave" | "motor" | "gate"   (wird gezeichnet, wenn bild leer ist) */
const PARALLAX = [
  { art: "ladder", bild: "", titel: "Laborpraxis als Prüfungsvorleistung.", text: "Viele Studienmodule umfassen neben den Vorlesungen verpflichtende Laborpraktika als Prüfungsvorleistung (PVL). Pro Modul sind drei bis sieben Versuche eigenständig vorzubereiten, im Labor durch ein Antestat nachzuweisen, praktisch durchzuführen und wissenschaftlich zu dokumentieren. Mehrere Praktika können parallel stattfinden. Erst nach Bestehen sämtlicher Versuche erfolgt die Zulassung zur jeweiligen Klausur. Alle in diesem Portfolio dokumentierten Praktika habe ich erfolgreich abgeschlossen." },
  { art: "motor",  bild: "", titel: "Frequenz runter, Drehzahl runter, Drehmoment bleibt.", text: "Das Prinzip des U/f-Betriebs am Frequenzumrichter. Ausprobieren unter Werkbank." },
];

/* ---------------- Projekte und Laborversuche ----------------
   typ:  "Projekt" oder "Labor"  (daraus entstehen die Filter-Knöpfe)
   demo: verknüpft mit einem Messplatz: "logik" | "gleichrichter" | "maschine" | ""   */
const PROJEKTE = [
  {
    typ: "Projekt", titel: "Wetterstation mit Raspberry Pi", jahr: "Ausbildung", bereich: "IT / Raspberry Pi",
    tags: ["Raspberry Pi", "Sensorik", "Webseite"],
    kurz: "Wetter- und Sensordaten erfasst und auf einer selbst gebauten Webseite dargestellt.",
    text: "Schulische Projektarbeit am Emschertal Berufskolleg: Wetter- und Sensordaten mit einem Raspberry Pi erfasst und die Messwerte über eine selbst erstellte Webseite dargestellt.",
    specs: [["Umfeld", "Informationstechnischer Assistent"], ["Hardware", "Raspberry Pi"], ["Ergebnis", "Webseite zur Messwertdarstellung"]],
    bilder: [
      { src: "images/wetterstation-1.mp4", poster: "images/wetterstation-1.jpg", caption: "Windmesser in Drehung" },
      { src: "images/wetterstation-2.mp4", poster: "images/wetterstation-2.jpg", caption: "Aufbau mit Schalenanemometer" },
      { src: "images/wetterstation-3.mp4", poster: "images/wetterstation-3.jpg", caption: "Elektronik: Arduino, Breadboard, Raspberry Pi" },
    ],
    link: null,   // oder { text: "Quellcode auf GitHub", href: "https://…" }
    demo: "",
  },
  {
    typ: "Labor", titel: "SPS und Automatisierungstechnik", jahr: "Labor", bereich: "Steuerungstechnik / Sensorik",
    tags: ["S7-1500", "TIA Portal", "FUP", "PROFIBUS", "HMI", "PT100"],
    kurz: "S7-1500 programmiert, Barcodescanner per PROFIBUS angebunden, Förderband am HMI-Panel bedient.",
    text: "Im Modul Automatisierungstechnik beschäftigte ich mich mit dem Zusammenspiel von Sensorik, Aktorik sowie pneumatischen und hydraulischen Systemen. In praktischen Laborversuchen arbeitete ich mit der Siemens SIMATIC S7-1500 und dem TIA Portal. Zu den Aufgaben gehörten die Programmierung von Steuerungsfunktionen, die Anbindung eines Barcodescanners über PROFIBUS sowie die Visualisierung und Bedienung einer Förderbandstrecke über ein HMI-Panel. Darüber hinaus untersuchte ich unterschiedliche Sensortypen, darunter PT100-Temperatursensoren, und deren Einsatz in automatisierten Anlagen.",
    specs: [["SPS und Software", "Siemens S7-1500, TIA Portal, FUP"], ["Kommunikation und HMI", "PROFIBUS, Barcodescanner, SIMATIC HMI"], ["Systemtechnik", "Sensorik, Aktorik, Pneumatik, Hydraulik"]],
    bilder: [{ src: "images/automatisirung laufband.jpg", caption: "SPS-gesteuerte Förderbandstrecke mit HMI-Visualisierung und Sensorüberwachung." },
      { src: "images/sps scanner.jpg", caption: "Programmierung von einem Scanner mittels TIA Portal" },
    ],
  },
  {
    typ: "Labor", titel: "Elektrische Maschinen", jahr: "Labor", bereich: "Antriebstechnik",
    tags: ["Asynchronmaschine", "Frequenzumrichter", "Drehmoment"],
    kurz: "Asynchronmaschinen vermessen, Frequenzumrichter untersucht, Verluste bestimmt.",
    text: "Im Modul Elektrische Maschinen lag ein Schwerpunkt auf der Untersuchung eines KEB-KOMBIVERT-Frequenzumrichters an einer Asynchronmaschine. Dabei parametrierte ich den Umrichter über die Geräteschnittstelle und einen PC, untersuchte Drehzahl-Drehmoment-Kennlinien sowie den Einfluss der Boost-Einstellung und analysierte Spannungs- und Stromverläufe mit dem Oszilloskop. Weitere Laborversuche behandelten die Wirkungsgradbestimmung nach dem Einzelverlustverfahren, doppelt gespeiste Asynchronmaschinen und verschiedene Schaltgruppen von Drehstromtransformatoren.",
    specs: [["Maschinen", "Asynchronmaschinen, doppelt gespeiste Asynchronmaschinen"], ["Messung", "Drehmomentmessungen"], ["Antriebstechnik", "Frequenzumrichter"], ["Verfahren", "Einzelverlustverfahren"]],
    bilder: [{ src: "images/drehstromtransformator.jpg", caption: "Im Praktikum untersuchte ich verschiedene Schaltgruppen von Drehstromtransformatoren (Stern, Dreieck und Zickzack) sowie deren Betriebsverhalten bei symmetrischer und unsymmetrischer Belastung durch Leerlauf- und Kurzschlussversuche." },
      { src: "images/frequenzumrichter.jpg", caption: "Laboraufbau zur Untersuchung eines Frequenzumrichters (KEB KOMBIVERT) mit einer Asynchronmaschine zur Analyse von Drehzahl, Drehmoment und Betriebskennlinien." },
    ],
  },
  {
    typ: "Labor", titel: "Messtechnik", jahr: "Labor", bereich: "Messtechnik",
    tags: ["Oszilloskop", "Messbrücke", "Brückengleichrichter"],
    kurz: "Netzwerke, Messbrücken und Gleichrichterschaltungen aufgebaut und mit dem Oszilloskop vermessen.",
    text: "Im Rahmen verschiedener Laborversuche untersuchte ich elektrische Netzwerke, den Stromfluss in Schaltungen sowie die Funktionsweise von Gleichrichterschaltungen. Dabei beschäftigte ich mich unter anderem mit einem Brückengleichrichter aus vier Dioden, der Wechselspannung in pulsierende Gleichspannung umwandelt. Weitere praktische Untersuchungen umfassten Messbrückenschaltungen sowie Messungen mit dem Oszilloskop.",
    specs: [["Praktikum", "Elektrische Netzwerke und Gleichrichterschaltungen"], ["Gleichrichtung", "Brückengleichrichter mit vier Dioden"], ["Messverfahren", "Messbrücken, Oszilloskop, Strom- und Spannungsmessungen"]],
    bilder: [{ src: "images/messtechnik.jpg", caption: "Versuchsaufbau Wheatstonesche Messbrücke" },],
  },
  {
    typ: "Labor", titel: "Mikroprozessortechnik", jahr: "Labor", bereich: "Mikrocontroller / µC",
    tags: ["AT89C51CC03", "MAX7219", "Siebensegment"],
    kurz: "Achtstellige Siebensegmentanzeige am MAX7219 mit Uhrzeit und Zug-Animation angesteuert.",
    text: "Im Modul Mikroprozessortechnik arbeitete ich mit dem Mikrocontroller AT89C51CC03 und programmierte verschiedene Anwendungen in µC. Eine Laboraufgabe umfasste die Ansteuerung einer achtstelligen Siebensegmentanzeige über den MAX7219. Hierfür implementierte ich die bitweise Datenübertragung, konfigurierte die Steuerregister und entwickelte Funktionen zur Uhrzeitanzeige sowie zur Animation eines Zuges. Die Auswahl der Anzeigefunktionen erfolgte über ein serielles Menü.",
    specs: [["Controller", "AT89C51CC03"], ["Programmiersprache", "µC"], ["Laboraufgabe", "MAX7219, Uhrzeitanzeige, ICE-Animation"]],
    bilder: [ { src: "images/mikro.jpg", caption: "Versuchsaufbau mit AT89C51CC03 und MAX7219" },
  { src: "images/mikroprozessortechnikundcode.jpg", caption: "Programmierung und Test der Anzeigesteuerung" },],
  },
  {
    typ: "Labor", titel: "Digitaltechnik I · Logik", jahr: "Labor", bereich: "Digitale Schaltungen",
    tags: ["Boolesche Algebra", "KV-Diagramm", "Gatter"],
    kurz: "Logische Funktionen mit Boolescher Algebra und KV-Diagrammen beschrieben und vereinfacht.",
    text: "Digitale Schaltungen und logische Funktionen untersucht. Boolesche Algebra und Karnaugh-Veitch-Diagramme genutzt, um Schaltungsfunktionen zu beschreiben und zu vereinfachen.",
    specs: [["Grundlagen", "Boolesche Algebra"], ["Methode", "KV-Diagramme"], ["Praxis", "Digitale Schaltungen"]],
    bilder: [{ src: "images/digitaltechnik.jpg", caption: "Mit boolescher Algebra entworfene 4-Bit-Komparatorschaltung zum Vergleich zweier Binärzahlen auf größer, kleiner oder gleich." },
      { src: "images/digitaltechnik 1.jpg", caption: "Erweiterte Komparatorschaltung mit zusätzlichem Freigabeeingang (Enable) zur gezielten Aktivierung des Größenvergleichs zweier Binärzahlen." },
    ],
  },
  {
    typ: "Labor", titel: "Digitaltechnik II · VHDL", jahr: "Labor", bereich: "VHDL / Zustandsautomaten",
    tags: ["VHDL", "Moore", "Mealy", "Medwedew"],
    kurz: "Siebensegmentanzeigen in VHDL angesteuert, Moore-, Mealy- und Medwedew-Automaten untersucht.",
    text: "Im Praktikum Digitaltechnik II entwickelte und programmierte ich digitale Schaltungen in VHDL mit Quartus II auf einem FPGA-Board. Zu den Aufgaben gehörten der Entwurf von Komparatoren und Subtrahierwerken, die Implementierung eines Johnson-Zählers sowie die binäre Modulo-2-Polynommultiplikation. Dabei arbeitete ich mit Wahrheitstabellen, KV-Diagrammen und der Darstellung von Ergebnissen über LEDs und Siebensegmentanzeigen.",
    specs: [["Sprache", "VHDL"], ["Anwendung", "Siebensegmentanzeigen"], ["Modelle", "Moore, Mealy, Medwedew"]],
    bilder: [{ src: "images/VHDL programmierung auf ALTERA platte .jpg", caption: "Implementierung und Funktionstest einer selbst entwickelten VHDL-Schaltung auf dem DE2-115-FPGA-Board." },],
  },
  {
    typ: "Labor", titel: "Bauelemente und Schaltungstechnik", jahr: "Labor", bereich: "Elektronische Bauteile",
    tags: ["Transistor", "Diode", "Operationsverstärker", "Kippschaltung"],
    kurz: "Transistoren, Dioden, RC-Generatoren, Operationsverstärker und Kippschaltungen untersucht.",
    text: "Im Praktikum Bauelemente und Schaltungstechnik untersuchte ich das Verhalten elektronischer Bauelemente sowie den Aufbau und die Funktionsweise verschiedener Schaltungen. Schwerpunkte waren Transistoren, Dioden, RC-Generatoren, Operationsverstärker sowie bistabile, astabile und monostabile Kippschaltungen. Dabei führte ich elektrische Messungen durch und beschäftigte mich mit der Schaltungssimulation in LTspice.",
    specs: [["Bauelemente", "Transistoren, Dioden"], ["Schaltungen", "RC-Generatoren, Kippschaltungen"], ["Praxis", "Verhalten von Bauteilen und Schaltungen untersucht"]],
    bilder: [{ src: "images/bauelemente-schaltung.jpg", caption: "Eigenständiger Laboraufbau zur Untersuchung transistorbasierter Kippschaltungen mit diskreten Bauelementen." },
      { src: "images/ICs.jpg", caption: "IC Vorlesung" },
    ],
  },
  {
    typ: "Labor", titel: "Gebäudeautomation · DALI und ETS", jahr: "Labor", bereich: "Gebäude- und Lichtautomation",
    tags: ["DALI", "KNX", "ETS 5", "ETS 6"],
    kurz: "Lichtsteuerung und Alarmfunktionen in Modellwohnungen automatisiert.",
    text: "Im Gebäudeautomationslabor Lichtsteuerungen automatisiert und Alarmfunktionen in Modellwohnungen untersucht. Mit DALI gearbeitet und in ETS 5 sowie ETS 6 unter anderem Zeitfunktionen für Jalousien und Schalter eingestellt.",
    specs: [["Praxis", "Lichtsteuerung, Alarmfunktionen"], ["Werkzeuge", "DALI, ETS 5, ETS 6"], ["Versuche", "Jalousien, Schalter, Zeitsteuerung"]],
    bilder: [ { src: "images/digitalSTROM raumaufteilung bedienelemente.png", caption: "digitalSTROM Raumaufteilung und Bedienelemente" },
    { src: "images/digitalSTROM.png", caption: "digitalSTROM Funktionstest der Panikbeleuchtung" },
    { src: "images/Dali verkabelung.jpg", caption: "Eigenständige Verkabelung" },
    { src: "images/Dali.jpg", caption: "RGB-Lichtsteuerung – Einstellung der Lichtfarbe Blau" },
    { src: "images/Dali gelb.jpg", caption: "RGB-Lichtsteuerung – Erzeugung der Lichtfarbe Gelb durch additive Farbmischung" },
    { src: "images/dmx.jpg", caption: "Farben einstellung und bewegung von moving heads" },
    ],
  },
  
{
  typ: "Labor",titel: "Programmierung · C",jahr: "Labor",bereich: "C-Programmierung",
  tags: ["C", "Code::Blocks"],
  kurz: "Entwicklung und Test von C-Funktionen zur Verarbeitung und Auswertung von Flugplatzdaten.",
  text: "Im Programmierpraktikum entwickelte ich in C verschiedene Funktionsbausteine für eine Virtual-Radar-Anwendung. Dabei arbeitete ich mit Zeichenketten, strukturierten Datentypen und Zeigern. Zu den Aufgaben gehörten die Verarbeitung von Flugplatzdaten, die Berechnung geografischer Entfernungen, die Modularisierung von Funktionen sowie das Einlesen von Textdateien.",
  specs: [["Programmiersprache", "C · Code::Blocks"],["Schwerpunkte", "Zeichenketten · Strukturen · Zeiger"],["Praktische Anwendung", "Datenverarbeitung · Entfernungsberechnung · Datei-E/A"]],
  bilder: [{src: "images/praktikum progra.jpg",caption: "Praktisches C-Programmiertestat: Eigenständige Programmierung und Erläuterung einer Aufgabe zur Zeichenkettenverarbeitung ohne Hilfsmittel."}]
},
{
    typ: "Projekt", titel: "Elektronik und PC-Hardware in der Freizeit", jahr: "Freizeit", bereich: "Handwerkliche Grundlagen",
    tags: ["Löten", "PC-Bau", "Fehlersuche"],
    kurz: "PCs gebaut, Steckdosen getauscht, Löten gelernt und Mainboard-Reparaturen verfolgt.",
    text: "In meiner Freizeit beschäftige ich mich mit Computerhardware und Elektrotechnik. Zu meinen praktischen Erfahrungen zählen der eigenständige Zusammenbau von PC-Systemen, der Austausch von Steckdosen sowie selbst erlernte Lötgrundlagen. Darüber hinaus interessiere ich mich für die Reparatur von Laptop-Mainboards und Grafikkarten. Durch Reparaturvideos erhalte ich Einblicke in verschiedene Methoden der Fehlersuche und Elektronikreparatur.",
    specs: [["Tätigkeit", "Einfache Lötarbeiten"], ["Anwendung", "Leitungen verbinden"], ["Niveau", "Grundkenntnisse"]],
    bilder: [{src: "images/löten.png",caption: "Löten von zwei Kabeln"},
      {src: "images/eigenreperatur.jpg",caption: "Private Reparaturarbeiten an einem Haushaltsgerät mit Demontage und Untersuchung mechanischer Komponenten im Trommelbereich."},
      {src: "images/eigenreperatur2.jpg",caption: ""},
    ],
  },
];

/* ---------------- Werdegang (neueste zuerst) ----------------
   typ: "Studium" | "Ausbildung" | "Job" | "Praktikum" | "Sonstiges" */
const WERDEGANG = [
  { typ: "Studium", zeitraum: "Aktuell", titel: "B.Eng. Elektrotechnik", ort: "Technische Hochschule Georg Agricola, Bochum",
    text: "Labore in Automatisierungstechnik, Digitaltechnik, Mikroprozessortechnik, Messtechnik, Gebäudeautomation und elektrischen Maschinen." },
  { typ: "Ausbildung", zeitraum: "Abgeschlossen", titel: "Informationstechnischer Assistent, Fachhochschulreife", ort: "Emschertal Berufskolleg",
    text: "Während meiner Ausbildung beschäftigte ich mich mit objektorientierter Programmierung in Java, SQL-Datenbanken einschließlich Abfragen, Triggern und Benutzerverwaltung sowie den Grundlagen der IT-Sicherheit. Weitere praktische Inhalte waren der Aufbau einfacher elektronischer Schaltungen auf Steckbrettern und erste Erfahrungen mit Arduino. Als Projektarbeit entwickelte ich eine Raspberry-Pi-Wetterstation mit einer selbst erstellten Webseite." },
];

/* ---------------- Kenntnisse (jede Zeile wird eine Gruppe) ----------------
   farbe: "amber" | "green" | "blue" | "red" | "grey" */
const KENNTNISSE = [
  { gruppe: "Automatisierung", farbe: "amber", items: ["Siemens S7-1500", "TIA Portal", "FUP", "PROFIBUS", "SIMATIC HMI", "DALI", "KNX ETS 5", "ETS 6", "PT100", "Sensorik", "Aktorik", "Pneumatik", "Hydraulik"] },
  { gruppe: "Elektrische Maschienen", farbe: "red", items: ["Asynchronmaschine", "Doppelt gespeist", "Frequenzumrichter", "Drehmomentmessung", "Einzelverlustverfahren"] },
  { gruppe: "Elektronik und Messtechnik", farbe: "green", items: ["Oszilloskop", "Messbrücken", "Brückengleichrichter", "Schaltungsaufbau", "Operationsverstärker", "RC-Generatoren", "Kippschaltungen", "Löten"] },
  { gruppe: "Digital und Mikrocontroller", farbe: "blue", items: ["Boolesche Algebra", "KV-Diagramme", "VHDL", "Zustandsautomaten", "AT89C51CC03", "MAX7219"] },
  { gruppe: "Software", farbe: "grey", items: ["Quartus II","C", "C++", "Java", "SQL / Firebird", "MATLAB", "Simulink"] },
  { gruppe: "IT", farbe: "grey", items: ["PC-Aufbau und Fehlersuche", "Windows", "Linux", "Raspberry Pi", "Arduino"] },
];
