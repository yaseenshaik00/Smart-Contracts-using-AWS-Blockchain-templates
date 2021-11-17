let Utils = artifacts.require("./Utils.sol");
let CrowdFundingWithDeadline = artifacts.require("./CrowdFundingWithDeadline.sol");
let TestCrowdFundingWithDeadline = artifacts.require("./TestCrowdFundingWithDeadline.sol");

module.exports = async function(deployer) {
    await deployer.deploy(Utils);
    deployer.link(Utils, CrowdFundingWithDeadline);
    deployer.link(Utils, TestCrowdFundingWithDeadline);
};
