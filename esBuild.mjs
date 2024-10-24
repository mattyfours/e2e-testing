import esbuild from 'esbuild'

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outdir: 'dist',
  platform: 'node',
  target: 'node14',
  external: ['express'],
  format: 'cjs'
})
  .then((e) => {
    console.log('Build Complete')
  })
  .catch((err) => {
    console.error('Build Error:', err)
    return process.exit(1)
  })
