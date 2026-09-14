export interface IEditorOptions {
  theme?: 'vs-dark' | 'light';
  fontSize?: number;
  tabSize?: number;
  readOnly?: boolean;
  minimap?: { enabled: boolean };
}

export const DEFAULT_EDITOR_CONFIG: IEditorOptions = {
  theme: 'vs-dark',
  fontSize: 14,
  tabSize: 2,
  readOnly: false,
  minimap: { enabled: false }
};
