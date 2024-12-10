const path = require('path')

module.exports = {
    mode: 'development', // those are just like the profile in maven's pom.xml in order to isolate the envs of test, dev, and prod
    entry: './src/index.js', 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'), 
        }, 
        port: 3001,
        open: true, 
        hot: true,
        compress: true, 
        historyApiFallback: true, 
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],                
            }
        ]
    }
}