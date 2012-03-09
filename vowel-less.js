/*

Applied to a site, this Javascript deletes nearly
all vowels from a website. With a little exercise, can you still read that website?

*/
/* removes any kind of vowels (and umlauts) from a string */
function removeVowels(text) {
	var text = text + '',// cast to string
		parts = text.split(/\s+/);
	parts.forEach(
		function (val, i) {
			var newText = val.replace(/[aeiouäåáâàéêèìöòüù]+/ig,'');
			if (newText.length > 0) {// replace if text won’t disappear
				parts[i] = newText;
			};
		}
	);
	return parts.join(' ');
}

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

/* finally apply that function (to document.body) */
findAndReplace(removeVowels);
void(document.title = removeVowels(document.title));