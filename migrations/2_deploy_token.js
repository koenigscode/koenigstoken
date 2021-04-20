const KoenigsToken = artifacts.require("KoenigsToken")

module.exports = async function (deployer, network, accounts) {
  // Deploy MyToken
  await deployer.deploy(KoenigsToken)
  const koenigsToken = await KoenigsToken.deployed()
}
