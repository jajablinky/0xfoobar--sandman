import blockchain from '../images/icons8-blockchain-64.png'

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
                <div className="info-box--container-secondlayer">
                    <div className="info-box--1-secondlayer"></div>
                    <div className="info-box--2-secondlayer"></div>
                    <div className="info-box--3-secondlayer"></div>
                </div>
                <div className="blockchain--img-container">
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
