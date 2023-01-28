/**
 * Calls the plugin script.
 */
export default function init() {
  const text = 'Copy';
  const template = document.createElement('button');
  template.type = 'button';
  template.ariaLabel = 'Copy code to clipboard';
  template.innerText = text;
  document.querySelectorAll('pre').forEach((pre) => {
    const button = template.cloneNode(true) as HTMLButtonElement;
    button.addEventListener('click', function () {
      /* istanbul ignore next */
      const code = pre.querySelector('code')?.innerText;
      /* istanbul ignore if */
      if (code) {
        navigator.clipboard.writeText(code.trim());
      }
      button.innerText = 'Copied';
      setTimeout(() => {
        button.blur();
        button.innerText = text;
      }, 2e3);
    });
    pre.appendChild(button);
  });
}
