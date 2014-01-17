##ace-snippet-extension

This is a simple plugin that makes ace snippets easy and extendable.

**NOTE: In order to make this work, you MUST use a newer version of ace.**
The 1.1.1 stable version of ace and ace-builds do not have support for snippets or autocompletion.  I recommend using a specific commit rather than pointing to master.  If the master branch ever changes it's API, this could break your code.
I installed:

```
bower install --save ace-builds#b2f8bf1e745250596afea5b39c70b94421af906d
```

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
<script type="text/javascript" src="/bower/ace/ace.js"></script>
<script type="text/javascript" src="/bower/ace-snippet-extension/snippets.js"></script>
<script type="text/javascript" src="/js/editor.js"></script>
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

### Sample Project
I created a sample node project that using this module.  Check it out at:
https://github.com/Dahs81/ace-snippet-ext-example

