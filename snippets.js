/*
 *  
 */

// Is ace a psuedo global? i.e. as should be loaded before this file is includes
// This file should be included before the js file in which your editor is defined
var ace_snippets = function(ace, editor, mode, snippetText) {
	ace.require('ace/ext/language_tools');
	editor.setOptions({
		enableBasicAutocompletions: true,
		enableSnippets: true
	});

	var snippetManager = require("ace/snippets").snippetManager;

	var id = editor.getSession().$mode.$id || "";
	var m = snippetManager.files[id];

	m.scope = mode;
	m.snippetText = snippetText;
	m.snippets = snippetManager.parseSnippetFile(m.snippets, m.scope);
	snippetManager.register(m.snippets, m.scope);
};

/* You should include a string such as this to overwrite the default snippets
 * This can be done either in the file you define your editor in or in another file and 
 * then included in a script tag before you the file in which are defining your editor
 */

var eol = '\n';

// If you go this, be sure to include the eol newline character
var exampleSnippetText1 = [
	"snippet test",
	"	var test = function() {",
	"		return \"test\"",
	"	}"
].join(eol);

// OR

var exampleSnippetText2 = "snippet test\n\
	var test = function() {\n\
		return \"test\"\n\
	}\n";


var JsExtensionSnippetText = [
	"snippet log",
	"	console.log(${1:})"
].join(eol);
