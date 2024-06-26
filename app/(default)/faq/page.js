// export const metadata = {
//     title: 'Frequently Asked Questions - Boca Contracts',
//     description: 'Page description',
//   }

"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

  export default function Faq() {
    let [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
    
        setActiveIndex(newIndex);
      }

    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Frequently Asked Questions</h1>
            </div>

            <Accordion styled className="text-center max-w-sm mx-auto">

                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={handleClick}
                >
                  <Icon name='dropdown' />
                  What are smart contracts?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <p>
                    Smart contracts are self-executing contracts with the terms of the
                    agreement between buyer and seller being directly written into lines
                    of code. The code and the agreements contained therein exist across
                    a distributed, decentralized blockchain network. Smart contracts
                    permit trusted transactions and agreements to be carried out among
                    disparate, anonymous parties without the need for a central
                    authority, legal system, or external enforcement mechanism. They
                    render transactions traceable, transparent, and irreversible.
                  </p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={handleClick}
                >
                  <Icon name='dropdown' />
                  How do I access the site? How do I get a login?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <p>
                    The site is secured using your Ethereum wallet. You can use any
                    wallet that supports Web3, such as MetaMask, Trust Wallet, or
                    Coinbase Wallet. You can also use a hardware wallet such as a
                    Ledger or Trezor. If you don’t have a wallet, you can create one
                    using MetaMask or Trust Wallet. Once you have a wallet, you can
                    access the site by clicking the “Enter App” button in the top
                    right corner of the screen. You will be prompted to sign a message
                    using your wallet. Once you sign the message, you will be logged
                    in. You can then create a new contract or view your existing
                    contracts.
                  </p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 2}
                  index={2}
                  onClick={handleClick}
                >
                  <Icon name='dropdown' />
                  Are smart contracts legally binding?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                  <p>
                    Although it would depend on your jurisdiction, smart contracts can be legally binding. The code is law. The code
                    itself is the contract. The code dictates the rules and penalties
                    of an agreement, just as traditional contracts do today. When a
                    smart contract is deployed on the blockchain, it is immutable. No
                    party can go back and change the terms of the agreement. The
                    contract auto-executes when the conditions are met. The contract
                    cannot be stopped, censored, or reversed.
                  </p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 3}
                  index={3}
                  onClick={handleClick}
                >
                  <Icon name='dropdown' />
                  Are dApps and smart contracts the same thing?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                  <p>
                    The terms are often used interchangeably; distributed applications (dApps) are decentralized applications that run on a peer-to-peer
                    network of computers rather than a single computer. dApps are
                    designed to avoid any single point of failure. dApps are open
                    source, decentralized, incentivized through tokens, and operate on
                    consensus protocols. Smart contracts are the code that runs the
                    dApps.
                  </p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 4}
                  index={4}
                  onClick={handleClick}
                >
                  <Icon name='dropdown' />
                  Why are smart contracts said to be trustless?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 4}>
                  <p>
                    Smart contracts are trustless because they are self-executing and
                    self-enforcing. The code itself is the contract. The code dictates
                    the rules and penalties of an agreement, just as traditional
                    contracts do today. When a smart contract is deployed on the
                    blockchain, it is immutable. No party can go back and change the
                    terms of the agreement. The contract auto-executes when the
                    conditions are met. The contract cannot be stopped, censored, or
                    reversed.   
                  </p>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 5}
                  index={5}
                  onClick={handleClick}
                >
                  <Icon name='dropdown' />
                  What are gas fees?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 5}>
                  <p>
                  Gas fees refer to the payment needed for transactions on the blockchain. 
                  Gas fees depend on the supply and demand of compute resources on the 
                  blockchain and are collected by the network validators or miners. 
                  When you make a payment, deploy smart contracts, or write information to the 
                  blockchain you will see a break-down of the fees on your wallet application. You 
                  can think of gas fees as the cost of doing business on the blockchain, or 
                  being equivalent to transaction fees in traditional banking systems.
                  </p>
                </Accordion.Content>

            </Accordion>




            </div>
        </div>
      </section>
    )
  }
  