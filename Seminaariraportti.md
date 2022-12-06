# Ohjelmistokehityksen teknologioita - kurssin seminaarityö

## TODO List TypeScriptillä 
**ES6, Node.js, Mongo**

## Projektin tarkoitus ja lähtökohdat
Projektin tarkoituksena oli lähteä opettelemaan uutta kieltä, TypeScriptia. Opettelun lähtökohtana oli lähteä kääntämään JavaScriptillä luotua TODO List sovellusta TypeScriptillä sekä tutkia näiden kielien eroavaisuuksia samanlaisen sovelluksen luomisessa. 

JavaScript projektissa, käyttäjä syöttää todo -olion attribuuttien arvot, eli date ja description ja Add -nappia painamalla lisää syötetyn todon listaan. Clear all -painiketta painamalla listan kaikki todo -oliot poistuvat. Tämän koin hyvin epäkäytännölliseksi ominaisuudeksi sovelluksessa, joten halusin TypeScript projektiini ominaisuuden, missä yksittäisiä todo -olioita voidaan poistaa listasta, ilman että kaikki listan oliot poistuvat. TypeScript sovellukseeni tavoitteena oli myös kuvata todo -oliot taulukossa eli table elementissä aivan kuten JavaScript projektissanikin on kuvattu.


## Työskentelyvaiheet 

Aloitin perehtymisen tutustumalla kieleen TypeScript Tutorial -sivustolla. Tutustuin myös eri internet lähteisiin, missä selitettiin JavaScriptin ja TypeScriptin eroavaisuuksia. GeeksforGeeks sivuston mukaan, TypeScript kehitettiin korvaamaan JavaScriptin puutteita objekti- ja palvelin lähtöisessä ohjelmoinnissa. TypeScript ja JavaScript voidaankin erottaa juuri näiden tarkoitusten pohjalta. TypeScriptin ollessa objekti/olio orientoitunut ohjelmointikieli, JavaScript on prototyyppeihin perustunut ohjelmointikieli. Kuitenkin, kaikki JavaScriptillä tuotetut koodit ovat käännettävissä TypeScriptillä. (Dubey) Tämän eroeroavaisuuden huomasinkin perehtyessäni TypeScriptiin sekä myöhemmin tutoriaalia seuratessani ja siitä oppiessani. 


TODO List -sovellusta aloittaessani, tahdoin luoda projektin videotutoriaalin pohjalta, sillä koin tarvitsemani varsinaisen esimerkin sekä samalla niin sanotun opettajan, kuka esimerkin pohjalta selittää kuinka eri toiminnot luodaan ja miten ne toimivat. Koen itse tarvitsemani uuden kielen oppimisessa varsinaisia esimerkkejä ja selityksiä eri syntaksien takana. 
Videotutoriaaliksi valitsin Web Dev Simplified käyttäjän videon ”How To Build Your First TypeScript Project – TODO List Application”. Videossa henkilö lähtee aivan alkeista liikkeelle projektin kanssa ja selittää vaihe vaiheelta mitä hän tekee ja miksi. Tämä avasi paljon kuinka eri osat koodissa toimivat keskenään ja miten eri muuttujat ja funktiot määritellään. Videossa käydään läpi objektien määrittelyä, listan luontia, olion luomista sekä local storageen tallentamista ja sieltä tietojen hakemista. Videossa käytiin läpi myös TypeScript projektin luomisprosessia, sekä tiedostorakennetta. Seurasin videon mukana näitä vaiheita.


Lähdin jatkamaan videon pohjalta luotua sovellusta lisäämällä todo -olioon date attribuutin sekä lisäsin sovellukseen todo -olioon poistofunktion. Tein myös HTML -ja CSS-tiedostoihin muutoksia. Poistofunktioon etsin internetistä lähteitä ja kokeilin eri lähteiden oppeja olion poistamiseen, tuloksetta. Koin paljon hankaluuksia poistofunktion toiminnallisuuden kanssa, enkä saanut monien yrityksien ja lähteiden avulla funktiota toimimaan. Eri lähteiden tutkimiseen ja koodin luomiseen minulla meni useita tunteja aikaa. Opin kuitenkin eri lähteistä paljon, myös toiminnallisuuksia mitä en projektiani varten tarvinnut. Lopulta, poistofunktion luominen onnistui Borislav Hedzhievin blogilähteen avulla, missä olio poistetaan sen indexin perusteella. Funktion luominen oli lopulta hyvin yksinkertaista ja loogista, mutta ratkaisun löytäminen kesti omalla kohdalla vain turhan kauan. Mikäli olisin päässyt tavoitteeseeni nopeammin, olisin kerennyt projektiani jatkaa hyvin pidemmälle. 

Seuraava ongelmani esiintyi olion näyttämisessä table -elementissä. Etsin tähän tietoa lukuisista eri lähteistä, kuinka TypeScriptissä käyttäjän syöttämät oliot voidaan, kuvata table -elementissä. Löytämäni lähteet kuitenkin kuvasivat kuinka elementti luotaisiin käyttäen Angular ohjelmistokehystä yhdessä TypeScriptin kanssa, mitä en halunnut projektissani käyttää. Lähteitä löytyi myös kovakoodatun datan syöttämisestä table -elementtiin. Löytämieni lähteiden perusteella ne osannut soveltaa oppimaani haluamani toiminnon toteuttamiseen. 


## Havaitut eroavaisuudet
Projektia tehdessäni huomasin, kuinka tiedon siirtäminen eri funktioiden välillä tapahtuu eritavalla. Reactissa ja JavaScriptissä yleisesti, data liikkuu eri komponenttien ja funktioiden välillä olioiden ja muuttujien kautta, mutta TypeScriptissä se tapahtuu olioiden tyyppien kautta.

```
// Todo tyypin määritys
type Todo = { 
  id: string,
  description: string
  completed: boolean
  date: string
}
```
TypeScriptilla TODO List sovelluksessani viittasin todo-olion sijasta todo-olion tyyppiin.

```
 // olion luonti 
 const newTodo: Todo = {
  ....
 }
 
 // lisää todo-olio listaan
 function addListItem(todo: Todo) { 
  ....
 }
```

JavaScript projektissani puolestaan viittasin vain olioon luodessani toiminnallisuuksia. Myös internet lähteitä tutkiessani opin, kuinka olion tyyppi voidaan myös määrittää rajapinnan avulla. 

Projektia luodessani, huomasin myös, kuinka syntaksi ilmoitti minulle jo koodia kirjoittaessani, mikäli virhe voisi tapahtua ohjelmaa suorittaessa, esimerkiksi syötetyn arvon tallentamisessa listaan. TypeScriptissä virhetilanteet ovat syntaksin vuoksi paremmin ennakoitavissa ja täten vältettävissä. 


## Pohdinta
Uutena kielenä, TypeScriptin oppiminen tuntui osittain haastavalta, mutta silti mielekkäältä. Saavutin projektini tavoitteet mielestäni hyvin, vaikka table -elementin käyttäjän syöttämillä arvoilla jäikin sovelluksesta uupumaan. Opin myös paljon TypeScriptin syntaksista ja sen eroavaisuuksista JavaScriptiin. Tietoa etsiessäni kohtaamiini ongelmiini, opin myös paljon ylimääräistä, kuin mitä projektini vaati, jonka vuoksi koen kohtaamani ongelmat vain hyvänä asiana. 

Eri kielen projekteja verrattaessani, JavaScriptilla tuotettu ohjelmakoodi vaatii vähemmän rivejä, kun TypeScript ja JavaScript näyttää vielä omin silmin selkeämmältä ja siistimmältä kuin TypeScript. Kuitenkin, nään itseni jatkamassa TypeScriptin opettelemista jatkossa ja luomassa erinäisiä sovelluksia esimerkiksi yhdessä Reactia ja TypeScriptiä käyttämällä. Kyseistä TODO List sovellusta voisi jatkaa esimerkiksi Reactin käyttöön otolla sovelluksessa, mikä voisi olla erinomainen itsenäinen oppimisprojekti. 


## Lähteet
Dubey, B. GeeksforGeeks. (Difference between TypeScript and JavaScript)[https://www.geeksforgeeks.org/difference-between-typescript-and-javascript/]. Luettu 28.11.2022.
Web Dev Simplified. (How To Build Your First TypeScript Project – TODO List Application)[https://www.youtube.com/watch?v=jBmrduvKl5w]. Katsottu 30.11.2022.
Borislav Hadzhiev. 2022. (Remove Element(s) from an Array in TypeScript)[https://bobbyhadz.com/blog/typescript-remove-element-from-array#remove-an-object-from-an-array-in-typescript]. Luettu 3.12.2022. 


