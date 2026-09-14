import { IExecutionResult } from '@visual-dev-docs/shared-types';
import { ICodeRunner, WebWorkerRunner } from './runners/WebWorkerRunner';
import { PyodideRunner } from './runners/PyodideRunner';
import { ServerRunner } from './runners/ServerRunner';
import { DEFAULT_EDITOR_CONFIG, IEditorOptions } from './EditorConfig';

export class PlaygroundEngine {
  private options: IEditorOptions;
  private web_runner: WebWorkerRunner;
  private pyodide_runner: PyodideRunner;
  private server_runner: ServerRunner;

  constructor(options: Partial<IEditorOptions> = {}) {
    this.options = { ...DEFAULT_EDITOR_CONFIG, ...options };
    this.web_runner = new WebWorkerRunner();
    this.pyodide_runner = new PyodideRunner();
    this.server_runner = new ServerRunner();
  }

  public getOptions(): IEditorOptions {
    return this.options;
  }

  public async executeCode(code: string, language: string): Promise<IExecutionResult> {
    const lang = language.toLowerCase();
    if (lang === 'javascript' || lang === 'typescript' || lang === 'js' || lang === 'ts') {
      return this.web_runner.run(code, lang);
    } else if (lang === 'python' || lang === 'py') {
      return this.pyodide_runner.run(code, lang);
    } else {
      return this.server_runner.run(code, lang);
    }
  }
}

export * from './EditorConfig';
export * from './SandboxMessages';
export * from './runners/WebWorkerRunner';
export * from './runners/PyodideRunner';
export * from './runners/ServerRunner';
