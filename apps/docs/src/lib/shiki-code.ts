import {
  createHighlighter,
  type BundledLanguage,
  type BundledTheme,
  type CodeToHastOptions,
} from 'shiki';

export type LoadedLangs = 'tsx' | 'bash' | 'jsx';

const highlighter = await createHighlighter({
  themes: ['one-light', 'one-dark-pro', 'github-dark', 'github-light'],
  langs: ['tsx', 'bash', 'jsx'],
});

type OptionsType = CodeToHastOptions<BundledLanguage, BundledTheme>;

export const getHtmlCode = (code: string, options: OptionsType) => {
  const html = highlighter.codeToHtml(code, options);
  return html;
};

type GetCodeType = {
  code: string;
  lang: LoadedLangs;
};

export const getCode = ({ code, lang }: GetCodeType) =>
  highlighter.codeToHtml(code, {
    lang,
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
  });
