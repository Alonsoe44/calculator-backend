const askUserNumbers = require("./askUserNumbers");
const parseToNumber = require("./parseToNumbers");

const [userNumberOne, userNumberTwo] = require("./getInputByModifiers");

const nums = parseToNumber(userNumberOne, userNumberTwo);
askUserNumbers(...nums);
