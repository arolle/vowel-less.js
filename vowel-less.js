/*

Applied to a site, this Javascript deletes nearly
all vowels from a website. With a little exercise, can you still read that website?

*/
/* removes any kind of vowels (and umlauts) from a string */
function removeVowels(text) {
	var text = text + '',// cast to string
		parts = text.split(/(\w+)/);
	parts.forEach(
		function (val, i) {
			if (val.length < 2 || val.match(/[^\w]/)) {return;}
			var newText = val.replace(/[aeiouäåáâàéêèìöòüù]+/ig,'');
			if (newText.length > 0) {// replace if text won’t disappear
				parts[i] = newText;
			};
		}
	);
	return parts.join("");
}
/*
 * implementing:
 * http://www.mrc-cbu.cam.ac.uk/people/matt.davis/cmabridge/
 */
function shuffleLettersInWord(text) {
	var text = text + '',// cast to string
		parts = text.split(/(\w+)/);
	parts.forEach(
		function (val, i) {
			if (val.length < 4 || val.match(/[^\w]/)) {return;}
			parts[i] = val.charAt(0)
				+ val.substring(1,val.length-1).split("")
					.sort(
						function(){
							return (Math.round(Math.random())-0.5);
						}
					).join("")
				+ val.charAt(val.length-1);
		}
	);
	return parts.join("");
}
/**
 * TODO implement
 * http://xkcd.com/1031/
 * 
 */


/*
findAndReplace() is a modified copy of
http://james.padolsey.com/javascript/find-and-replace-text-with-javascript/

	Applies the callback function to all text-node-parts of the children of searchNode
*/
function findAndReplace(callback, searchNode) {
	if (typeof callback !== 'function') {//+-
		// Throw error here if you want...
		return;
	}
	var childNodes = (searchNode || document.body).childNodes,//-
		cnLength = childNodes.length,
		excludes = 'html,head,style,title,link,meta,script,object,iframe,pre,code,kbd';//+
	while (cnLength--) {
		var currentNode = childNodes[cnLength];
		if (currentNode.nodeType === 1 &&
			(',' + excludes + ',').indexOf(',' + currentNode.nodeName.toLowerCase() + ',') === -1) {//+
			arguments.callee(callback, currentNode);//-+
		}
		if (currentNode.nodeType !== 3) {//-
			continue;
		}
		var parent = currentNode.parentNode,
			frag = (function(){
				var html = callback.call(this, currentNode.data),
					wrap = document.createElement('div'),
					frag = document.createDocumentFragment();
				wrap.innerHTML = html;
				while (wrap.firstChild) {
					frag.appendChild(wrap.firstChild);
				}
				return frag;
			})();
		parent.insertBefore(frag, currentNode);
		parent.removeChild(currentNode);
	}
}
function bookmarklet(val)
{
	var callback = null;
	switch(val){
		case "no vowels": callback = removeVowels; break;
		case "shake letters": callback = shuffleLettersInWord; break;
		default: break;
	}
	console.log(typeof callback);
	if (typeof callback == "function"){
		findAndReplace(callback);
		document.title = callback(document.title);
	}
}
