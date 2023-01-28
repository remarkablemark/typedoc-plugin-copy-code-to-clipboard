/**
 * @jest-environment jsdom
 */
import script from '../src/script';

jest.useFakeTimers();

describe('script', () => {
  it('does not throw if elements do not exist', () => {
    script();
  });

  it('renders button', () => {
    document.body.innerHTML = '<pre></pre>';
    script();
    const button = document.querySelector('pre button') as HTMLButtonElement;
    button.click();
    jest.runOnlyPendingTimers();
  });
});
