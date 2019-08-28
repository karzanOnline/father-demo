export default {
    entry: 'src/index.js',
    esm: 'rollup',
    cjs: 'rollup',
    umd: {
        name: 'duningtest',
        globals: {
            'react': 'React'
        }
    },
    doc: {
        base: '/father-demo'
    }
}