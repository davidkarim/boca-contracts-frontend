// export const metadata = {
//     title: 'Frequently Asked Questions - Boca Contracts',
//     description: 'Page description',
//   }

"use client"

import Link from 'next/link'
import { Divider, Image, Header } from 'semantic-ui-react'

  export default function Article() {
    const title = 'Smart Contract Basics';
    const author = 'David Karim';
    const authorTitle = 'Founder';
    const authorAvatar = '/images/david-k-test-avatar.jpeg';
    const publishedDate = 'April 19, 2024';
    const articleImage = '/images/smart-contract-abstract.jpeg';

    let articleText = [];
    articleText.push("In the evolving landscape of digital technology, Web3 smart contracts stand out as a revolutionary tool, driving the transition from traditional, centralized systems to decentralized solutions. Smart contracts are self-executing contracts with the terms of the agreement directly written into lines of code. These contracts run on blockchain technology, which ensures decentralization, transparency, and immutability.");
    articleText.push("Smart contracts offer several compelling advantages that address inherent issues in traditional contracting, such as the need for trust and the inefficiency of intermediaries. They automate processes and ensure that all parties to a contract adhere strictly to the agreed-upon terms without the need for intermediaries. This automation not only cuts costs but also significantly reduces the time involved in verifying and enforcing agreements.");
    articleText.push("One of the key features of smart contracts is their trustworthiness. They operate on blockchain networks like Ethereum, which provides a decentralized environment where changes to the contract are virtually impossible once deployed. This immutability ensures that neither party can alter the terms after the agreement, enhancing trust among participants. Furthermore, the use of cryptographic techniques secures the transactions and guards against fraud and breaches.");
    articleText.push("Smart contracts are currently being utilized in various sectors. In finance, they underpin the functionality of cryptocurrencies and are essential for creating decentralized finance (DeFi) applications, enabling everything from loans to insurance without the need for banks or brokers. Real estate transactions can also be streamlined with smart contracts, which can automate property sales and lease agreements, ensuring that payments are only processed once certain conditions are met.");
    articleText.push("Looking ahead, the potential applications for smart contracts are vast. One promising area is in supply chain management, where smart contracts could track products from manufacture to delivery, ensuring compliance with contract terms at every step without human oversight. Furthermore, as Internet of Things (IoT) devices become more prevalent, smart contracts could manage microtransactions between devices, facilitating a more seamless and automated interaction.");
    articleText.push("Web3 smart contracts represent a significant shift in how we conceive of and execute agreements. By enhancing security, reducing reliance on intermediaries, and improving the efficiency of transactions, smart contracts are set to transform a wide array of industries. As technology continues to evolve, the scope for their application will only expand, marking a pivotal advancement in the use of digital agreements.");

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
  