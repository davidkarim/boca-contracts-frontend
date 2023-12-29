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
                  Are smart contracts legally binding?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
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
                  active={activeIndex === 2}
                  index={2}
                  onClick={handleClick}
                >
                  <Icon name='dropdown' />
                  Are dApps and smart contracts the same thing?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
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
                  active={activeIndex === 3}
                  index={3}
                  onClick={handleClick}
                >
                  <Icon name='dropdown' />
                  Why are smart contracts said to be trustless?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
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

            </Accordion>




            </div>
        </div>
      </section>
    )
  }
  