# vowel-less.js (yes it rhymes)

"r y bl t rd ths shrt phrs?" (Are you able to read this short phrase?)  
If not improve that!

Grab that link to you bookmarks toolbar. Visit a text heavy site (e.g. [Wikipedia](http://en.wikipedia.org/)) and click that bookmark! Have fun reading.	

<a href="javascript:(function(){var%20head=document.getElementsByTagName('head')[0],script=document.createElement('script');script.type='text/javascript';script.src='https://raw.github.com/arolle/vowel-less.js/master/vowel-less.js?'+Math.floor(Math.random()*99999);head.appendChild(script);})();void(0)/*github.com/arolle*/" style="border:1px solid #CCC;background-color:#FFD;padding:.5em;margin:0.5em;border-radius:20px;font-weight:bold;display:inline;text-align:center;">no&nbsp;vowels</a>

The bookmarklet calls the `vowel-less.js` javascript file. That removes all vowels (and vowel like) characters from an HTML document.

## languages
The bookmarklet works for the languages:

- English (`aeiou`)
- Scottish (`aeiouàìòù`)
- French (`aeiouáâàéêèù`)
- German (`aeiouäöü`)
- Swedish (`aeiouåäö`)

Help to expand that list!

## credits
Thanks to [James Padolsey](https://github.com/padolsey/) for his work on [Find and replace text with JavaScript](http://james.padolsey.com/javascript/find-and-replace-text-with-javascript/). It lead to the function `findAndReplace()`.

## TODO

- remove vowels from certain attributes (e.g. `alt, title, value, placeholder`)