import typescript from 'rollup-plugin-typescript2';
// import css from 'rollup-plugin-css-porter';
import postcss from 'rollup-plugin-postcss'
import alias from 'rollup-plugin-alias';

export default {
  input: 'src/main_module.ts',
  external: [
    'codemirror',
    'CodeMirror',
    'codemirror/mode/javascript/javascript',
    'codemirror/addon/fold/foldcode',
    'codemirror/addon/fold/foldgutter',
    'codemirror/addon/fold/brace-fold',
    'codemirror/lib/codemirror.css',
    'codemirror/addon/lint/lint.css',
    'codemirror/addon/fold/foldgutter.css',
    'lodash',
    'lodash/debounce',
    'lodash/throttle',
    'gl-matrix'
  ],
  plugins: [
    typescript(/*{ plugin options }*/),
    alias({
      resolve: ['.js', '.ts', '.css'],
      neuroglancer: 'src/neuroglancer'
    }),
    postcss({
      extract: true,
      extensions: ['.css']
    })
  ],
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};
