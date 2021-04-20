const KoenigsToken = artifacts.require("KoenigsToken")

module.exports = async function (callback) {
  const koenigsToken = await KoenigsToken.deployed()
  let accounts = await web3.eth.getAccounts()
  for (account of accounts) {
    let balance = await koenigsToken.balanceOf(account)
    console.log(`${account}: ${web3.utils.fromWei(balance.toString())}`)
  }
}
