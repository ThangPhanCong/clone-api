const api = require('express').Router();
const Glob = require('glob');
const apis = Glob.sync("**/*.api.js");

apis.forEach((subApi) => api.use(require('../../' + subApi)));

api.get('/', (req, res) => {
    return res.json({hello: "you"});
});

module.exports = api;