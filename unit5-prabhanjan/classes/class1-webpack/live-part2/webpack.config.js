const path = require('path'); // it is node.js path module


module.exports = {
  entry: './src/index.js', 
  output: {
    // path: path.resolve(__dirname, 'dist'),


    // resolve & join both works --- sir said
    path: path.resolve(".", "build"), //folder
    filename: 'bundle.js',
  },
  mode: "development",  // by using this line --> warning will be gone

//   mode: "production" 

module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    //   { test: /\.ts$/, use: 'ts-loader' },
    ],
  },

};

