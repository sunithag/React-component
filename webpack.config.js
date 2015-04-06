module.exports = {
    entry: "./components/main.jsx",
    output: {
        path:"./build",
        filename: "bundle.js"
    },
    module: {
	   loaders: [
           { test: /\.jsx$/, loader:"jsx-loader" }
	    ]
    }
};
