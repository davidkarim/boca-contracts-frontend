// export const metadata = {
//     title: 'Frequently Asked Questions - Boca Contracts',
//     description: 'Page description',
//   }

"use client"

import Link from 'next/link'
import React from 'react'
import { Divider } from 'semantic-ui-react'
import {
    ItemImage,
    ItemGroup,
    ItemContent,
    Item,
  } from 'semantic-ui-react'

  export default function Blog() {

    let articles =[];

    articles.push({
        title: 'Connecting to Web3 applications on mobile with MetaMask',
        description: 'Web3 applications such as bocacontracts require the use of a Web3 wallet in order for you to interact with the blockchain. MetaMask is the most popular Web3 wallet currently in use. On desktop, it is typically installed via a browser extension available on all broswers with the exception of Safari. On mobile, MetaMask can be installed as an app from your device\'s app store.',
        image: '/images/mobile-metamask-abstract.jpg',
        link: '/blog/connect-to-web3-on-mobile-metamask',
        publishedDate: 'June 1, 2024'
    });
    articles.push({
        title: 'The Ethereum Ecosystem',
        description: 'Ethereum stands as a colossal figure in the landscape of blockchain technology. Initially proposed in 2013 by Vitalik Buterin and launched in 2015, Ethereum introduced the novel concept of a blockchain that could execute more than just financial transactions. Its core innovation, the Ethereum Virtual Machine (EVM), set the stage for decentralized applications (DApps) by allowing developers to write and deploy smart contracts in a Turing-complete environment.',
        image: '/images/ethereum-ecosystem.jpeg',
        link: '/blog/the-ethereum-ecosystem',
        publishedDate: 'April 26, 2024'
    });
    articles.push({
        title: 'Smart Contract Basics',
        description: 'In the evolving landscape of digital technology, Web3 smart contracts stand out as a revolutionary tool, driving the transition from traditional, centralized systems to decentralized solutions. Smart contracts are self-executing contracts with the terms of the agreement directly written into lines of code.',
        image: '/images/smart-contract-abstract.jpeg',
        link: '/blog/smart-contract-basics',
        publishedDate: 'April 19, 2024'
    });
    articles.push({
        title: 'Why Blockchain?',
        description: 'Blockchain technology offers several distinct advantages over traditional databases and ledgers that make it an attractive option for a variety of applications. Unlike traditional databases that are managed by a central authority, blockchain is inherently decentralized. This decentralization provides enhanced security and transparency, as every transaction on a blockchain is recorded on a block and across multiple copies of the ledger that are distributed across a network of computers.',
        image: '/images/why-blockchain-abstract.jpeg',
        link: '/blog/why-blockchain',
        publishedDate: 'April 12, 2024'
    });
    articles.push({
        title: 'Basics of Blockchain',
        description: 'Blockchain technology has received widespread attention in recent years, primarily due to its role in powering cryptocurrencies like Bitcoin and Ethereum. At its core, a blockchain is a decentralized and distributed ledger that records transactions across a network of computers.',
        image: '/images/blockchain-abstract.jpeg',
        link: '/blog/basics-of-blockchain',
        publishedDate: 'April 5, 2024'
    });

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1">Boca Contracts Blog</h1>
                    </div>

                    <Divider />

                    <ItemGroup>
                        {articles.map((article, index) => (
                            <React.Fragment key={index}>
                                <Item>
                                    <Link className="ui tiny image" href={article.link}>
                                        <ItemImage src={article.image} />
                                    </Link>
                                    <ItemContent>
                                        <div style={{display: "flex", justifyContent: "space-between"}}>
                                        <span className="text-2xl font-semibold text-gray-400 mb-3">
                                            <Link href={article.link} style={{ color: "white" }}>
                                                {article.title}
                                            </Link>
                                        </span>
                                        <span style={{textAlign: "right"}}>{article.publishedDate}</span>
                                        </div>
                                        
                                        <p>{article.description}</p>
                                    </ItemContent>
                                </Item>
                                <Divider />
                            </React.Fragment>
                        ))}
                    </ItemGroup>

                </div>
            </div>
        </section>
    )
  }
  