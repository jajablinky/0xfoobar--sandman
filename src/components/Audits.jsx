import AuditItem from './AuditItem'
import blockchain from '../images/shield-check.png'
import magnify from '../images/Contract-Magnify.png'
import dataChain from '../images/data-line.png'
import chain from '../images/Chain.png'

const Audits = () => {
    const auditData = [
        { name: 'Alchemix', year: '2022' },
        { name: 'SushiSwap', year: '2022' },
        { name: 'PartyBid', year: '2022' },
        { name: 'Substack', year: '2022' },
    ]

    return (
        <>
            <section className="audits-page--full-container" id="audits">
                <div className="audits-page--main-container">
                    <div className="audits--header">
                        <div className="audits--header-content">
                            <h4>Audits</h4>
                            <p className="audits--p">
                                A breakdown of Foobar’s experience securing
                                futures across web3.
                            </p>
                        </div>
                    </div>
                    <div className="audits-page--container">
                        <div className="audits--list">
                            {auditData.map((audit) => (
                                <AuditItem
                                    name={audit.name}
                                    year={audit.year}
                                />
                            ))}
                        </div>
                        <div className="audits--load-more-button">
                            <button>Load More</button>
                        </div>
                    </div>
                </div>
                <div className="blockchain--img-container">
                    <div className="magnify--img-container">
                        <img
                            className="magnify--img"
                            src={magnify}
                            alt="contract-magnify"
                        />
                    </div>
                    <div className="data-chain--container">
                        <img
                            className="data-chain--img"
                            src={dataChain}
                            alt="data-chain"
                        />
                    </div>
                    <div className="chain--container">
                        <img className="chain--img" src={chain} alt="chain" />
                    </div>
                    <div className="data-chain--container">
                        <img
                            className="data-chain--img"
                            src={dataChain}
                            alt="data-chain"
                        />
                    </div>
                    <img
                        className="blockchain--img"
                        src={blockchain}
                        alt="blockchain"
                    />
                </div>
            </section>
        </>
    )
}

export default Audits
