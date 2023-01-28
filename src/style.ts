export default `
pre {
  position: relative;
}
pre > button {
  background: var(--code-background);
  border-radius: 0.8em;
  border: 0.1em solid var(--color-text-aside);
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
  opacity: 0.5;
}
pre > button:hover {
  opacity: 1;
}
pre > button:active, pre > button:focus {
  background: var(--color-background);
  opacity: 1;
  outline: 0;
}
`;
