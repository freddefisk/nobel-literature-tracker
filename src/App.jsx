import React, { useState, useEffect } from ‘react’;
import { Check, Book, Search, Calendar } from ‘lucide-react’;

const NobelLiteratureTracker = () => {
const nobelLaureates = [
{ year: 2025, name: “László Krasznahorkai”, country: “Ungern”, works: [“Satantango”, “Melankoli av motståndet”, “Seiobo gick ner till jorden”] },
{ year: 2024, name: “Han Kang”, country: “Sydkorea”, works: [“Vegetarianen”, “Den vita boken”, “Människohandlingar”] },
{ year: 2023, name: “Jon Fosse”, country: “Norge”, works: [“Septologin”, “Morgon och kveld”, “Namnet”] },
{ year: 2022, name: “Annie Ernaux”, country: “Frankrike”, works: [“Händelsen”, “Åren”, “En kvinnas historia”] },
{ year: 2021, name: “Abdulrazak Gurnah”, country: “Tanzania”, works: [“Paradise”, “By the Sea”, “Desertion”] },
{ year: 2020, name: “Louise Glück”, country: “USA”, works: [“The Wild Iris”, “Averno”, “Faithful and Virtuous Night”] },
{ year: 2019, name: “Peter Handke”, country: “Österrike”, works: [“Ångesten hos målvakten vid straffsparken”, “Mina år i Nobukten”] },
{ year: 2018, name: “Olga Tokarczuk”, country: “Polen”, works: [“Jakobs böcker”, “Spring”, “Ur dina bennens ben”] },
{ year: 2017, name: “Kazuo Ishiguro”, country: “Storbritannien”, works: [“Återstoden av dagen”, “Glöm mig inte”, “Begravd jätte”] },
{ year: 2016, name: “Bob Dylan”, country: “USA”, works: [“Tarantula”, “Chronicles: Volume One”] },
{ year: 2015, name: “Svetlana Aleksijevitj”, country: “Vitryssland”, works: [“Zinkpojkar”, “Tjernobyl”, “Kriget har inget kvinnligt ansikte”] },
{ year: 2014, name: “Patrick Modiano”, country: “Frankrike”, works: [“Dora Bruder”, “Den mörka butiken”, “Ringvägen”] },
{ year: 2013, name: “Alice Munro”, country: “Kanada”, works: [“Kär het liv”, “Runaway”, “The View from Castle Rock”] },
{ year: 2012, name: “Mo Yan”, country: “Kina”, works: [“Röda Höga Sorghum”, “Stora bröst vida höfter”, “Vitlök och safir”] },
{ year: 2011, name: “Tomas Tranströmer”, country: “Sverige”, works: [“För levande och döda”, “Östersjöar”, “Det vilda torget”] },
{ year: 2010, name: “Mario Vargas Llosa”, country: “Peru”, works: [“Berättaren”, “Tantens Julia och skribenten”, “Gudinnan och skribenten”] },
{ year: 2009, name: “Herta Müller”, country: “Tyskland/Rumänien”, works: [“Hjärtdjuret”, “Andans gunga”, “Allt det jag äger bär jag med mig”] },
{ year: 2008, name: “Jean-Marie Gustave Le Clézio”, country: “Frankrike”, works: [“Öknen”, “Den afrikanska”, “Guldletaren”] },
{ year: 2007, name: “Doris Lessing”, country: “Storbritannien”, works: [“Det gyllene anteckningsboken”, “Den femte barnet”, “Gräset sjunger”] },
{ year: 2006, name: “Orhan Pamuk”, country: “Turkiet”, works: [“Mitt namn är Röd”, “Snö”, “Istanbul”] },
{ year: 2005, name: “Harold Pinter”, country: “Storbritannien”, works: [“The Birthday Party”, “The Homecoming”, “Betrayal”] },
{ year: 2004, name: “Elfriede Jelinek”, country: “Österrike”, works: [“Pianolektionen”, “Lust”, “Kvinnorna”] },
{ year: 2003, name: “J. M. Coetzee”, country: “Sydafrika”, works: [“Skymning”, “Skam”, “Herr C:s ungdom”] },
{ year: 2002, name: “Imre Kertész”, country: “Ungern”, works: [“Roman för en skickelseslös”, “Kaddish för ett ofött barn”, “Likvidationen”] },
{ year: 2001, name: “V. S. Naipaul”, country: “Trinidad och Tobago”, works: [“Ett hus åt herr Biswas”, “En flod i djungeln”, “Arrival”] },
{ year: 2000, name: “Gao Xingjian”, country: “Kina”, works: [“Själens berg”, “En ensam mans bibel”, “Köpare och säljare”] },
{ year: 1999, name: “Günter Grass”, country: “Tyskland”, works: [“Blecktrumman”, “Hundår”, “Krabban”] },
{ year: 1998, name: “José Saramago”, country: “Portugal”, works: [“Blindhet”, “Memorial”, “Stenflotten”] },
{ year: 1997, name: “Dario Fo”, country: “Italien”, works: [“Accidental Death of an Anarchist”, “Mistero Buffo”] },
{ year: 1996, name: “Wisława Szymborska”, country: “Polen”, works: [“View with a Grain of Sand”, “Poems New and Collected”] },
{ year: 1995, name: “Seamus Heaney”, country: “Irland”, works: [“Death of a Naturalist”, “The Haw Lantern”, “District and Circle”] },
{ year: 1994, name: “Kenzaburō Ōe”, country: “Japan”, works: [“En personlig erfarenhet”, “Fotnoter från Hiroshima”] },
{ year: 1993, name: “Toni Morrison”, country: “USA”, works: [“Älskade”, “Jazz”, “Sula”] },
{ year: 1992, name: “Derek Walcott”, country: “Saint Lucia”, works: [“Omeros”, “The Fortunate Traveller”] },
{ year: 1991, name: “Nadine Gordimer”, country: “Sydafrika”, works: [“Burgers dotter”, “Julis folk”, “The Conservationist”] },
{ year: 1990, name: “Octavio Paz”, country: “Mexiko”, works: [“Ensamma vägens labyrint”, “Solstenen”, “Frihetens träd”] },
{ year: 1989, name: “Camilo José Cela”, country: “Spanien”, works: [“Bikupan”, “Pascual Duartes familj”, “Mazurka för två döda”] },
{ year: 1988, name: “Naguib Mahfouz”, country: “Egypten”, works: [“Kairo-trilogin”, “Tiggargränden”, “Våra barns barn”] },
{ year: 1987, name: “Joseph Brodsky”, country: “USA/Ryssland”, works: [“A Part of Speech”, “Less Than One”, “To Urania”] },
{ year: 1986, name: “Wole Soyinka”, country: “Nigeria”, works: [“Death and the King’s Horseman”, “Aké”, “The Lion and the Jewel”] },
{ year: 1985, name: “Claude Simon”, country: “Frankrike”, works: [“Flandersvägen”, “Akacian”, “Georgica”] },
{ year: 1984, name: “Jaroslav Seifert”, country: “Tjeckoslovakien”, works: [“Ljusbärande timme”, “Prag i tårarna”, “Mammas barndomsstad”] },
{ year: 1983, name: “William Golding”, country: “Storbritannien”, works: [“Flugornas herre”, “Riten”, “Tornspiran”] },
{ year: 1982, name: “Gabriel García Márquez”, country: “Colombia”, works: [“Hundra år av ensamhet”, “Kärleken i kolerans tid”, “Höstens patriark”] },
{ year: 1981, name: “Elias Canetti”, country: “Storbritannien/Bulgarien”, works: [“Massor och makt”, “Den räddade tungan”, “Auto da Fé”] },
{ year: 1980, name: “Czesław Miłosz”, country: “Polen/USA”, works: [“Fångat sinne”, “The Separate Notebooks”, “New and Collected Poems”] },
{ year: 1979, name: “Odysseas Elytis”, country: “Grekland”, works: [“The Axion Esti”, “Maria Nephele”] },
{ year: 1978, name: “Isaac Bashevis Singer”, country: “USA”, works: [“Satans i Goraj”, “Familjen Moskat”, “Gimpel narr”] },
{ year: 1977, name: “Vicente Aleixandre”, country: “Spanien”, works: [“La destrucción o el amor”, “Sombra del paraíso”] },
{ year: 1976, name: “Saul Bellow”, country: “USA”, works: [“Herzog”, “Seize the Day”, “Humboldt’s Gift”] },
{ year: 1975, name: “Eugenio Montale”, country: “Italien”, works: [“Bläckfiskens ben”, “Ossia di Seppia”, “La bufera e altro”] },
{ year: 1974, name: “Eyvind Johnson”, country: “Sverige”, works: [“Krilon-trilogin”, “Strändernas svall”, “Dagbok från Schweiz”] },
{ year: 1974, name: “Harry Martinson”, country: “Sverige”, works: [“Aniara”, “Nässlorna blomma”, “Vägen ut”] },
{ year: 1973, name: “Patrick White”, country: “Australien”, works: [“Voss”, “The Eye of the Storm”, “Riders in the Chariot”] },
{ year: 1972, name: “Heinrich Böll”, country: “Tyskland”, works: [“Billiard klockan halv tio”, “Klownen”, “Gruppbild med dam”] },
{ year: 1971, name: “Pablo Neruda”, country: “Chile”, works: [“Twenty Love Poems”, “Canto General”, “Elemental Odes”] },
{ year: 1970, name: “Aleksandr Solzjenitsyn”, country: “Sovjetunionen”, works: [“En dag i Ivan Denisovitjs liv”, “Arkipelagen Gulag”, “Cancerkliniken”] },
{ year: 1969, name: “Samuel Beckett”, country: “Irland”, works: [“I väntan på Godot”, “Slutspel”, “Molloy”] },
{ year: 1968, name: “Yasunari Kawabata”, country: “Japan”, works: [“Snöland”, “Tusen tranor”, “Gamla huvudstaden”] },
{ year: 1967, name: “Miguel Ángel Asturias”, country: “Guatemala”, works: [“Herr president”, “Majshundarna”, “Starka vinden”] },
{ year: 1966, name: “Shmuel Yosef Agnon”, country: “Israel”, works: [“En gäst för natten”, “I gårdagens hjärta”, “Bröllopsbaldakinen”] },
{ year: 1966, name: “Nelly Sachs”, country: “Sverige/Tyskland”, works: [“I bostäderna hos döden”, “Stjärnförmörkelse”, “Flykt och förvandling”] },
{ year: 1965, name: “Michail Sjolokov”, country: “Sovjetunionen”, works: [“Stilla flyter Don”, “Målad mark”, “Människoöden”] },
{ year: 1964, name: “Jean-Paul Sartre”, country: “Frankrike”, works: [“Äckel”, “Vägen till frihet”, “Varat och intet”] },
{ year: 1963, name: “Giorgos Seferis”, country: “Grekland”, works: [“Mythistorema”, “Log Book”, “Three Secret Poems”] },
{ year: 1962, name: “John Steinbeck”, country: “USA”, works: [“Möss och människor”, “Vredens druvor”, “Öster om Eden”] },
{ year: 1961, name: “Ivo Andrić”, country: “Jugoslavien”, works: [“Bron över Drina”, “Konsul Dazevs dagar”, “Kronikör från Travnik”] },
{ year: 1960, name: “Saint-John Perse”, country: “Frankrike”, works: [“Anabas”, “Semarks”, “Krönikor”] },
{ year: 1959, name: “Salvatore Quasimodo”, country: “Italien”, works: [“Oboe sommerso”, “Ed è subito sera”, “La vita non è sogno”] },
{ year: 1958, name: “Boris Pasternak”, country: “Sovjetunionen”, works: [“Doktor Zjivago”, “Min syster livet”, “Teman och variationer”] },
{ year: 1957, name: “Albert Camus”, country: “Frankrike”, works: [“Främlingen”, “Pesten”, “Myten om Sisyfos”] },
{ year: 1956, name: “Juan Ramón Jiménez”, country: “Spanien”, works: [“Platero och jag”, “Dagbok från en nyligen gift poet”] },
{ year: 1955, name: “Halldór Laxness”, country: “Island”, works: [“Salka Valka”, “Självständiga människor”, “Islandsklockan”] },
{ year: 1954, name: “Ernest Hemingway”, country: “USA”, works: [“Farväl till vapnen”, “För vem klockan ringer”, “Den gamle och havet”] },
{ year: 1953, name: “Winston Churchill”, country: “Storbritannien”, works: [“Andra världskriget”, “Marlborough”, “A History of the English-Speaking Peoples”] },
{ year: 1952, name: “François Mauriac”, country: “Frankrike”, works: [“Therese Desqueyroux”, “Ormens knut”, “Le désert de l’amour”] },
{ year: 1951, name: “Pär Lagerkvist”, country: “Sverige”, works: [“Barabbas”, “Bödeln”, “Dvärgen”] },
{ year: 1950, name: “Bertrand Russell”, country: “Storbritannien”, works: [“Principia Mathematica”, “The Problems of Philosophy”, “A History of Western Philosophy”] },
{ year: 1949, name: “William Faulkner”, country: “USA”, works: [“Ljuset i augusti”, “Buller och bång”, “När jag låg och dog”] },
{ year: 1948, name: “T. S. Eliot”, country: “Storbritannien/USA”, works: [“Det öde landet”, “De fyra kvartetterna”, “Mord i katedralen”] },
{ year: 1947, name: “André Gide”, country: “Frankrike”, works: [“De falska myntmakarna”, “Undervisa oss lycka”, “Korkens dagbok”] },
{ year: 1946, name: “Hermann Hesse”, country: “Schweiz/Tyskland”, works: [“Stäppvargen”, “Siddharta”, “Glaspärlespelet”] },
{ year: 1945, name: “Gabriela Mistral”, country: “Chile”, works: [“Desolación”, “Tala”, “Lagar”] },
{ year: 1944, name: “Johannes V. Jensen”, country: “Danmark”, works: [“Den långa resan”, “Kongens fald”, “Myter”] },
{ year: 1939, name: “Frans Eemil Sillanpää”, country: “Finland”, works: [“Fallen ur det första äktenskapet”, “Silja”, “Den korta sommaren”] },
{ year: 1938, name: “Pearl S. Buck”, country: “USA”, works: [“Den goda jorden”, “Sönerna”, “Det delade huset”] },
{ year: 1937, name: “Roger Martin du Gard”, country: “Frankrike”, works: [“Familjen Thibault”, “Jean Barois”] },
{ year: 1936, name: “Eugene O’Neill”, country: “USA”, works: [“Lång dags färd mot natt”, “Sorg går Elektra väl”, “Desire Under the Elms”] },
{ year: 1934, name: “Luigi Pirandello”, country: “Italien”, works: [“Sex personer söker en författare”, “Henrik IV”, “Mattia Pascal”] },
{ year: 1933, name: “Ivan Bunin”, country: “Ryssland”, works: [“Herrens folk”, “Mörka alleer”, “Arsenjevs liv”] },
{ year: 1932, name: “John Galsworthy”, country: “Storbritannien”, works: [“Forsytesagan”, “En modern komedi”, “Strid”] },
{ year: 1931, name: “Erik Axel Karlfeldt”, country: “Sverige”, works: [“Fridolins visor”, “Fridolins lustgård”, “Hösthorn”] },
{ year: 1930, name: “Sinclair Lewis”, country: “USA”, works: [“Babbit”, “Main Street”, “Arrowsmith”] },
{ year: 1929, name: “Thomas Mann”, country: “Tyskland”, works: [“Buddenbrooks”, “Trollberget”, “Döden i Venedig”] },
{ year: 1928, name: “Sigrid Undset”, country: “Norge”, works: [“Kristin Lavransdotter”, “Olav Audunssön”, “Gymnadenia”] },
{ year: 1927, name: “Henri Bergson”, country: “Frankrike”, works: [“Den skapande utvecklingen”, “Tid och frihet”, “Materia och minne”] },
{ year: 1926, name: “Grazia Deledda”, country: “Italien”, works: [“Elias Portolu”, “Askan”, “Aska och vind”] },
{ year: 1925, name: “George Bernard Shaw”, country: “Irland”, works: [“Pygmalion”, “Saint Joan”, “Man and Superman”] },
{ year: 1924, name: “Władysław Reymont”, country: “Polen”, works: [“Bönderna”, “Den utlovade jorden”, “Vampyren”] },
{ year: 1923, name: “William Butler Yeats”, country: “Irland”, works: [“Stolen och andra dikter”, “Vision”, “The Wind Among the Reeds”] },
{ year: 1922, name: “Jacinto Benavente”, country: “Spanien”, works: [“Den öndas gäst”, “Andra människors bon”, “La Malquerida”] },
{ year: 1921, name: “Anatole France”, country: “Frankrike”, works: [“Penguin ön”, “Thais”, “Gudarna törstar”] },
{ year: 1920, name: “Knut Hamsun”, country: “Norge”, works: [“Hunger”, “Pan”, “Markens gröda”] },
{ year: 1919, name: “Carl Spitteler”, country: “Schweiz”, works: [“Olympisk vår”, “Prometheus och Epimetheus”] },
{ year: 1917, name: “Karl Gjellerup”, country: “Danmark”, works: [“Pilgrimen Kamanita”, “Minna”, “Möllen”] },
{ year: 1917, name: “Henrik Pontoppidan”, country: “Danmark”, works: [“Det förlovade landet”, “Lykke-Per”, “De dødes rige”] },
{ year: 1916, name: “Verner von Heidenstam”, country: “Sverige”, works: [“Hans Alienus”, “Karolinerna”, “Endymion”] },
{ year: 1915, name: “Romain Rolland”, country: “Frankrike”, works: [“Jean-Christophe”, “Colas Breugnon”, “Ovanför striden”] },
{ year: 1913, name: “Rabindranath Tagore”, country: “Indien”, works: [“Gitanjali”, “The Home and the World”, “Gora”] },
{ year: 1912, name: “Gerhart Hauptmann”, country: “Tyskland”, works: [“Vävarna”, “Ensam människor”, “Hanneles himmelsfärd”] },
{ year: 1911, name: “Maurice Maeterlinck”, country: “Belgien”, works: [“Pelleas och Melisande”, “Den blå fågeln”, “Visdomen och ödet”] },
{ year: 1910, name: “Paul Heyse”, country: “Tyskland”, works: [“L’Arrabbiata”, “Kinder der Welt”, “Im Paradiese”] },
{ year: 1909, name: “Selma Lagerlöf”, country: “Sverige”, works: [“Gösta Berlings saga”, “Nils Holgerssons underbara resa”, “Jerusalem”] },
{ year: 1908, name: “Rudolf Eucken”, country: “Tyskland”, works: [“Der Sinn und Wert des Lebens”, “Der Kampf um einen geistigen Lebensinhalt”] },
{ year: 1907, name: “Rudyard Kipling”, country: “Storbritannien”, works: [“Djungelboken”, “Kim”, “Precis så-sagor”] },
{ year: 1906, name: “Giosuè Carducci”, country: “Italien”, works: [“Odi barbare”, “Rime nuove”, “Juvenilia”] },
{ year: 1905, name: “Henryk Sienkiewicz”, country: “Polen”, works: [“Quo Vadis”, “Korssriddarna”, “Med eld och svärd”] },
{ year: 1904, name: “Frédéric Mistral”, country: “Frankrike”, works: [“Mireio”, “Calendau”, “Lou Pouèmo dóu Rose”] },
{ year: 1904, name: “José Echegaray”, country: “Spanien”, works: [“El gran Galeoto”, “La esposa del vengador”] },
{ year: 1903, name: “Bjørnstjerne Bjørnson”, country: “Norge”, works: [“Synnöve Solbakken”, “En fallit”, “Over Ævne”] },
{ year: 1902, name: “Theodor Mommsen”, country: “Tyskland”, works: [“Römische Geschichte”, “Römisches Staatsrecht”] },
{ year: 1901, name: “Sully Prudhomme”, country: “Frankrike”, works: [“Stances et poèmes”, “Les Épreuves”, “Le bonheur”] },
];

const [readBooks, setReadBooks] = useState(() => {
const saved = localStorage.getItem(‘readNobelBooks’);
return saved ? JSON.parse(saved) : {};
});

const [searchTerm, setSearchTerm] = useState(’’);
const [sortBy, setSortBy] = useState(‘year-desc’);

useEffect(() => {
localStorage.setItem(‘readNobelBooks’, JSON.stringify(readBooks));
}, [readBooks]);

const toggleRead = (year, author) => {
const key = `${year}-${author}`;
setReadBooks(prev => ({
…prev,
[key]: !prev[key]
}));
};

const filteredLaureates = nobelLaureates.filter(laureate =>
laureate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
laureate.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
laureate.works.some(work => work.toLowerCase().includes(searchTerm.toLowerCase()))
);

const sortedLaureates = […filteredLaureates].sort((a, b) => {
const aKey = `${a.year}-${a.name}`;
const bKey = `${b.year}-${b.name}`;
const aRead = readBooks[aKey];
const bRead = readBooks[bKey];

```
// Ikryssade författare alltid först
if (aRead && !bRead) return -1;
if (!aRead && bRead) return 1;

// Därefter normal sortering
if (sortBy === 'year-desc') return b.year - a.year;
if (sortBy === 'year-asc') return a.year - b.year;
if (sortBy === 'name') return a.name.localeCompare(b.name, 'sv');
return 0;
```

});

const readCount = Object.values(readBooks).filter(Boolean).length;
const totalCount = nobelLaureates.length;
const percentage = Math.round((readCount / totalCount) * 100);

return (
<div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 p-4 md:p-8">
<div className="max-w-6xl mx-auto">
{/* Header */}
<div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
<div className="flex items-center gap-3 mb-4">
<Book className="w-10 h-10 text-amber-600" />
<h1 className="text-3xl md:text-4xl font-bold text-gray-800">
Nobelpristagare i Litteratur
</h1>
</div>

```
      {/* Stats */}
      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-700 font-medium">Din läsning:</span>
          <span className="text-2xl font-bold text-amber-700">
            {readCount} / {totalCount}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-amber-500 to-yellow-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2 text-center">{percentage}% genomläst</p>
      </div>

      {/* Search and Sort */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Sök författare, land eller bok..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-400 focus:outline-none"
          />
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-400 focus:outline-none bg-white"
        >
          <option value="year-desc">Senaste först</option>
          <option value="year-asc">Äldsta först</option>
          <option value="name">Namn A-Ö</option>
        </select>
      </div>
    </div>

    {/* Laureates Grid */}
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {sortedLaureates.map((laureate) => {
        const key = `${laureate.year}-${laureate.name}`;
        const isRead = readBooks[key];
        
        return (
          <div
            key={key}
            className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl ${
              isRead ? 'ring-2 ring-green-400' : ''
            }`}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-amber-600" />
                  <span className="text-2xl font-bold text-amber-600">
                    {laureate.year}
                  </span>
                </div>
                <button
                  onClick={() => toggleRead(laureate.year, laureate.name)}
                  className={`p-2 rounded-lg transition-all ${
                    isRead
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                  }`}
                >
                  <Check className="w-6 h-6" />
                </button>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {laureate.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{laureate.country}</p>
              
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Kända verk:
                </p>
                <ul className="space-y-1">
                  {laureate.works.map((work, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span>{work}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    {filteredLaureates.length === 0 && (
      <div className="bg-white rounded-xl shadow-lg p-12 text-center">
        <Book className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 text-lg">Inga författare hittades</p>
      </div>
    )}
  </div>
</div>
```

);
};
