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
            subtitle: 'Hier kan nog een subtitle komen',
            byline: 'Een initiatief van Port of Antwerp Bruges',
            footer: 'Footer content NL'
        },
        fr: {
            title: 'La route vers un port mondial',
            subtitle: 'Subtitre FR',
            byline: 'Offert par xxxx',
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
                nl: 'Titeltje',
                fr: 'Petit titre'
            },
            description: {
                nl: 'Met een totale doorvoer van 288 miljoen ton per jaar vormt Port of Antwerp-Bruges een belangrijk knooppunt in de wereldwijde handel. De centrale ligging, de uitgebreide verbindingen en uitstekende infrastructuur maken de haven met haar twee sites een optimale keuze voor iedereen die zaken wil doen',
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
                nl: 'Titeltje',
                fr: 'Petit titre'
            },
            description: {
                nl: 'Meer dan 80 procent van de wereldhandel verloopt vandaag via de zee. Geen enkele andere zeehaven ligt zo diep in Europa als Port of Antwerp-Bruges. Zo vormt ze de snelste en goedkoopste verbinding met het Europese achterland en is ze ook nog eens ecologisch een verantwoorde keuze.',
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
                    layer: 'data-driven-circles-labels',
                    opacity: 1,
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
                 }
            ]
        },
        {
            id: 'top15',
            alignment: 'left',
            hidden: false,
            title: {
                nl: 'Titeltje',
                fr: 'Petit titre'
            },
            description: {
                nl: 'De nieuwe fusiehaven wordt de grootste containerhaven in Europa (in tonnage) en komt in de wereldtop op de 13e plaats te staan. ’s Werelds drukste containerhavens liggen in Azië, met Shanghai op kop.',
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
                nl: 'Titeltje',
                fr: 'Petit titre'
            },
            description: {
                nl: 'Kerncijfers haven van Antwerpen',
                fr: 'Texte FR'
            },
            location: {
                center: [4.3450253,51.257196],
                zoom: 12,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'havengebied-line',
                   opacity: 1,
                   strokeOpacity: 1,
                   duration: 500
                },
                {
                    layer: 'havengebied-fill',
                    opacity: 0.15,
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
                nl: 'Titeltje',
                fr: 'Petit titre'
            },
            description: {
                nl: 'Kerncijfers haven van Zeebrugge',
                fr: 'Texte FR'
            },
            location: {
                center: [3.2102606,51.3301086],
                zoom: 13,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ports-together',
            alignment: 'fully',
            hidden: false,
            title: {
                nl: 'Titeltje',
                fr: 'Petit titre'
            },
            description: {
                nl: 'Port of Antwerp-Bruges beschikt over een uitstekende infrastructuur voor alle vormen van transport en goederen, snel en efficiënt en duurzaam naar, van en in de havensites. Deepsea double call, Binnenvaart, Spoorweg, Pijpleidingen, E34 snelweg',
                fr: 'Texte FR'
            },
            bounds: [[2.8, 50.7],[5, 51.5]],
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
            id: 'outro',
            alignment: 'full',
            hidden: false,
            title: {
                nl: 'Tegen 2050 bouwt Port of Antwerp-Bruges de CO2-uitstoot helemaal af',
                fr: 'Petit titre'
            },
            description: {
                nl: 'Tekst NL',
                fr: 'Texte FR'
            },
            image: './../assets/ports-stroomschema.png',
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
        }
    ]
};
