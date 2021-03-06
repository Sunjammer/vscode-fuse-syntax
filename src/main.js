/// <reference path="../node_modules/vscode/typings/index.d.ts" />
import { ExtensionContext, languages } from 'vscode';
import { CompletionProvider } from './lib/completion-provider';

export function activate(context: ExtensionContext) {
  languages.registerCompletionItemProvider('ux', new CompletionProvider('UX'));
  languages.registerCompletionItemProvider('uno', new CompletionProvider('Uno'));
}