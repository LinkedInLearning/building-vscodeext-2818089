const vscode = require("vscode");

function activate(context) {
  let disposable = vscode.commands.registerCommand('doSomething', function() {
    vscode.window.showInformationMessage('This is a disposable window');
  })

  context.subscriptions.push(disposable)
}
exports.activate = activate;

module.exports = {
  activate
}