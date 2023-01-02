import download from '../images/download.png'

const AuditItem = ({ name, year }) => (
    <div className="audits--item">
        <p>{name}</p>
        <div className="audits--pdf-year">
            <div className="audits--pdf-img">
                <img src={download} alt="download" />
            </div>
            <p className="audits--pdf">PDF</p>
            <p className="audits--year">{year}</p>
        </div>
    </div>
)

export default AuditItem
