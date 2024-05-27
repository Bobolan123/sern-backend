import e from "express";
import db from "../models/index";
const getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render("homePage.ejs", {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log("error", error);
    }
};

const getCRUD = (req, res) => {
    return res.send('gercrud')
}

module.exports = {
    getHomePage: getHomePage,
    getCRUD
};
