# EchoMunge-Web

Collect text from Wikipedia and other web pages and echo back out text with similar patterns. Pure silliness with no practical purpose. A little like Chinese Whispers but not really.

For Node.js, you'll find EchoMunge-Web in npm as *echomunge-web*.

EchoMunge-Web is built on [EchoMunge](https://github.com/rvagg/node-echomunge), the generic silly-text generator.

### Example

```js
var echoMungeWeb = require('echomunge-web')

echoMungeWeb('http://en.wikipedia.org/wiki/Winston_Churchill', function (err, db) {
  if (err) throw err
  for (var i = 0; i < 100; i++)
    console.log(db.makeText({ maxLength: 500, terminate: true }))
})
```

And you might get something like this:

 > Seemingly staggered by Britain stood again at a ball in Crewe House of differing political backgrounds and Dunkirk.
 >
 > They very much liked tea and was also engaged the army.
 >
 > From Stettin in Britain as France would not support an 85-year-old who served as Prime Minister of Supply.
 >
 > Housing Repairs and Rent Act of Marlborough—and A History of British Industries.
 >
 > Future prime minister because he believed that awkward facts have to be a national trend against British industries like cotton came after long consultation with various reforms were discussed as early 1931, before retiring in anticipation of US help was initiated into Freemasonry at Ploegsteert became one of the Labour and Liberal oppositions had come to the King Edward and in January and December 1910 to estimate that the alias Colonel Warden!
 >
 > Historians are divided about abdication.
 >
 > Once again, he saw him as President of the First Lord Hugh Cecil; Timothy West.
 >
 > Baldwin's reply sounding weak and disturbing the House of people, he crossed the floor to sit as far higher political priority than it had proposed surrendering Antwerp, it turned into septicaemia!
 >
 > Another associate wrote letters begging her fourth in having para-military forces back into Germany was eventually invested in the tower of the expense of Defence, making him the most influential people in 1904, Baldwin, Great Contemporaries and many young Winston first developed his fascination with military matters from the Conservative Party withdrew his most memorable war correspondent and magazines.
 >
 > With limited contact with a number of the choice between war on Germany, Churchill became Under-Secretary of State for a leave in England, now part of a battalion headquarters.
 >
 > Following the resignation, they encountered an enemy, published stories, for this might be held to suggest some moral equivalence with her for a certain ingenuity to the front at Ploegsteert became one of the bombing of life, as well as commander of the disastrous Battle of Gallipoli.
 >
 > Portrayals of Churchill and by the Exchequer; his mother, directed operations and Joseph Chamberlain's proposal of extensive tariffs, and several histories in addition, tax allowances were raised, construction of council housing Acts, and in Labour circles never recovered.
 >
 > 11 Group's underground bunker at RAF fighter pilots who won, and Adventures.
 >
 > Already suffering from imports and received much critical acclaim.

**OR** you could use the bundled executable that you'll get if you `npm install echomunge-web -g` to do the same thing:

```sh
$ echomunge-web http://en.wikipedia.org/wiki/Winston_Churchill
```

In fact, you can run the commandline tool without any arguments and it'll collect its data from multiple random Wikipedia pages. There are minimum requirements for content so it'll keep on reading new random pages until it gets enough data. This can make for excellent combinations of totally unrelated articles:

 > Rumors that women who claimed to have accepted only three volunteers, artists, widely viewed as the best keyboard Apple ever made.

Or, you can supply just a Wikipedia page name:

```sh
$ echomunge-web "Winston Churchill"
```

**OR** you can just supply a URL of your choice and it'll collect the content from the `<p>` tags:

```sh
$ echomunge-web http://stackoverflow.com/questions/1884724/what-is-node-js
```

Might yield:

 > While the Node server side javascript, it services the next request to be retrieved, there, and the platform, providing one of the page.
 >
 > Because of the equation.
 >
 > JS is here to stay; other languages are targeting it as an event-driven model, you'd order your food and wait in an HTTP based web based business app developer to choose between the other scripting languages are regarding how Node.
 >
 > - great mental weightlifting.
 >
 > node and multi-threading makes one word to describe node, I'd say.
 >
 > ; other language, hardened C-code like Express makes it a lot like javascript to machine code with JS turned on or off with Node, recycle them periodically, Futures, etc.

*Oh what fun!*

## API

```js
echoMungeWeb(url, callback)
```

Your URL can be any of:

 * **`null`** - it'll do its random Wikipedia page(s) thing
 * **Wikipedia page name** - and it'll use that Wikipedia page
 * **Any URL** - and it'll fetch just that page

Your `callback` receives the following arguments:

 * **`error`** - null if all was fine, otherwise an error string or object
 * **`db`** - an [EchoMunge](https://github.com/rvagg/node-echomunge) object filled with data from the collected pages
 * **`urls`** - an array of URLs that data was collected from
 * **`paragraphs`** - the number of useful `<p>` elements found on the page(s)

## Licence

EchoMunge-Web is Copyright (c) 2012 Rod Vagg [@rvagg](https://twitter.com/rvagg) and licenced under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.