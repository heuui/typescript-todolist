# Ohjelmistokehityksen teknologioita - kurssin seminaarityö

## TODO List TypeScriptillä - ES6, Node.js, Mongo

## Projektin tarkoitus ja lähtökohdat
Projektin tarkoituksena oli lähteä opettelemaan uutta kieltä, TypeScriptia. Opettelun lähtökohtana oli lähteä kääntämään JavaScriptillä luotua TODO List sovellusta TypeScriptillä sekä tutkia näiden kielien eroavaisuuksia samanlaisen sovelluksen luomisessa. 

JavaScript projektissa, käyttäjä syöttää todo -olion atrribuuttien arvot, eli date ja description ja Add -nappia painamalla lisää syötetyn todon listaan. Clear all -painiketta painamalla listan kaikki todo -oliot poistuvat. Tämän koin hyvin epäkytännölliseksi ominaisuudeksi sovelluksessa, joten halusin TypeScript projektiini ominaisuuden, missä yksittäisiä todo -olioita voidaan poistaa listasta, ilman että kaikki listan oliot poistuvat. TypeScript sovellukseeni tavoitteena oli myös kuvata todo -oliot taulukossa eli table elementissä.


## Työskentelyvaiheet 

Aloitin perehtymisen tutustumalla kieleen TypeScript Tutorial -sivustolla. Tutustuin myös eri internet lähteisiin, missä selitettiin JavaScriptin ja TypeScriptin eroavaisuuksia. GeeksforGeeks sivuston mukaan, TypeScript kehitettiin korvaamaan JavaScriptin puutteita objekti- ja palvelin lähtöisessä ohjelmoinnissa. TypeScript ja JavaScript voidaankin erottaa juuri näiden tarkoitusten pohjalta. TypeScriptin ollessa objekti orientoitunut ohjelmointikieli, Ja-vaScript on prototyyppeihin perustunut ohjelmointikieli. Kuitenkin, kaikki JavaScriptillä tuotetut koodit ovat käännettävissä TypeScriptillä. (Dubey) Tämän eroeroavaisuuden huomasinkin perehtyessäni TypeScriptiin sekä myöhemmin tutoriaalia seuratessani ja siitä oppiessa-ni. 


TODO List -sovellusta aloittaessani, tahdoin luoda projektin videotutoriaalin pohjalta, sillä koin tarvitsemani varsinaisen esimerkin sekä samalla niin sanotun opettajan, kuka esimer-kin pohjalta selittää kuinka eri toiminnot luodaan ja miten ne toimivat. Koen itse tarvitsemani uuden kielen oppimisessa varsinaisia esimerkkejä ja selityksiä eri syntaksien takana. 
Videotutoriaaliksi valitsin Web Dev Simplified käyttäjän videon ”How To Build Your First TypeScript Project – TODO List Application”. Videossa henkilö lähtee aivan alkeista liikkeelle projektin kanssa ja selittää vaihe vaiheelta mitä hän tekee ja miksi. Tämä avasi paljon kuinka eri osat koodissa toimivat keskenään ja miten eri muuttujat ja funktiot määritellään. Videossa käydään läpi objektien määrittelyä, listan luontia, objektin luomista sekä local storageen tallentamista ja sieltä tietojen hakemista. Videossa käytiin läpi myös TypeScript projektin luomisprosessia, sekä tiedostorakennetta. 


Lähdin jatkamaan videon pohjalta luotua sovellusta lisäämällä todo- objektiin date attribuutin sekä lisäsin sovellukseen todo -objektin poistofunktion. Tein myös HTML -ja CSS-tiedostoihin muutoksia. Poistofunktioon etsin internetistä lähteitä ja kokeilin eri lähteiden oppeja objektin poistamiseen, tuloksetta. Koin paljon hankaluuksia poistofunktion toiminnallisuuden kanssa, enkä saanut monien yrityksien ja lähteiden avulla funktiota toimimaan. Eri lähteiden tutkimiseen ja koodin luomiseen minulla meni useita tunteja aikaa. Opin kuitenkin eri lähteistä paljon, myös toiminnallisuuksia mitä en projektiani varten tarvinnut. Lopulta, poistofunktion luominen onnistui Borislav Hedzhievin blogilähteen avulla, missä objekti poistetaan sen indexin perusteella. Funktion luominen oli lopulta hyvin yksinkertaista ja loogista, mutta ratkaisun löytäminen kesti omalla kohdalla vain hyvin kauan. 

JavaScriptillä tutotetussa TODO List sovelluksessa, Todo List esitettiin HTML table-elementissä, mitä yritin saada toteutettua myös TypeScript projektiini. Etsin tähän tietoa lukuisista eri lähteistä, kuinka TypeScriptissä käyttäjän syöttämät objektit voidaan, kuvata table-elementissä. Löytämäni lähteet kuitenkin kuvasivat kuinka elementti luotaisiin käyttäen Angular ohjelmistokehystä yhdessä TypeScriptin kanssa, mitä en halunnut projektissani käyttää. Lähteitä löytyi myös kovakoodatun datan syöttämisestä table-elementtiin. Löytämieni lähteiden perusteella ne osannut soveltaa oppimaani haluamani toiminnon toteuttamiseen. 


## Havaitut eroavaisuudet


## Käytetyt kirjastot ja tekniikat


## Arkkitehtuurikaavio


