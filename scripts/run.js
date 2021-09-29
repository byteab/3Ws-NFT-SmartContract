const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT")
  const nftContract = await nftContractFactory.deploy()
  await nftContract.deployed()
  console.log("contract deployed to %s ", nftContract.address)

  try {
    for (let index = 0; index < 200; index++) {
      await (await nftContract.makeAnEpicNFT()).wait()
      await (await nftContract.makeAnEpicNFT()).wait()
    }
  } catch (error) {
    console.log(error)
  }
  let totalNFTs = await nftContract.getNFTsMintedSoFar()
  console.log('total nfts ', totalNFTs.toNumber())
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain()
