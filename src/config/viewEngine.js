const viewEngine = (app) => {
    // Set the view engine to EJS
    app.set("view engine", "ejs");

    // Specify the directory where templates are stored
    app.set("views", "./src/views");
};

module.exports = viewEngine;
