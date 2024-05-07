// export const metadata = {
//     title: 'Frequently Asked Questions - Boca Contracts',
//     description: 'Page description',
//   }

"use client"

import Link from 'next/link'
import { Divider, Image, Header } from 'semantic-ui-react'

export default function Article() {
  const title = 'Basics of Blockchain';
  const author = 'David Karim';
  const authorTitle = 'Founder';
  const authorAvatar = '/images/david-k-test-avatar.jpeg';
  const publishedDate = 'April 5, 2024';
  const articleImage = '/images/blockchain-abstract.jpeg';

  let articleText = [];
  articleText.push("Blockchain technology has received widespread attention in recent years, primarily due to its role in powering cryptocurrencies like Bitcoin and Ethereum. At its core, a blockchain is a decentralized and distributed ledger that records transactions across a network of computers.");
  articleText.push("Bitcoin, introduced in 2009 by the mysterious Satoshi Nakamoto, is the first and most well-known application of blockchain technology. It serves as a peer-to-peer electronic cash system, enabling users to transfer value directly without the need for intermediaries like banks. Transactions on the Bitcoin blockchain are verified by network participants, known as miners, who solve complex mathematical puzzles to validate and add new blocks of transactions to the chain.");
  articleText.push("Ethereum, created by Vitalik Buterin and launched in 2015, is a blockchain platform that goes beyond simple monetary transactions. While Ethereum supports its native cryptocurrency, Ether (ETH), its primary innovation lies in the concept of smart contracts. Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They automatically execute and enforce transactions when predefined conditions are met, eliminating the need for intermediaries and facilitating a wide range of decentralized applications (dApps).");
  articleText.push("At the heart of Ethereum's functionality is the Ethereum Virtual Machine (EVM), a Turing-complete virtual machine that executes smart contracts. The EVM enables developers to write code in high-level programming languages like Solidity, which is then compiled into bytecode and executed on the blockchain. This decentralized execution environment ensures that smart contracts are immutable, transparent, and tamper-resistant, enhancing trust and security in digital transactions.");
  articleText.push("Smart contracts have diverse applications across various industries, including finance, supply chain management, healthcare, and more. They can be used to automate processes, establish trust between parties, and create decentralized autonomous organizations (DAOs). For example, in finance, smart contracts can facilitate peer-to-peer lending, automated payments, and decentralized exchanges, revolutionizing traditional financial services.");
  articleText.push("Despite the numerous advantages, blockchain technology also faces challenges such as scalability, interoperability, and regulatory concerns. Scalability refers to the ability of blockchain networks to handle a large number of transactions efficiently. Interoperability concerns arise from the fragmentation of the blockchain ecosystem, with different platforms and protocols lacking seamless compatibility. Regulatory uncertainty poses risks to the adoption and mainstream acceptance of blockchain technology, as governments grapple with issues related to taxation, data privacy, and legal compliance.");
  articleText.push("Blockchain technology represents a significant shift in how we perceive and interact with digital assets and information. From cryptocurrencies like Bitcoin to decentralized applications powered by Ethereum, the potential applications of blockchain technology are transformative. By understanding the basics of blockchain, including its role in enabling secure and transparent transactions through concepts like smart contracts and the Ethereum Virtual Machine, individuals and businesses can harness its potential to innovate and disrupt traditional industries.");

  return (
    <>
    <meta name="twitter:card" content="summary_large_image"></meta>
    <meta name="twitter:site" content="@bocacontracts"></meta>
    <meta name="twitter:title" content={title}></meta>
    <meta name="twitter:image" content={articleImage}></meta>

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
  