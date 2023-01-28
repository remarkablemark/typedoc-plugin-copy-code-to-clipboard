import type { Application } from 'typedoc';

import { load } from '../src/index';

describe('load', () => {
  it('calls hook "body.end" with callback', () => {
    const app = {
      renderer: {
        hooks: {
          on: jest.fn(),
        },
      },
    };
    expect(load(app as unknown as Application)).toBe(undefined);
    expect(app.renderer.hooks.on).toBeCalledTimes(1);
    expect(app.renderer.hooks.on).toBeCalledWith(
      'body.end',
      expect.any(Function)
    );
    expect(app.renderer.hooks.on.mock.calls[0][1]()).toBeTruthy();
  });
});
