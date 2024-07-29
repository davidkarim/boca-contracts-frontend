"use client"

import Link from 'next/link'
import { Divider, Image, Header } from 'semantic-ui-react'

export default function Article() {
  const title = 'Connecting to Web3 applications on mobile with MetaMask';
  const author = 'David Karim';
  const authorTitle = 'Founder';
  const authorAvatar = '/images/david-k-test-avatar.jpeg';
  const publishedDate = 'June 1, 2024';
  const articleImage = '/images/mobile-metamask-abstract.jpg';

  const articleImageFull = "https://www.bocacontracts.com" + articleImage;

  let articleText = [];
  articleText.push("Web3 applications such as <a href='http://app.bocacontracts.com'>bocacontracts</a> require the use of a Web3 wallet in order for you to interact with the blockchain. MetaMask is the most popular Web3 wallet currently in use. On desktop, it is typically installed via a browser extension available on all broswers with the exception of Safari. On mobile, MetaMask can be installed as an app from your device's app store.");
  articleText.push("Most Web3 wallets, such as MetaMask, come with their own built-in web browser. After installing and launching MetaMask on your mobile device, you will see a browser icon.");
  articleText.push("<Image style='width: 400px' src='/images/metamask-browser.jpg' />");
  articleText.push("Tap on that icon, then type in a web address at the top such as <a href='http://app.bocacontracts.com'>app.bocacontracts.com</a>, and then tap on the Connect Wallet button. Select MetaMask as the wallet and then tap on Connect. This action will now allow you to interact with the blockchain.");
  articleText.push("<Image style='width: 400px' src='/images/metamask-mobile-connect.jpg' />");
  articleText.push("Note that there are several different chains that you can use. Generally, you should have funds in the chain you plan to use in order to pay for any necessary gas fees. Gas fees are a normal part of interacting with any blockchain, they are basically the transaction processing fees in the blockchain world.");
  articleText.push("");

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
            <p key={index} className="text-xl text-gray-400 mb-8" dangerouslySetInnerHTML={{ __html: text }}></p>
          ))}

          <Divider />
          </div>
      </div>
    </section>
    </>
  )
}
  