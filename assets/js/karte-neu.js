// Genealogie-Karte für pilzchronik.github.io
// Version 4.0 - Große Erweiterung: 23 neue Orte aus Band 1 & 2
// Stand: Februar 2026

document.addEventListener('DOMContentLoaded', function() {
    
    var mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    console.log('Initialisiere Karte v4.0...');
    
    var map = L.map('map');
    window.karteMap = map;
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    var lineColors = {
        'Pilz-Linie': '#e74c3c',
        'Eberstaller-Linie': '#3498db',
        'Tiroler Linie': '#2ecc71',
        'Zusammenführung': '#f39c12',
        'Sonstige': '#95a5a6'
    };

    function createCustomIcon(kategorie, isHof) {
        var color = lineColors[kategorie] || '#95a5a6';
        if (isHof) {
            return L.divIcon({
                className: 'custom-div-icon',
                html: '<div style="background-color: ' + color + '; width: 12px; height: 12px; border: 2px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.5); transform: rotate(45deg);"></div>',
                iconSize: [12, 12],
                iconAnchor: [6, 6]
            });
        }
        return L.divIcon({
            className: 'custom-div-icon',
            html: '<div style="background-color: ' + color + '; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.5);"></div>',
            iconSize: [14, 14],
            iconAnchor: [7, 7]
        });
    }

    var orte = [
        // === PILZ-LINIE ===
        // --- Sachsen ---
        {name: "Dörnthal", lat: 50.7339, lon: 13.3486, kategorie: "Pilz-Linie", region: "Sachsen", beschreibung: "Waldhufendorf aus dem 12. Jahrhundert, entstanden im Zuge der Freiberger Silberfunde. Stammort der ältesten bekannten Pilz-Vorfahren; hier lebte und wirkte Joseph Pültz, der gesicherte Stammvater.", ref: "Bd. 1, S. 29"},
        {name: "Olbernhau", lat: 50.6661, lon: 13.3381, kategorie: "Pilz-Linie", region: "Sachsen", beschreibung: "Die Stadt der sieben Täler, erstmals 1434 urkundlich erwähnt. Abraham Pilz (∗1591) heiratete hier; sein Sohn Michael wurde hier geboren.", ref: "Bd. 1, S. 28"},
        {name: "Blumenau", lat: 50.67018, lon: 13.29584, kategorie: "Pilz-Linie", region: "Sachsen", beschreibung: "Waldhufendorf nordwestlich von Olbernhau, Zentrum der Holzflößerei aus Böhmen. Maria Hengst, Ehefrau Abrahams, stammte von hier.", ref: "Bd. 1, S. 28"},
        {name: "Niederneuschönberg", lat: 50.66699, lon: 13.33097, kategorie: "Pilz-Linie", region: "Sachsen", beschreibung: "1655 auf gerodeten Exulantenböden gegründet. Die Pilz-Hauptlinie lebte hier von Michael (∗1617) bis Carl Gottlob (∗1738) – vier Generationen.", ref: "Bd. 1, S. 28"},
        {name: "Grünthal", lat: 50.65019, lon: 13.36731, kategorie: "Pilz-Linie", region: "Sachsen", beschreibung: "Sitz der historischen Saigerhütte, heute UNESCO-Welterbe der Montanregion Erzgebirge. Carl Gottlob Pilz (∗1738) arbeitete hier als Kupferhammerschmied – eine Dreifachkrise aus Wirtschaftseinbruch, Hochwasser und Hungersnot (1770–1772) gilt als wahrscheinlicher Auslöser seiner Auswanderung nach Kallich. <a href='https://pilzchronik.github.io/zeitleiste/' target='_blank'>→ Zeitleiste</a>", ref: "Bd. 1, S. 29"},
        {name: "Rothenthal", lat: 50.6342, lon: 13.3733, kategorie: "Pilz-Linie", region: "Sachsen", beschreibung: "1626 von böhmischen Exulanten gegründet, geprägt durch Hüttenwesen. Geburtsort von Friedrich August Pilz (∗1761), dem letzten sächsischen Vorfahren vor der Auswanderung.", ref: "Bd. 1, S. 29"},
        {name: "Pockau", lat: 50.704444, lon: 13.225556, kategorie: "Pilz-Linie", region: "Sachsen", beschreibung: "Geburtsort Maria Elisabeth Schreiber (Kekulé 257), um 1712.", ref: "Bd. 2, S. 51"},

        // --- Böhmen / Erzgebirge ---
        {name: "Kallich (Kalek)", lat: 50.5775, lon: 13.3219, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Bergdorf auf 700 m im Kreis Komotau, im 16. Jahrhundert von Bergleuten besiedelt, im Dreißigjährigen Krieg stark zerstört. Carl Gottlob Pilz wanderte hierher aus – erster Pilz auf böhmischem Boden nach Jahrzehnten in Sachsen.", ref: "Bd. 1, S. 32"},
        {name: "Schmiedeberg", lat: 50.4381, lon: 13.0536, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Vom Eisenerzbergbau und der Holzkohlegewinnung geprägt. Heimat der Familie Hofmann; 1872 brachte die Bahnlinie Komotau–Weipert wirtschaftlichen Aufschwung.", ref: "Bd. 1, S. 33"},
        {name: "Weipert", lat: 50.4922, lon: 13.0319, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Böhmische Grenzstadt im Erzgebirge. Geburtsort von Alois Johann Pilz (∗1876), dem Großvater; die Familie lebte hier nach der Auswanderung aus Sachsen.", ref: "Bd. 1, S. 34"},
        {name: "B. Wiesenthal", lat: 50.4394, lon: 13.0156, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Heirat Vinzenz Pilz & Franziska Gahler; beider Begräbnisort.", ref: "Bd. 1, S. 36"},
        {name: "Gottesgab", lat: 50.4097, lon: 12.9244, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Höchstgelegene Stadt Mitteleuropas. Familien Glaser und Gahler.", ref: "Bd. 1, S. 36"},
        {name: "Stolzenhain", lat: 50.4128, lon: 12.9789, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Hauptort der Förster-Generationen. Tod Vinzenz Pilz 1883 (Kekulé 8).", ref: "Bd. 1, S. 36"},
        {name: "Kupferberg", lat: 50.4214, lon: 13.1153, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Katholisch-politisches Casino (V.W. Pilz).", ref: "Bd. 1, S. 36"},
        {name: "Köstelwald", lat: 50.421389, lon: 13.115278, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Kotlina. NÖ von Kupferberg. Tod Vinzenz Pilz 15.4.1879 (Kekulé 16).", ref: "Bd. 1, S. 36"},
        {name: "Preßnitz", lat: 50.4667, lon: 13.1333, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Versunkene Stadt; Heirat Vinzenz Pilz (Kekulé 16) und Johanna Wolf, 1850.", ref: "Bd. 1, S. 37"},
        {name: "Sebastiansberg", lat: 50.5100, lon: 13.2511, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Bergstadt. Tod Franziska Pilz 1921 (Kekulé 9).", ref: "Bd. 1, S. 35"},
        {name: "Platten", lat: 50.511667, lon: 13.358056, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Blatno. Vinzenz Wenzel Pilz (Kekulé 16) war hier Revierjäger.", ref: "Bd. 2, S. 18"},
        {name: "Eidlitz", lat: 50.440556, lon: 13.457222, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Údlice bei Chomutov. V.W. Pilz (Kekulé 16), Förster, gest. 29.3.1863.", ref: "Bd. 2, S. 18"},
        {name: "Schloss Rothenhaus", lat: 50.5123, lon: 13.4519, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Im 14. Jahrhundert erbaut, ab 1893 im Besitz der Grafen Buquoy. Die Vorfahren dienten hier über Generationen als herrschaftliche Förster.", ref: "Bd. 1, S. 32"},
        {name: "Libeschitz", lat: 50.2939, lon: 13.6233, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Alter Wallfahrtsort in der weltberühmten Hopfenregion Saaz. Friedrich August Pilz (Kekulé 64) wirkte hier als Lehrer bis zu seinem Tod am 29. Dezember 1812.", ref: "Bd. 1, S. 39"},
        {name: "Joachimsthal", lat: 50.3583, lon: 12.9344, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Ausbildung von Alois Johann Pilz.", ref: "Bd. 1"},
        {name: "Komotau", lat: 50.4605, lon: 13.4178, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Chomutov. Bezirkshauptstadt.", ref: "Bd. 1"},
        {name: "Saaz", lat: 50.3269, lon: 13.5456, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Hopfenstadt Žatec.", ref: "Bd. 1"},
        {name: "Eger (Cheb) – Mägdebrunnen", lat: 50.07795, lon: 12.36658, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Exakter Standort des Mägdebrunnens (Statue von Oswald Hofmann) im Franziskanerklosterhof.", ref: "Bd. 1"},
        {name: "Teplitz-Schönau", lat: 50.6403, lon: 13.8244, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Bedeutendes Kurbad.", ref: "Bd. 1"},

        // --- Mittelböhmen (Bechinie-Gebiet) ---
        {name: "Rakonitz", lat: 50.1031, lon: 13.7335, kategorie: "Pilz-Linie", region: "Mittelböhmen", beschreibung: "Rakovník. Bezirksstadt der Bechinie-Herkunftsorte.", ref: "Bd. 1, S. 24"},
        {name: "Hlawatschow", lat: 49.9120, lon: 14.7660, kategorie: "Pilz-Linie", region: "Mittelböhmen", beschreibung: "Mittelböhmisches Hügelland, 25 km südöstlich von Prag. Geburtsort von Vinzenz Pilz (∗1830); Ondrejow erhielt 1745 Marktrecht und beherbergt seit 1898 eine Sternwarte.", ref: "Bd. 1, S. 38"},
        {name: "Ondrejow", lat: 49.9061, lon: 14.7806, kategorie: "Pilz-Linie", region: "Mittelböhmen", beschreibung: "Ondřejov. 25 km südöstlich von Prag; Sternwarte seit 1898.", ref: "Bd. 1, S. 38"},
        {name: "Samechov", lat: 49.88033, lon: 14.84819, kategorie: "Pilz-Linie", region: "Mittelböhmen", beschreibung: "Dorf bei Chocerady. Geburtsort Marie Bechinie, 1813.", ref: "Bd. 2, S. 21"},
        {name: "Silberskalitz", lat: 49.897778, lon: 14.846111, kategorie: "Pilz-Linie", region: "Mittelböhmen", beschreibung: "Stříbrná Skalice. Tod Josef Bechinie (Kekulé 34), 1865.", ref: "Bd. 2, S. 22"},
        {name: "Konojed", lat: 49.948333, lon: 14.851111, kategorie: "Pilz-Linie", region: "Mittelböhmen", beschreibung: "Konojedy. Tod Marianna Handl (Kekulé 35), 1866.", ref: "Bd. 2, S. 22"},
        {name: "Bernau", lat: 50.546667, lon: 13.351944, kategorie: "Pilz-Linie", region: "Mittelböhmen", beschreibung: "Zákouti. Geburtsort Marianna Handl (Kekulé 35), 1777.", ref: "Bd. 2, S. 22"},
        {name: "Radmierschitz", lat: 49.64580, lon: 14.75772, kategorie: "Pilz-Linie", region: "Mittelböhmen", beschreibung: "Ratměřice. Geburtsort Josef Bechinie (Kekulé 34), 1776.", ref: "Bd. 2, S. 22"},
        {name: "Chlum", lat: 49.701667, lon: 14.378333, kategorie: "Pilz-Linie", region: "Mittelböhmen", beschreibung: "Heirat Philipp Bechinie (Kekulé 68), 22.10.1769.", ref: "Bd. 2, S. 22"},
        {name: "Bielschitz", lat: 49.843333, lon: 14.808333, kategorie: "Pilz-Linie", region: "Mittelböhmen", beschreibung: "Bělčice. Philipp Bechinie arbeitete hier als 83-jähriger Jäger.", ref: "Bd. 2, S. 22"},
        {name: "Amschelberg (Kosova Hora)", lat: 49.6558, lon: 14.4744, kategorie: "Pilz-Linie", region: "Mittelböhmen", beschreibung: "Eine der ältesten Siedlungen Böhmens, 60 km südlich von Prag. Hier lebte Theresia, die jüdische Vorfahrin der Bechinie-Linie; sie wurde 1768 getauft – mit den Eltern des späteren Feldmarschalls Radetzky als Taufpaten.", ref: "Bd. 1, S. 39"},
        {name: "Rot Hradek u Sedlčan", lat: 49.656, lon: 14.453, kategorie: "Pilz-Linie", region: "Mittelböhmen", beschreibung: "Červený Hrádek u Sedlčan (Bezirk Příbram, Mittelböhmen). Herrschaftssitz der Hradetzky, die 1768 als Taufpaten Theresias in Amschelberg auftraten — geographischer und genealogischer Bezugspunkt zu Amschelberg, aber nicht identisch damit. Zugleich Registrationsort der jüdischen Fürth-Familianten (JewishGen, Berounský Kreis). Trägt denselben tschechischen Namen wie das Schloss Rothenhaus bei Jirkov in Nordböhmen — die beiden Orte liegen weit auseinander und sind nicht zu verwechseln.", ref: ""},

        {name: "Miskowitz", lat: 49.2500, lon: 14.9500, kategorie: "Pilz-Linie", region: "Südböhmen", beschreibung: "Myslkovice (Bezirk Tábor). Jüdische Gemeinde mit Ghetto (seit Ende 17. Jh.), 37 Familianten, Synagoge seit 1770. Eine von drei parallelen Hypothesen zum Geburtsort Theresias (geb. Pessel, Kekulé 69, geb. ~Nov./Dez. 1749 nach Konsistorialakt 1768, direkte Vorfahrin des Autors), die ca. 1764 nach Amschelberg einheiratete. Im Census 1869 sind hier auch eine Familie Zeisl (Haus XVI) und eine Familie Bloch (Haus 56) nachgewiesen — ein Indiz für eine geographische Überschneidung mit der Zeisl-Familie.", ref: ""},
        {name: "Prag", lat: 50.0875, lon: 14.4214, kategorie: "Pilz-Linie", region: "Böhmen", beschreibung: "Böhmische Landeshauptstadt.", ref: "Bd. 1"},

        // --- Österreich (Pilz) ---
        {name: "Helfenberg", lat: 48.5442, lon: 14.1419, kategorie: "Pilz-Linie", region: "OÖ", beschreibung: "Oberösterreichisches Mühlviertel, 567 m Seehöhe. Großvater Alois Johann Pilz lebte hier als Oberförster im Dienst der Familie Revertera; die barocke Pfarrkirche stammt von 1712.", ref: "Bd. 1, S. 40"},
        {name: "Salzburg-Aigen", lat: 47.7833, lon: 13.0831, kategorie: "Pilz-Linie", region: "Salzburg", beschreibung: "Schloss Aigen; Ruhestandsort der Großeltern ab 1936.", ref: "Bd. 1, S. 41"},
        {name: "Kainisch", lat: 47.6167, lon: 13.8333, kategorie: "Pilz-Linie", region: "Steiermark", beschreibung: "Pichl-Kainisch. Erhard Pilz war hier Oberförster.", ref: "Bd. 1, S. 42"},
        {name: "Bad Ischl", lat: 47.7117, lon: 13.6194, kategorie: "Pilz-Linie", region: "OÖ", beschreibung: "Kurstadt im Salzkammergut. Wohnort Erhard Pilz in der Pension.", ref: "Bd. 1, S. 42"},
        {name: "München", lat: 48.1372, lon: 11.5755, kategorie: "Pilz-Linie", region: "Bayern", beschreibung: "Wohnort Oswald Hofmann.", ref: "Bd. 1"},
        {name: "Pechau (bei Magdeburg)", lat: 52.0919, lon: 11.7303, kategorie: "Pilz-Linie", region: "Sachsen-Anhalt", beschreibung: "Tod von Philipp Bechinie 9.1.1819 (Kekulé 68), Besuch bei seinem Sohn.", ref: "Bd. 2, S. 22"},

        // --- Slawonien ---
        {name: "Badljevina", lat: 45.5135, lon: 17.1924, kategorie: "Pilz-Linie", region: "Slawonien", beschreibung: "Wohnort Alois Vjekoslav Pilz (19.02.1858).", ref: "Bd. 1"},
        {name: "Ivanovo Polje", lat: 45.5900, lon: 17.1500, kategorie: "Pilz-Linie", region: "Slawonien", beschreibung: "Johannisfeld. Oberförster Alois Vjekoslav Pilz (1870–1880).", ref: "Bd. 1"},
        {name: "Negoslavci", lat: 45.2783, lon: 18.9975, kategorie: "Pilz-Linie", region: "Slawonien", beschreibung: "Herrschaftl. Förster (1876) und Sterbeort A.V. Pilz (21.09.1894).", ref: "Bd. 1"},

        // === EBERSTALLER-LINIE ===
        {name: "Wallern/Trattnach", lat: 48.2336, lon: 13.9450, kategorie: "Eberstaller-Linie", region: "OÖ", beschreibung: "Ehemals Krenglbach; 300 Jahre Stammsitz der Familie.", ref: "Bd. 1, S. 43"},
        {name: "Reichhof am Hungersberg", lat: 48.21369194799892, lon: 13.935277169816231, kategorie: "Eberstaller-Linie", region: "OÖ", beschreibung: "Hungerberg 3, Wallern/Trattnach (früher Krenglbach). Stammsitz der Familie Eberstaller über 300 Jahre.", ref: "Bd. 1, S. 43", hof: true},
        {name: "Krenglbach", lat: 48.1930, lon: 13.9450, kategorie: "Eberstaller-Linie", region: "OÖ", beschreibung: "Hausruckviertel, Oberösterreich. Stammsitz der Familie Eberstaller; der Reichhof gehört heute zur Gemeinde Wallern an der Trattnach.", ref: "Bd. 1, S. 43"},
        {name: "Radstadt", lat: 47.3833, lon: 13.4500, kategorie: "Eberstaller-Linie", region: "Salzburg", beschreibung: "Matthias Eberstaller (Kekulé 24) siedelte hier, Bäckerei.", ref: "Bd. 1, S. 43"},
        {name: "Rott bei Salzburg", lat: 47.8333, lon: 12.9833, kategorie: "Eberstaller-Linie", region: "Salzburg", beschreibung: "Geburt Großvater Johann Eberstaller, 21.8.1893.", ref: "Bd. 1, S. 43"},
        {name: "Bad Aussee", lat: 47.6097, lon: 13.7822, kategorie: "Eberstaller-Linie", region: "Steiermark", beschreibung: "Heirat Eberstaller/Mittermaier (1895).", ref: "Bd. 1, S. 43"},
        {name: "Feldkirchen", lat: 48.3490, lon: 14.2470, kategorie: "Eberstaller-Linie", region: "OÖ", beschreibung: "Geburtsort Klara Mittermaier (Kekulé 13), 30.5.1865.", ref: "Bd. 2, S. 30"},
        {name: "Linz", lat: 48.3064, lon: 14.2861, kategorie: "Eberstaller-Linie", region: "OÖ", beschreibung: "Oberösterreichische Landeshauptstadt.", ref: "Bd. 1"},
        {name: "Rannariedl", lat: 48.4831, lon: 13.7833, kategorie: "Eberstaller-Linie", region: "OÖ", beschreibung: "Gerichtsdiener Strixner.", ref: "Bd. 1"},
        {name: "Steyr", lat: 48.0425, lon: 14.4211, kategorie: "Eberstaller-Linie", region: "OÖ", beschreibung: "Industriestadt; Sitz der reichen Kaufmannsfamilie Eberstaller und der Karoline Eberstaller, Freundin von Franz Schubert.", ref: "Bd. 1"},
        {name: "Wels", lat: 48.1656, lon: 14.0353, kategorie: "Eberstaller-Linie", region: "OÖ", beschreibung: "Tod von Joh. Baptist Eberstaller (Kekulé 12), 1905.", ref: "Bd. 1, S. 43"},

        // === TIROLER LINIE ===
        {name: "Kartitsch", lat: 46.7231, lon: 12.5008, kategorie: "Tiroler Linie", region: "Tirol", beschreibung: "Osttiroler Bergdorf im Pustertal. Geburtsort der Mutter, des Autors und seiner Geschwister; Heimat der Familien Kofler und Reider, deren Geschichte sich über drei Jahrhunderte hier entfaltet.", ref: "Bd. 1, S. 44"},
        {name: "Petererhof, St. Oswald", lat: 46.73755519924009, lon: 12.478147527197969, kategorie: "Tiroler Linie", region: "Tirol", beschreibung: "Bauernhof bei Kartitsch, Sitz der Kofler- und Reider-Linie. Von hier brachen die drei Kofler-Brüder auf, die im 19. Jahrhundert Karriere in Innsbruck, Rovereto und Mailand machten.", ref: "Bd. 1, S. 44, 110ff.", hof: true},
        {name: "Sexten", lat: 46.7019, lon: 12.3586, kategorie: "Tiroler Linie", region: "Südtirol", beschreibung: "Herkunftsort der Familie Reider.", ref: "Bd. 1, S. 43"},
        {name: "Obertilliach", lat: 46.7125, lon: 12.5961, kategorie: "Tiroler Linie", region: "Tirol", beschreibung: "Geburtsort Maria Ebner (Kekulé 115), 1746.", ref: "Bd. 2, S. 42"},
        {name: "Rovereto", lat: 45.8885, lon: 11.0413, kategorie: "Tiroler Linie", region: "Trentino", beschreibung: "Trentino. Anton Kofler (später Cofler) siedelte hierher und begründete die italienische Linie – eine Familiengeschichte, die bis heute nachverfolgt werden kann.", ref: "Bd. 1"},
        {name: "Mailand", lat: 45.4642, lon: 9.1900, kategorie: "Tiroler Linie", region: "Lombardei", beschreibung: "Finanzier Peter Kofler.", ref: "Bd. 1"},
        {name: "Anras", lat: 46.7739, lon: 12.5608, kategorie: "Tiroler Linie", region: "Tirol", beschreibung: "Pfarrer Bodner/Kofler.", ref: "Bd. 1"},
        {name: "Lienz", lat: 46.8289, lon: 12.7686, kategorie: "Tiroler Linie", region: "Tirol", beschreibung: "Bezirkshauptstadt Osttirol.", ref: "Bd. 1"},
        {name: "Padua", lat: 45.4064, lon: 11.8768, kategorie: "Tiroler Linie", region: "Venetien", beschreibung: "Universität (Joh. B. Kofler, Studium).", ref: "Bd. 1"},
        {name: "Triest", lat: 45.6495, lon: 13.7768, kategorie: "Tiroler Linie", region: "Friaul-Jul. V.", beschreibung: "Cofler-Ärzte.", ref: "Bd. 1"},

        // === ZUSAMMENFÜHRUNG ===
        {name: "Innsbruck", lat: 47.2692, lon: 11.3933, kategorie: "Zusammenführung", region: "Tirol", beschreibung: "Zentraler Wohnort ab 1951.", ref: "Bd. 1"},
        {name: "Sillian", lat: 46.7528, lon: 12.4211, kategorie: "Zusammenführung", region: "Tirol", beschreibung: "Zollamt Alois A. Pilz.", ref: "Bd. 1"},

        // === SONSTIGE ===
        {name: "Wien", lat: 48.2092, lon: 16.3728, kategorie: "Sonstige", region: "Wien", beschreibung: "Reichshauptstadt.", ref: ""},
        {name: "Budapest", lat: 47.4979, lon: 19.0402, kategorie: "Sonstige", region: "Ungarn", beschreibung: "Metropole an der Donau.", ref: ""}
    ];
    
    orte.sort(function(a, b) {
        if (a.kategorie < b.kategorie) return -1;
        if (a.kategorie > b.kategorie) return 1;
        return a.name.localeCompare(b.name);
    });

    var markers = {};
    
    orte.forEach(function(ort, index) {
        ort.id = 'ort-' + index;

        var marker = L.marker([ort.lat, ort.lon], {
            icon: createCustomIcon(ort.kategorie, ort.hof)
        }).addTo(map);
        
        var popupContent = '<strong>' + ort.name + '</strong><br>' +
                           '<span style="font-size:0.8em; color:#666; text-transform:uppercase;">' + ort.region + '</span><br>' +
                           '<em style="color: ' + lineColors[ort.kategorie] + ';">' + ort.kategorie + '</em>';
        if(ort.beschreibung && ort.beschreibung !== "-") {
            popupContent += '<br><small style="color: #333; display:block; margin-top:4px;">' + ort.beschreibung + '</small>';
        }


        marker.bindPopup(popupContent);
        marker.bindTooltip(ort.name, { direction: 'top', offset: [0, -10], className: 'ort-tooltip' });
        
        markers[ort.id] = marker;
    });

    var group = L.featureGroup(Object.values(markers));
    map.fitBounds(group.getBounds().pad(0.1));

    // --- TABELLE ---
    var tbody = document.getElementById('orte-tbody');
    if (tbody) {
        tbody.innerHTML = '';

        orte.forEach(function(ort) {
            var tr = document.createElement('tr');
            var rowClass = 'row-sonstige';
            if(ort.kategorie === 'Pilz-Linie') rowClass = 'row-pilz';
            if(ort.kategorie === 'Eberstaller-Linie') rowClass = 'row-eberstaller';
            if(ort.kategorie === 'Tiroler Linie') rowClass = 'row-tirol';
            if(ort.kategorie === 'Zusammenführung') rowClass = 'row-zusammen';
            tr.className = rowClass;

            var nameDisplay = ort.name;
            if (ort.hof) nameDisplay = '⬦ ' + nameDisplay;

            tr.innerHTML = '<td><span class="ort-name">' + nameDisplay + '</span></td>' +
                           '<td>' + (ort.region || '-') + '</td>' +
                           '<td><span class="ort-beschreibung">' + (ort.beschreibung !== "-" ? ort.beschreibung : "") + '</span></td>';
            
            tr.addEventListener('click', function() {
                var m = markers[ort.id];
                if (m) {
                    map.flyTo(m.getLatLng(), 13, { duration: 1.5 });
                    m.openPopup();
                    mapElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });

            tbody.appendChild(tr);
        });
    }

    // --- SUCHFUNKTION ---
    window.filterTable = function() {
        var input = document.getElementById('ort-suche');
        var filter = input.value.toUpperCase();
        var rows = tbody.getElementsByTagName('tr');
        for (var i = 0; i < rows.length; i++) {
            var txtValue = rows[i].textContent || rows[i].innerText;
            rows[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
        }
    }

    // --- CONTROLS ---
    var OverviewControl = L.Control.extend({
        options: { position: 'topleft' },
        onAdd: function(map) {
            var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
            var button = L.DomUtil.create('a', '', container);
            button.href = '#'; button.title = 'Reset Zoom'; button.innerHTML = '⟲';
            button.style.cssText = 'display:block; width:30px; height:30px; line-height:30px; text-align:center; text-decoration:none; background:white; font-weight:bold; color:#333;';
            L.DomEvent.on(button, 'click', function(e) {
                L.DomEvent.preventDefault(e);
                map.fitBounds(group.getBounds().pad(0.1));
            });
            return container;
        }
    });
    map.addControl(new OverviewControl());

    var isFullscreen = false;
    var FullscreenControl = L.Control.extend({
        options: { position: 'topleft' },
        onAdd: function(map) {
            var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
            var button = L.DomUtil.create('a', '', container);
            button.href = '#'; button.title = 'Vollbild'; button.innerHTML = '⛶';
            button.style.cssText = 'display:block; width:30px; height:30px; font-size:16px; font-weight:bold; line-height:30px; text-align:center; text-decoration:none; color:#333; background:white;';
            L.DomEvent.on(button, 'click', function(e) {
                L.DomEvent.preventDefault(e);
                L.DomEvent.stopPropagation(e);
                if (!isFullscreen) {
                    if (mapElement.requestFullscreen) mapElement.requestFullscreen();
                    else if (mapElement.webkitRequestFullscreen) mapElement.webkitRequestFullscreen();
                    else if (mapElement.msRequestFullscreen) mapElement.msRequestFullscreen();
                } else {
                    if (document.exitFullscreen) document.exitFullscreen();
                    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
                    else if (document.msExitFullscreen) document.msExitFullscreen();
                }
            });
            return container;
        }
    });
    map.addControl(new FullscreenControl());
    
    function onFullscreenChange() {
        isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
        setTimeout(function() { map.invalidateSize(); }, 100);
    }
    document.addEventListener('fullscreenchange', onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', onFullscreenChange);
    document.addEventListener('msfullscreenchange', onFullscreenChange);
});
