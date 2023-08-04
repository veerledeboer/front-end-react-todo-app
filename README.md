# Todo App

## Inleiding:
In deze opdracht gaan we een Todo App bouwen met behulp van React. De app zal een lijst van taken weergeven, waarbij elke taak een titel, een voltooiingsstatus, een prioriteitsniveau en een omschrijving heeft. We zullen ook functionaliteit toevoegen om nieuwe taken toe te voegen, bestaande taken te verwijderen, de voltooiingsstatus van een taak te wijzigen en de taken te sorteren op basis van hun prioriteitsniveau.

![img.png](src/assets/voorbeeld.png)

## Gedetailleerde opdracht omschrijving:

1. Begin met het maken van een array van taken. Elke taak is een object met de volgende key-value pairs: id, title, completed, priority en description (deze gaan we in de volgende les gebruiken). De id is een unieke identifier voor elke taak. Je mag dit doen adhv een timestamp of gebruik hiervoor [uuid v4](https://www.npmjs.com/package/uuidv4) bibliotheek. De titel is een string die de taak beschrijft. De voltooide key is een boolean die aangeeft of de taak al dan niet is voltooid. De prioriteit is een getal dat het prioriteitsniveau van de taak aangeeft (1 is hoogste prio en 3 de laagste prio). En de beschrijving is een string die de taak beschrijft.


2. Binnen je App component definieer je een aantal state variabelen met behulp van de useState hook. Deze variabelen zijn: todos (de array van taken), inputValue (de huidige waarde van het invoerveld voor het toevoegen van nieuwe taken), priority (het prioriteitsniveau van de nieuwe taak), completed (de voltooiingsstatus van de nieuwe taak) en sorted (een boolean die aangeeft of de taken al dan niet zijn gesorteerd op prioriteit). Deze gaan we in onze functies gebruiken om de taken te beheren.


3. In de return statement van de App component, maak een form element voor het toevoegen van nieuwe taken. Dit form element bevat een input veld, een select veld voor het kiezen van het prioriteitsniveau en een submit knop. Zorg ervoor dat de waarden van deze velden worden gecontroleerd door de bijbehorende state variabelen. Gebruik hiervoor de onChange event handler en de value attributen van de input en select elementen (maak er controlled components van).


4. Maak een functie genaamd addTodo die wordt aangeroepen wanneer het form element wordt ingediend. Gebruik de preventDefault methode om te voorkomen dat de pagina wordt herladen. Gebruik een onSubmit event handler om deze functie aan het form element te koppelen. Deze functie maakt een nieuw todo object met de huidige waarden van de inputValue, priority en completed state variabelen, en voegt dit object toe aan de todos array met behulp van de spread operator. Let er op dat je de id van de nieuwe taak niet vergeet. Deze functie wordt ook gebruikt om de inputValue, priority en completed state variabelen te resetten naar hun beginwaarden. 
-  _Bonus: Check ook of de inputValue niet leeg is voordat je een nieuwe taak toevoegt en reset ook aan het einde de inputValue, priority en completed state variabelen naar hun beginwaarden._


5. Maak een functie genaamd deleteTask die een taak verwijdert uit de todos array. Deze functie neemt de id van de te verwijderen taak als parameter en gebruikt de filter methode om een nieuwe array te maken die alle taken behalve de te verwijderen taak bevat. Ook hier wordt de todos state variabele bijgewerkt met behulp van de spread operator. Je gaat dus door elke taak in de todos array en voert een test uit: als de id van de huidige taak niet gelijk is aan de id die is doorgegeven aan de deleteTask functie, dan wordt de taak opgenomen in de nieuwe array. Als de id's wel overeenkomen, dan wordt de taak uitgesloten van de nieuwe array.


6. Maak een functie genaamd toggleCompleted die de voltooiingsstatus van een taak wijzigt. Deze functie neemt de id van de taak als parameter en gebruikt de map methode om een nieuwe array te maken waarin de voltooiingsstatus van de betreffende taak is omgekeerd. De map methode gaat door elke taak in de todos array en voert een test uit: als de id van de huidige taak gelijk is aan de idParam die is doorgegeven aan de toggleCompleted functie, dan wordt een nieuw object geretourneerd dat alle eigenschappen van de huidige taak bevat (dit wordt gedaan met de spread operator: ...todo), maar met de completed eigenschap omgekeerd (dus als het true was, wordt het false, en vice versa). Zorg dat je de todos state variabele bijwerkt met de nieuwe array.


7. Maak die functies genaamd sortTodos, sortOnHighPriority en sortOnLowPriority die de taken sorteren op basis van hun prioriteitsniveau. De sortTodos functie is een algemene sorteerfunctie die de sortOnHighPriority en sortOnLowPriority als argument kan ontvangen (een callback functie). Deze comparator functie bepaalt de gesorteerde lijst van de taken. Binnen de sortTodos functie wordt eerst een nieuwe array gemaakt die een kopie is van de huidige todos array. Dit wordt gedaan met behulp van de spread operator. Vervolgens wordt de sort methode aangeroepen op deze nieuwe array, met de comparator functie als argument. Ten slotte wordt de setTodos functie aangeroepen om de huidige staat van de todos bij te werken naar de gesorteerde array. De sortOnHighPriority sorteert de taken in oplopende volgorde van prioriteit, wat betekent dat taken met een hogere prioriteit (lagere prioriteitswaarde) eerst komen. Na het sorteren wordt de setSorted functie aangeroepen om de huidige staat van de sorted variabele bij te werken naar false. Andersom sorteert de sortOnLowPriority functie de taken in aflopende volgorde van prioriteit, wat betekent dat taken met een lagere prioriteit (hogere prioriteitswaarde) eerst komen. Na het sorteren wordt de setSorted functie aangeroepen om de huidige staat van de sorted variabele bij te werken naar true.


8. In de return statement van de App component, map over de todos array en geef voor elke taak een li element weer. Dit li element bevat een checkbox voor het wijzigen van de voltooiingsstatus van de taak, een span element voor het weergeven van de titel van de taak, en een button voor het verwijderen van de taak. Gebruik destructuring om de id, titel, voltooide en prioriteit waarden uit elke taak te halen.
- _Bonus: Gebruik de prioriteit om de achtergrondkleur van het li element te veranderen. Gebruik hiervoor een inline style object en de prioriteit als key voor het backgroundColor attribuut. Gebruik ook een ternary operator om de kleur van de tekst te veranderen, afhankelijk van de prioriteit (bijvoorbeeld als de prioriteit 1 is, dan is de tekstkleur rood, bij prioriteit 2 is de tekstkleur oranje, en bij prioriteit 3 is de tekstkleur groen)._
- _Bonus: Gebruik [Phosphor icons](https://phosphoricons.com/) om een flaggentje weer te geven voor taken met een hoge prioriteit, een uitroepteken voor taken met een gemiddelde prioriteit en een vinkje voor taken met een lage prioriteit._
- _Bonus: Gebruik [Phosphor icons](https://phosphoricons.com/) om een pijltje omhoog weer te geven voor taken met een hoge prioriteit, een pijltje omlaag voor taken met een gemiddelde prioriteit en een pijltje naar rechts voor taken met een lage prioriteit._

10. Voeg ook een button toe voor het sorteren van de taken op basis van hun prioriteitsniveau. Deze button roept de sortOnHighPriority of sortOnLowPriority functie aan, afhankelijk van de huidige waarde van de sorted state variabele. een todo lijstje. 
- _Bonus: Gebruik [Phosphor icons](https://phosphoricons.com/) om een prullenbak icoon weer te geven voor de verwijder knop._


11. Maak een functionele component aan voor het weergeven van een taak. Deze component neemt een todo object als parameter en geeft een li element weer met een checkbox, een span element en een button. Gebruik destructuring om de id, titel, voltooide en prioriteit waarden uit het todo object te halen. Gebruik deze component in de App component om de taken weer te geven.

12. Make it pretty! Stijl je app met behulp van CSS. Gebruik hiervoor een CSS bestand en importeer deze in je App component.