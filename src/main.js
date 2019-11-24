const vscode = require('vscode')
const GameClasses = [
  'Game',
  'Camera',
  'Cameras',
]

const Methods = [
  'Start',
  'Render',
  'KeyDown',
  'KeyUp',
  'MouseDown',
  'MouseUp',
  'MouseMove',
  'Error',
]

module.exports = function activate(context) {
  const provider1 = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document, position) {

				// get all text until the `position` and check if it reads `console.`
				// and if so then complete if `log`, `warn`, and `error`
				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('__')) {
					return undefined;
				}

				let completes = [];
        Methods.forEach(Method => {
          completes.push(new vscode.CompletionItem(Method + '__', vscode.CompletionItemKind.Function))
        })
			}
		},
		['_']
  );
  const provider2 = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document, position) {

				// get all text until the `position` and check if it reads `console.`
				// and if so then complete if `log`, `warn`, and `error`
				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix === 'CREATE ') {
					return undefined;
				}

				let completes = [];
        GameClasses.forEach(gameClass => {
          completes.push(new vscode.CompletionItem(gameClass, vscode.CompletionItemKind.Module))
        })
			}
		},
		[' ']
  );
  context.subscriptions.push(provider2);
}