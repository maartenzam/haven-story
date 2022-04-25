var config = {
    style: 'mapbox://styles/rope/cl2eof07k000114qtzvdp5tcf/draft',
    accessToken: 'pk.eyJ1Ijoicm9wZSIsImEiOiJjajEyaGcxbW8wMDZnMndrMzk5Z3E4MmN4In0.Fp9RqKgp4GgSnfK076V1Fw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'equalEarth',
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    header: {
        nl: {
            title: 'De weg naar een wereldhaven',
            subtitle: 'Hier kan nog een subtitle komen',
            byline: 'Aangeboden door xxxxxx',
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
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
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
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
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
            alignment: 'right',
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
                //speed: 2, // make the flying slow
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
                   layer: 'ports-01ktls',
                   opacity: 0.7,
                   strokeOpacity: 1,
                   duration: 500
                }
           ],
           onChapterExit: [
                {
                    layer: 'ports-01ktls',
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
                   layer: 'havengebied-5djnsq-line',
                   opacity: 1,
                   strokeOpacity: 1,
                   duration: 500
                },
                {
                    layer: 'havengebied-5djnsq-fill',
                    opacity: 0.15,
                    duration: 500
                 }
           ],
           onChapterExit: [
           ],
        },
        {
            id: 'port-bruges',
            alignment: 'fully',
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
                zoom: 14,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
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
            alignment: 'fully',
            hidden: false,
            title: {
                nl: 'Tegen 2050 bouwt Port of Antwerp-Bruges de CO2-uitstoot helemaal af',
                fr: 'Petit titre'
            },
            description: {
                nl: '1. Windparken op zee wekken groene stroom op. Lokale productie wordt aangevuld met buitenlandse import van waterstof en waterstofdragers. 2. Op de site van Zeebrugge wordt de groene waterstof overgeslagen en omgezet.  3. Via een uitgebreide pijplijninfrastructuur gaat het van Zeebrugge naar Antwerpen. 4. Het havengebied in Antwerpen is dé plaats waar de energietransitie vorm krijgt. Waterstof en waterstofdragers worden ingevoerd, opgeslagen en omgezet naar bouwstenen voor de chemische sector. 5. CO2 wordt getransporteerd van en naar de haven',
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
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
