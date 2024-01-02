import esbuild from 'esbuild';

const baseConfig = {
  entryPoints: ['lib/index.ts'],
  outdir: 'dist',
  bundle: true,
  minify: true,
  sourcemap: true,
};

Promise.all([
  esbuild.build({
    ...baseConfig,
    format: 'cjs',
    outExtension: { '.js': '.cjs' },
  }),

  esbuild.build({
    ...baseConfig,
    format: 'esm',
  }),
]).catch((error) => {
  console.error(error);
  process.exit(1);
});
