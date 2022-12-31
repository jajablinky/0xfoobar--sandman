import AuditItem from './AuditItem'

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
                <div className="start-defending--container">
                    <div className="start-defending--content">
                        <div className="defending--header">
                            <h6>Start Defending</h6>
                        </div>
                        <div className="defending--p-container">
                            <p>
                                It’s difficult to manage and fix problems in{' '}
                                <span className="secondary-color">
                                    decentralized systems
                                </span>
                                . Join others in securing your users today.
                            </p>
                        </div>
                        <div className="secure-contracts--button-container">
                            <button>Secure Contracts</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Audits
