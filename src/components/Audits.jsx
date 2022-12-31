const Audits = () => {
    return (
        <>
            <section class="audits-page--full-container">
                <div class="audits-page--main-container">
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
                            <div className="audits--Alchemix">
                                <p>Alchemix</p>
                                <div className="audits--pdf-year">
                                    <p>PDF</p>
                                    <p>2022</p>
                                </div>
                            </div>
                            <div className="audits--SushiSwap">
                                <p>SushiSwap</p>
                                <div className="audits--pdf-year">
                                    <p>PDF</p>
                                    <p>2022</p>
                                </div>
                            </div>
                            <div className="audits--PartyBid">
                                <p>PartyBid</p>
                                <div className="audits--pdf-year">
                                    <p>PDF</p>
                                    <p>2022</p>
                                </div>
                            </div>
                            <div className="audits--Substack">
                                <p>Substack</p>
                                <div className="audits--pdf-year">
                                    <p>PDF</p>
                                    <p>2022</p>
                                </div>
                            </div>
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
