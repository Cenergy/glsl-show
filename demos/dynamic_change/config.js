import config from '../base.config';

export default async () => {
  const [htmlCode, jsCode, cssCode] = await Promise.all([
    import('!raw-loader!../index.html'),
    import('!raw-loader!./index.frag'),
    import('!raw-loader!../style.css'),
  ]);

  return config(htmlCode, cssCode, jsCode);
};
