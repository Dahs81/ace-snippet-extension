##ace-snippet-extension

This is a simple plugin that makes ace snippets easy and extendable.

### Installation

```
bower install ace-snippet-extension
```

OR

```
git clone https://github.com/Dahs81/ace-snippet-extension.git
```

### Usage
First, make sure that you reference the snippets.js file in your html page

```
<script type="text/javascript" src="/bower/ace/ace.js">
<script type="text/javascript" src="/bower/ace-snippet-extension/snippets.js">
<script type="text/javascript" src="/js/editor.js">
```

Be sure that the snippets.js file is after ace.js and before the file which you implement the editor.

### Setting up the editor and using the plugin

```
var editor = ace.edit('#editor');

...

ace_snippets(ace, editor, 'javascript', snippetText);

var eol = '\n';
// snippetText could come from another file
var snippetText = [
    "snippet log",
    "   console.log(${1:});"
].join(eol);
