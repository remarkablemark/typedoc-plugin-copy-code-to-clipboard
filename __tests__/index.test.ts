import { Application } from 'typedoc';

import { load } from '../src/index';

jest.mock('../src/script', () => 'script');
jest.mock('../src/style', () => 'style');

const { VERSION } = Application;

afterAll(() => {
  Application.VERSION = VERSION;
});

describe('load', () => {
  it.each(['0.24.4', '0.24.5'])(
    'renders markup on "body.end" for typedoc v%s',
    (version) => {
      Application.VERSION = version;
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
      expect(app.renderer.hooks.on.mock.calls[0][1]()).toMatchSnapshot();
    }
  );
});
