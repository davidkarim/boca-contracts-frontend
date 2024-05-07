// export const metadata = {
//     title: 'Frequently Asked Questions - Boca Contracts',
//     description: 'Page description',
//   }

"use client"

import Link from 'next/link'
import { Divider, Image, Header } from 'semantic-ui-react'

export default function Article() {
  const title = 'Why Blockchain?';
  const author = 'David Karim';
  const authorTitle = 'Founder';
  const authorAvatar = '/images/david-k-test-avatar.jpeg';
  const publishedDate = 'April 12, 2024';
  const articleImage = '/images/why-blockchain-abstract.jpeg';

  const articleImageFull = "https://www.bocacontracts.com" + articleImage;

  let articleText = [];
  articleText.push("Blockchain technology offers several distinct advantages over traditional databases and ledgers that make it an attractive option for a variety of applications. Unlike traditional databases that are managed by a central authority, blockchain is inherently decentralized. This decentralization provides enhanced security and transparency, as every transaction on a blockchain is recorded on a block and across multiple copies of the ledger that are distributed across a network of computers. This makes it extremely difficult to alter information retroactively without the consensus of the network, significantly reducing the risks of fraud and data tampering.");
  articleText.push("Blockchains also enhance trust among users. In environments where parties may not trust each other fully, blockchain provides a trustworthy infrastructure by ensuring that all transactions are immutably recorded and verifiable by all parties. This characteristic is particularly beneficial for industries like finance, where the integrity of transactions is paramount.");
  articleText.push("One of the most compelling uses of blockchain is smart contracts. Smart contracts are self-executing contracts with the terms of the agreement directly written into lines of code. These contracts automatically enforce and execute the terms of agreements without the need for intermediaries, which can lead to significant cost savings and increased efficiency. For industries ranging from real estate to intellectual property, smart contracts can streamline operations and reduce the potential for disputes.");
  articleText.push("Despite the current high costs associated with using blockchain, primarily due to energy consumption and transaction fees (commonly referred to as gas prices in networks like Ethereum), there are several reasons to consider its potential. The ongoing development in blockchain technology aims to address these issues, with initiatives like Ethereum's upgrade to a proof-of-stake consensus mechanism, which is expected to reduce energy consumption by over 99%.");
  articleText.push("The future of blockchain is promising with the advent of scalability solutions such as layer-two protocols and sharding. These technologies aim to increase the throughput of blockchain networks, making them faster and more cost-effective. As these technologies mature, the cost of executing transactions, including deploying and interacting with smart contracts, is expected to decrease substantially.");
  articleText.push("Additionally, blockchain is poised to revolutionize several other sectors, including supply chain management, healthcare, and voting systems. The technology's ability to provide transparent and immutable records can help in tracking the provenance of goods, managing medical records securely, and ensuring the integrity of electoral processes.");
  articleText.push("Despite its current drawbacks, blockchain technology presents a paradigm shift in how we handle data and execute transactions. Its unique features not only provide enhanced security and transparency but also pave the way for innovations that could transform various industries. As technology evolves and solutions to its current limitations are found, blockchain's full potential will likely be realized, making the investment in learning and developing blockchain solutions worthwhile today.");

  return (
    <>
    <meta name="twitter:card" content="summary_large_image"></meta>
    <meta name="twitter:site" content="@bocacontracts"></meta>
    <meta name="twitter:title" content={title}></meta>
    <meta name="twitter:image" content={articleImageFull}></meta>

    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1">{title}</h1>
          </div>

            <Image circular src={authorAvatar} size="mini" floated="left" />
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <span className="text-xl text-gray-300 mb-1" style={{textAlign: "left"}}> {author}</span>
              <span style={{textAlign: "right"}}>Published {publishedDate}</span>
            </div>
            <div className="text-s text-gray-400 mb-8">{authorTitle}</div>

          <Image src={articleImage} />
          <Divider />

          {/* Iterate over article text */}
          {articleText.map((text, index) => (
            <p key={index} className="text-xl text-gray-400 mb-8">{text}</p>
          ))}

          <Divider />
          </div>
      </div>
    </section>
    </>
  )
}
  