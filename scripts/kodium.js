function injectCSS(css) {
  css = css.split('\n')
    .map(line => line.endsWith(';') ? line.replace(/;$/, ' !important;') : line)
    .join('\n');
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  document.head.append(style);
}

const css = `
  :lang(ko) .section-content h1,
  :lang(ko) .section-content h3,
  :lang(ko) .section-content h4,
  :lang(ko) .section-content p {
    font-family: "Apple SD Gothic Neo",-apple-system,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #404040;
  }

  :lang(ko) .section-content h1 {
    font-size: 36px;
    line-height: 1.2;
    margin-bottom: 30px;
  }

  :lang(ko) .section-content h3 {
    font-size: 28px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  :lang(ko) .section-content h4 {
    font-size: 22px;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  :lang(ko) .section-content p {
    font-size: 18px;
    line-height: 1.6;
  }

  :lang(ko) .section-content li {
    font-size: 18px;
    line-height: 1.6;
  }

  :lang(ko) .section-content pre {
    margin-top: 30px;
  }

  :lang(ko) .section-content blockquote {
    font-size: 18px;
    line-height: 1.6;
    color: #777;
    border-left-color: #777;
  }
`;
injectCSS(css);
