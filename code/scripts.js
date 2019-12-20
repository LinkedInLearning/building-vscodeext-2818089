const vscode = require("vscode");

function activate(context) {
  let disposable = vscode.commands.registerCommand('doSomething', function() {
    vscode.window.showInformationMessage('Copied text, commented out lines, preview markdown file');
    vscode.commands.executeCommand('editor.action.clipboardCopyAction');
    vscode.commands.executeCommand('editor.action.addCommentLine');
    vscode.commands.executeCommand('markdown.showPreviewToSide');
  })

  context.subscriptions.push(disposable)

  let term = vscode.commands.registerCommand('openTerminal', function() {
    let terminal = vscode.window.createTerminal({name: 'My terminal'});
    terminal.show();
    terminal.sendText('git status');
  })


}
exports.activate = activate;

module.exports = {
  activate
}