const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT")
  const nftContract = await nftContractFactory.deploy()
  await nftContract.deployed()
  console.log("Contract deployed to: %s", nftContract.address)

  await (await nftContract.makeAnEpicNFT()).wait()
  console.log("Minted NFT #1")

  // await (await nftContract.makeAnEpicNFT()).wait()
  // console.log("Minted NFT #2")
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
