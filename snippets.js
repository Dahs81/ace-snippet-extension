/*
 *  
 */

ace.require('ace/ext/language_tools');

// Is ace a psuedo global? i.e. as should be loaded before this file is includes
// This file should be included before the js file in which your editor is defined
var ace_snippets = function(editor, session, mode, snippetText) {
	var snippet = setup(editor, session, mode, snippetText);
	snippet.manager.register(snippet.m.snippet, snippet.m.scope);
};

var getNames = function (editor, session, mode, snippetText) {
	var snippet = setup(editor, session, mode, snippetText),
		names = [];

	for (var i = 0; i < snippet.m.snippet.length; i++) {
		names.push(snippet.m.snippet[i].name);
	}

	return names;
};

var getContent = function (editor, session, mode, snippetText) {
	var snippet = setup(editor, session, mode, snippetText),
		content = [];

	for (var i = 0; i < snippet.m.snippet.length; i++) {
		content.push(snippet.m.snippet[i].content);
	}

	return content;
};

/*
 *  Helper function that sets up the snippet code
 */
function setup(editor, session, mode, snippetText) {
	editor.setOptions({
		enableBasicAutocompletion: true,
		enableSnippets: true
	});

	var snippetManager = require("ace/snippets").snippetManager;

	var id = session.$mode.$id || "";
	var m = snippetManager.files[id];
	
	m.scope = mode;
	m.snippetText = snippetText;
	m.snippet = snippetManager.parseSnippetFile(snippetText, m.scope);

	return {
		manager: snippetManager,
		id: id,
		m: m
	};
}

// End of line character
var eol = '\n';

/*
 *  Custom snippet text strings that you can use in your implementation
 *  To use more than one, simple concatinate them together 
 *  i.e. var mySnippetText = JsExtensionSnippetText + angularSnippetText + yourCustomSnippetText
 */

var JsExtensionSnippetText = [
	"snippet log",
	"	console.log(\"${1:}\")",
	""
].join(eol);


var angularSnippetText = [
	"snippet angular",
	"	angular.module(\"${1:modularName}\", [])",
	"snippet service",
	"	${1:module}.service(\"${2:ServiceName}\", [${3:\\$http}, function(${3:\\$http}) {",
	"		${4:Define service here}",
	"	}])",
	"snippet factory",
	"	${1:myModule}.factory('${2:myFactory}', [\"${3:\\$http}\"], function(${3:\\$http}) {",
	"		return {",
	"			${4:Enter business logic here}",
	"		}",
	"	});",
	"snippet controller",
	"	${1:myModule}.controller(\"${2:ControllerName}\", [\"\\$scope\", function(\\$scope) {",
	"		// ${3:Enter business logic here}",
	"	}]);",
	"snippet directive",
	"	${1:myModule}.directive(\"${2:DirectiveName}\", [\"${3:dep}\", function(${3:dep}) {",
	"		// ${4:Enter business logic here}",
	"	}])",
	"snippet constant",
	"	${1:myModule}.constant({\"key\", \"${2:value}\"})",
	"snippet config",
	"	${1:module}.config(function(\\$routeProvider) {",
	"		\\$routeProvider",
	"			.when(\"/\", {",
	"				controller: ${2:MyController},",
	"				templateUrl: ${3:url}",
	"			}",
	"			.otherwise({ redirectTo: \"/\" })",
	"	});",
	"snippet when",
	"	.when(\"/\", {",
	"		controller: ${1:MyController}",
	"		templateUrl: ${2:url}",
	"	}",
	""
].join(eol);


var ejsSnippetText = [
	"snippet efor",
	"	<% for(var i = 0; i < ${1:obj}.length; i++) { %>",
	"		${1:obj}[i]",
	"	<% } %>",
	"snippet eforin",
	"	<% for(var ${1:item} in ${2:someObj}) { %>",
	"		${2:someObj}[${1:item}]",
	"	<% } %>",
	"snippet eif",
	"	<% if(${1:condition} == ${2:condition}) { %>",
	"		${3:expression}",
	"	<% } %>",
	"snippet einclude",
	"	<% include ${1:file} %>",
	""
].join(eol);