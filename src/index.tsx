import semver from 'semver';
import { Application } from 'typedoc';
import { JSX } from 'typedoc';

import script from './script';
import style from './style';
import { iife } from './utils';

/**
 * Loads the default TypeDoc plugin [hook](https://github.com/TypeStrong/typedoc/blob/master/internal-docs/custom-themes.md#hooks-v0228).
 *
 * @param app - Reference to the application that is loading the plugin.
 */
export function load(app: Application): void {
  // https://github.com/TypeStrong/typedoc/issues/2153
  const hasNativeSupport = semver.gte(Application.VERSION, '0.24.5');

  app.renderer.hooks.on('body.end', () => (
    <>
      <style>
        <JSX.Raw html={style.trim()} />
      </style>

      {!hasNativeSupport && (
        <script>
          <JSX.Raw html={iife(script)} />
        </script>
      )}
    </>
  ));
}
