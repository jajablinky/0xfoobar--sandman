import blockchain from '../images/shield-check.png'
import magnify from '../images/Contract-Magnify.png'
import dataChain from '../images/data-line.png'
import chain from '../images/Chain.png'

const InfoPage = () => {
    return (
        <>
            <section class="info-page--main-container">
                <div className="help-engineers--header">
                    <h4>Help Your Engineers</h4>
                    <p className="info-box--p">
                        Keep your contracts safe with Foobar. Your developers
                        will thank you!
                    </p>
                </div>
                <div className="info-box--container">
                    <div className="info-box--1">
                        <h5 className="info-box--header">Coding Mistakes</h5>
                        <p className="info-box--p">
                            Avoid coding mistakes that could cause problems like
                            not checking input carefully, and forgetting to set
                            up data.
                        </p>
                    </div>
                    <div className="info-box--2">
                        <h5 className="info-box--header">Design Flaws</h5>
                        <p className="info-box--p">
                            Find problems in the design of the important parts
                            of your business. Make sure it's what you really
                            want, even if the code seems right
                        </p>
                    </div>
                    <div className="info-box--3">
                        <h5 className="info-box--header">Money Safety</h5>
                        <p className="info-box--p">
                            Expose un-safe flaws, including price manipulation,
                            flash loan hazards, MEV, front-running, and more.
                        </p>
                    </div>
                </div>
                <button className="info-page--help-button">
                    Ready For Help
                </button>
                <div className="blockchain--img-container">
                    <img
                        className="magnify--img"
                        src={magnify}
                        alt="contract-magnify"
                    />
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

export default InfoPage
