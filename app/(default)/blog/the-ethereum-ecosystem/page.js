// export const metadata = {
//     title: 'Frequently Asked Questions - Boca Contracts',
//     description: 'Page description',
//   }

"use client"

import Link from 'next/link'
import { Divider, Image, Header } from 'semantic-ui-react'

  export default function Article() {
    const title = 'The Ethereum Ecosystem';
    const author = 'David Karim';
    const authorTitle = 'Founder';
    const authorAvatar = '/images/david-k-test-avatar.jpeg';
    const publishedDate = 'April 26, 2024';
    const articleImage = '/images/ethereum-ecosystem.jpeg';

    let articleText = [];
    articleText.push("Ethereum stands as a colossal figure in the landscape of blockchain technology. Initially proposed in 2013 by Vitalik Buterin and launched in 2015, Ethereum introduced the novel concept of a blockchain that could execute more than just financial transactions. Its core innovation, the Ethereum Virtual Machine (EVM), set the stage for decentralized applications (DApps) by allowing developers to write and deploy smart contracts in a Turing-complete environment.");
    articleText.push("The EVM is essentially the backbone of the Ethereum network, providing a sandboxed virtual stack embedded within each full Ethereum node. It enables the execution of bytecode, which is compiled from high-level languages like Solidity—the most popular language for writing Ethereum smart contracts. The EVM is designed to serve as a neutral, deterministic execution environment that ensures the same smart contract will produce the same output across all nodes in the network. This universality is crucial for maintaining consensus across Ethereum’s decentralized architecture.");
    articleText.push("Solidity is a statically typed, high-level language specifically designed for developing smart contracts that run on the EVM. Its syntax is similar to JavaScript, which makes it accessible to a broader range of developers. Solidity allows for the creation of contracts for uses such as voting, crowdfunding, blind auctions, and multi-signature wallets. Each contract written in Solidity is compiled into bytecode and deployed to the blockchain, where it lives immutally.");
    articleText.push("While smart contracts excel at enforcing and executing agreements based on blockchain data, they are inherently 'blind' to the outside world. This limitation is where oracles come into play. Oracles are third-party services that fetch data from external sources and feed it into the blockchain in a trustworthy way. This data can be anything from temperature readings to stock prices, effectively bridging the gap between real-world events and blockchain reactions. This capability is pivotal for many applications of Ethereum smart contracts, such as those in insurance and supply chain management.");
    articleText.push("One of the most exciting advancements in the Ethereum ecosystem is the integration of zero-knowledge proofs (ZKPs). ZKPs allow one party to prove to another that a statement is true without revealing any information apart from the fact that the statement is indeed true. This technology has profound implications for privacy and scalability on the blockchain. Ethereum’s integration of ZKPs, particularly through zk-SNARKs and more recently zk-Rollups, has paved the way for transactions that can be validated without exposing any underlying data, enhancing privacy and reducing the computational load on the network.");
    articleText.push("The Ethereum ecosystem is a dynamic and continuously evolving space, rich with innovation and driven by a community committed to expanding the boundaries of what blockchain technology can achieve. The EVM, Solidity, oracles, and ZKPs represent just a few of the core components that make Ethereum a powerful platform for decentralized applications. As these technologies mature and integrate, they pave the way for a more secure, private, and efficient blockchain future.");

    return (
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
    )
  }
  