var config = {
    style: 'mapbox://styles/mediafin/cl2g9lxxj000v15nz6u1a94ld/draft',
    accessToken: 'pk.eyJ1IjoibWVkaWFmaW4iLCJhIjoiaTQ3REl2cyJ9.7A3ClfiCGzqieni6ui9TCA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'equalEarth',
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    header: {
        nl: {
            title: 'De weg naar een wereldhaven',
            subtitle: 'Fusiehaven zet België op de wereldkaart',
            //byline: 'Een initiatief van Port of Antwerp Bruges',
            footer: 'Realisatie door Content Republic - 2022'
        },
        fr: {
            title: 'La route vers un port mondial',
            subtitle: 'Subtitre FR',
            //byline: 'Offert par xxxx',
            footer: 'Footer content FR',
        }
    },
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Bronnen.',
    chapters: [
        {
            id: 'intro',
            alignment: 'fully',
            hidden: false,
            title: {
                nl: 'Poort tot de wereld',
                fr: 'Petit titre'
            },
            description: {
                nl: 'Met een doorvoer van 289 miljoen ton per jaar vormt Port of Antwerp-Bruges een belangrijk knooppunt in de wereldwijde handel. Haar centrale ligging met uitgebreide verbindingen en uitstekende infrastructuur maken de haven met haar twee sites een optimale keuze voor iedereen die internationaal zaken wil doen.',
                fr: 'Texte en francais'
            },
            location: {
                center: [5, 52],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            //Vlaanderen
            //bounds: [[2.54, 50.7],[5.9, 51.5]],
            bounds: [[2, 48.5],[7, 54]],
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 5000
                 }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'world-ports',
            alignment: 'center',
            hidden: false,
            title: {
                nl: 'Sterk verbonden met de wereld',
                fr: 'Petit titre'
            },
            description: {
                nl: 'Geen enkele zeehaven ligt zo diep in Europa. Daarmee vormt ze de snelste en goedkoopste verbinding met het Europese achterland. Maar met meer dan 300 lijndiensten en 800 bestemmingen is Port of Antwerp-Bruges verbonden is met alle continenten, van het westen tot het verre oosten.',
                fr: 'Texte FR'
            },
            location: {
                center: [0, 0],
                zoom: 1.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.5, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'data-driven-circles',
                    opacity: 0.7,
                    strokeOpacity: 1,
                    duration: 2000
                 },
                 {
                    layer: 'satellite',
                    opacity: 0.5,
                    duration: 5000
                 }

            ],
            onChapterExit: [
                 {
                     layer: 'data-driven-circles',
                     opacity: 0,
                     duration: 500
                 },
                 {
                    layer: 'data-driven-circles-labels',
                    opacity: 0,
                    duration: 500
                 },
                 {
                    layer: 'data-driven-circles-labels-fr',
                    opacity: 0,
                    duration: 500
                 }
            ]
        },
        {
            id: 'top15',
            alignment: 'left',
            hidden: false,
            title: {
                nl: 'Europeaan op lange Aziatische lijst',
                fr: 'Petit titre'
            },
            description: {
                nl: 'De haven huisvest de grootste chemische cluster in Europa, is de grootste haven voor overslag van voertuigen wereldwijd en staat in de top 15 van de grootste containerhavens in de wereld. Daarmee neemt Port of Antwerp-Bruges een opvallende plek in op de lijst van wereldhavens, die wordt gedomineerd door spelers in Azië, met Shanghai op kop.',
                fr: 'Texte FR'
            },
            location: {
                center: [0, 0],
                zoom: 1.5,
                pitch: 0,
                bearing: 0,
            },
            onChapterEnter: [
                {
                   layer: 'ports',
                   opacity: 0.7,
                   strokeOpacity: 1,
                   duration: 500
                },
                {
                    layer: 'ports-labels',
                    opacity: 1,
                    duration: 500
                 }
           ],
           onChapterExit: [
                {
                    layer: 'ports',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'ports-labels',
                    opacity: 0,
                    duration: 500
                 }
           ],
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: ''
        },
        {
            id: 'port-antwerp',
            alignment: 'fully',
            hidden: false,
            title: {
                nl: 'Antwerpen: bananen en staal',
                fr: 'Petit titre'
            },
            description: {
                nl: "<p>De site in Antwerpen beslaat 11.246 hectare, dat zijn 16.600 voetbalvelden, en daarop zijn 900 bedrijven gevestigd, goed voor 62.635 rechtstreekse banen. Dat levert een toegevoegde waarde van bijna 19 miljard euro op, goed voor 4,1 procent van het Belgische bbp.</p><p>In Antwerpen komen vooral producten aan als cacao, koffie, staal, boomstammen, papier, mout, bananen, alles in containers (tuinmeubelen, kleding, elektronica, bouwmaterialen, …), plastic pellets, medicijnen, vaccins, enz.</p>",
                fr: 'Texte FR'
            },
            location: {
                center: [4.27,51.27],
                zoom: 11.5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'havengebied-antwerpen-line',
                   opacity: 1,
                   strokeOpacity: 1,
                   duration: 500
                },
                {
                    layer: 'havengebied-antwerpen-fill',
                    opacity: 0.3,
                    duration: 500
                 },
                 {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 2000
                 }
           ],
           onChapterExit: [
           ],
        },
        {
            id: 'port-bruges',
            alignment: 'center',
            hidden: false,
            title: {
                nl: 'Zeebrugge: kiwi’s en auto’s',
                fr: 'Petit titre'
            },
            description: {
                nl: '<p>De site in Brugge beslaat 2.857 hectare, dat zijn 4.220 voetbalvelden, en daarop zijn 400 bedrijven gevestigd, goed voor 10.000 rechtstreekse banen. Dat levert een toegevoegde waarde van bijna 1,8 miljard euro op, goed voor 0,4 procent van het Belgische bbp.</p><p>In Zeebrugge komt 15 procent van het Europese gas aan. Verder ook: kiwi’s, auto’s, windturbines, verse vis, ferry- en cruiseverkeer</p>',
                fr: 'Texte FR'
            },
            location: {
                center: [3.2102606,51.3301086],
                zoom: 12,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'havengebied-zeebrugge-line',
                   opacity: 1,
                   strokeOpacity: 1,
                   duration: 500
                },
                {
                    layer: 'havengebied-zeebrugge-fill',
                    opacity: 0.3,
                    duration: 500
                 },
                 {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 2000
                 }
           ],
            onChapterExit: []
        },
        {
            id: 'ports-together',
            alignment: 'fully',
            hidden: false,
            title: {
                nl: 'Samen een enorme toegevoegde waarde',
                fr: 'Petit titre'
            },
            description: {
                nl: '<p>Port of Antwerp-Bruges beslaat 14.322 hectare, dat zijn 20.820 voetbalvelden, en daarop zijn 1.400 bedrijven gevestigd die 164.000 directe en indirecte banen opleveren. Samen levert dat een toegevoegde waarde van 20,8 miljard euro op, goed voor 4,5 procent van het Vlaamse bbp.</p><p>Port of Antwerp-Bruges beschikt over een unieke mulitmodale mix voor duurzaam goederenvervoer van, naar en in de beide havensites. Dat gaat zowel over zee, langs binnenwateren, estuaire vaart, spoorwegen, pijpleiding en over de weg.</p>',
                fr: 'Texte FR'
            },
            bounds: [[2.7, 50.7],[5, 51.5]],
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ports-together-2',
            alignment: 'fully',
            hidden: false,
            title: {
                nl: 'Tegen 2050 bouwt Port of Antwerp-Bruges de CO2-uitstoot volledig af',
                fr: 'Petit titre'
            },
            description: {
                nl: '',
                fr: 'Texte FR'
            },
            bounds: [[2.7, 50.7],[5, 51.5]],
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        /*{
            id: 'outro',
            alignment: 'full',
            hidden: false,
            title: {
                nl: 'Tegen 2050 bouwt Port of Antwerp-Bruges de CO2-uitstoot helemaal af',
                fr: 'Petit titre'
            },
            description: {
                nl: "1. Windparken op zee wekken groene stroom op. Naast de lokale productie komt daar de buitenlandse import van waterstof en waterstofdragers bij. 2. De site van Zeebrugge is belangrijk om groene waterstof over te slaan en om te zetten. 3. Via een uitgebreide pijplijninfrastructuur gaat ze van Zeebrugge naar Antwerpen. 3. Het havengebied in Antwerpen is dé plaats waar de energietransitie vorm krijgt. Het voert waterstof en waterstofdragers in, slaat ze op en zet ze om naar bouwstenen voor de chemische sector en voor het Europese hinterland. 4. Afgevangen CO2 wordt opgeslagen en getransporteerd van het hinterland en de chemische cluster in Antwerpen naar lege gasvelden in de Noordzee.",
                fr: 'Texte FR'
            },
            image: './images/ports-stroomschema.png',
            bounds: [[2.8, 50.7],[5, 51.5]],
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },*/
        {
            id: 'windfarm',
            alignment: 'center',
            hidden: false,
            title: {
                nl: 'Windenergie op zee',
                fr: 'Petit titre'
            },
            description: {
                nl: "Windparken op zee wekken groene stroom op. Op dit moment zijn er acht windparken op zee, goed voor 2,2 GW windenergie. De capaciteit breidt tegen 2030 uit tot 5,8 GW. De windenergie wordt aangevuld met buitenlandse import van waterstof en waterstofdragers.",
                fr: 'Texte FR'
            },
            //bounds: [[2.7, 51.5],[3.1, 51.74]],
            location: {
                center: [2.9, 51.62],
                zoom: 9,
                pitch: 45,
                bearing: 160,
                speed: 0.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'windturbines-0',
                opacity: 0.4,
                duration: 500
             },{
                layer: 'windturbines-1',
                opacity: 0.4,
                duration: 500
             },{
                layer: 'windturbines-2',
                opacity: 1,
                duration: 500
             },{
                layer: 'energycables',
                opacity: 0.4,
                duration: 500
             },],
            onChapterExit: []
        },
        {
            id: 'lng-terminal',
            alignment: 'center',
            hidden: false,
            title: {
                nl: 'Groene waterstofproductie',
                fr: 'Petit titre'
            },
            description: {
                nl: "De site van Zeebrugge is belangrijk om groene waterstof over te slaan en om te zetten. ",
                fr: 'Texte FR'
            },
            //bounds: [[2.7, 51.5],[3.1, 51.74]],
            location: {
                center: [3.2102606,51.3301086],
                zoom: 13.5,
                pitch: 45,
                bearing: 160,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pijleidingen',
            alignment: 'center',
            hidden: false,
            title: {
                nl: 'Verbonden via pijpleidingen',
                fr: 'Petit titre'
            },
            description: {
                nl: "Via een uitgebreide pijplijninfrastructuur gaat waterstof van Zeebrugge naar Antwerpen.",
                fr: 'Texte FR'
            },
            //bounds: [[2.7, 51.5],[3.1, 51.74]],
            location: {
                center: [4.27,51.27],
                zoom: 13,
                pitch: 70,
                bearing: 100,
                speed: 0.3
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'basf',
            alignment: 'center',
            hidden: false,
            title: {
                nl: 'Bouwstenen voor de industrie',
                fr: 'Petit titre'
            },
            description: {
                nl: "Het havengebied in Antwerpen is dé plaats waar de energietransitie vorm krijgt. Het voert waterstof en waterstofdragers in, slaat ze op en zet ze om naar bouwstenen voor de chemische sector en voor het Europese hinterland. Afgevangen CO2 wordt opgeslagen en getransporteerd van het hinterland en de chemische cluster in Antwerpen naar lege gasvelden in de Noordzee.",
                fr: 'Texte FR'
            },
            //bounds: [[2.7, 51.5],[3.1, 51.74]],
            location: {
                center: [4.30,51.31],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'outro',
            alignment: 'center',
            hidden: false,
            title: {
                nl: '',
                fr: 'Petit titre'
            },
            description: {
                nl: "De fusie van beide havens is een wereldprimeur, maar tegelijk noodzakelijk om de steile, duurzame ambities waar te kunnen maken: dé energiepoort naar Europa worden en klimaatneutraal zijn tegen 2050. Met dank aan de expertise en de complementariteit van beide havens. De blauwdruk voor een groene toekomst voor Antwerpen en Zeebrugge is klaar, de eerste stappen worden nu al gezet.",
                fr: 'Texte FR'
            },
            bounds: [[2.7, 50.7],[5, 51.5]],
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
