import { StartupDescription, CompanyNames } from './DataStore'



const StartupComponent = () => {
    return (
        <>
            <div className="startup--container">
                <div className="startup--container-flex">
                    <h5 className="startup-title--span">Startup</h5>

                    <div className="startup-container-values--flex">
                        {StartupDescription.map((itemText, index) => {
                            return <h3 className='StartupTitle' key={index}>{itemText.title}</h3>
                        })}
                    </div>
                </div>

                <span className="companies-title-txt">Companies</span>
                <div className="startup-container-companyTies">
                    {CompanyNames.map((ItemNames, indexKey) => {
                        return <a href="#Hello"className='Company-Names-Title' key={indexKey}>{ItemNames}</a>
                    })}
                </div>
            </div>
        </>
    )
}

export default StartupComponent