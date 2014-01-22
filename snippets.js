/*
 *  
 */

// Is ace a psuedo global? i.e. as should be loaded before this file is includes
// This file should be included before the js file in which your editor is defined
var ace_snippets = function(editor, session, mode, snippetText) {
	ace.require('ace/ext/language_tools');
	editor.setOptions({
		enableBasicAutocompletion: true,
		enableSnippets: true
	});

	var snippetManager = require("ace/snippets").snippetManager;

	var id = session.$mode.$id || "";
	var m = snippetManager.files[id];
	
	m.scope = mode;
	m.snippetText = snippetText;
	m.snippets = snippetManager.parseSnippetFile(m.snippetText, m.scope);
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
	"	}",
	""
].join(eol);

// OR

var exampleSnippetText2 = "snippet test\n\
	var test = function() {\n\
		return \"test\"\n\
	}\n";



/*
 *  Custom snippet text strings that you can use in your implementation
 *  To use more than one, simple concatinate them together 
 *  i.e. var mySnippetText = JsExtensionSnippetText + angularSnippetText + yourCustomSnippetText
 */

var JsExtensionSnippetText = [
	"snippet log",
	"	console.log(${1:})",
	""
].join(eol);


var angularSnippetText = [
	"snippet angular",
	"	angular.module(\"${1:modularName}\", [])",
	"snippet service",
	"	${1:module}.service(\"${2:ServiceName}\", [${3:$http}, function(${3:$http}) {",
	"		${4:Define service here}",
	"	}])",
	"snippet factory",
	"	${1:myModule}.factory('${2:myFactory}', [\"${3:$http}\"], function(${3:$http}) {",
	"		return {",
	"			${4:Enter business logic here}",
	"		}",
	"	});",
	"snippet controller",
	"	${1:myModule}.controller(\"${2:ControllerName}\", [$scope, function($scope) {",
	"		// ${3:Enter business logic here}",
	"	}]);",
	"snippet directive",
	"	${1:myModule}.directive(\"${2:DirectiveName}\", [$dep, function($dep) {",
	"		// ${3:Enter business logic here}",
	"	}])",
	"snippet constant",
	"	${1:myModule}.constant({\"key\", \"${CONSTANT_VALUE}\"})",
	"snippet config",
	"	${1:module}.config(function($routeProvider) {",
	"		$routeProvider",
	"			.when(\"/\", {",
	"				controller: ${2:MyController}",
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
	"snippet %for",
	"	<% for(var i = 0; i < ${1:obj}.length; i++) { %>",
	"		${1:obj}[i]",
	"	<% } %>",
	"snippet %forIn",
	"	<% for(var ${1:item} in ${2:someObj}) { %>",
	"		${2:someObj}[${1:item}]",
	"	<% } %>",
	"snippet %forIn",
	"	<% if(${1:condition == ${2:condition}) { %>",
	"		${3:expression}",
	"	<% } %>",
	"snippet %include",
	"<% include ${1:file} %>",
	""
].join(eol);

