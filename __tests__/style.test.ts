import style from '../src/style';

describe('style', () => {
  it('matches CSS', () => {
    expect(style).toMatchInlineSnapshot(`
      "
      pre {
        position: relative;
      }
      pre > button {
        background: var(--code-background);
        border-radius: 0.8em;
        border: 0.1em solid var(--color-accent);
        cursor: pointer;
        height: 30px;
        opacity: 0;
        position: absolute;
        right: 5px;
        top: 5px;
        transition: all 0.2s ease-out;
        user-select: none;
      }
      pre:hover > button {
        opacity: 1;
      }
      pre > button:active,
      pre > button:focus,
      pre > button:hover {
        background: var(--color-background);
        border-color: var(--color-text-aside);
        opacity: 1;
        outline: 0;
      }
      "
    `);
  });
});
