import { Additional } from './DataStore'

const JobsComponent = () => {
    return (
        <>
            <div className="additonal--component">
                <div className="additonal--component-container">
                    <div className="additional-component-grid-items">
                        {Additional.map((AddItems, index) => {
                            return (
                                <div className='component-grid'>
                                    <h3><a href={AddItems.id} key={index}>{AddItems.additional_title}</a></h3>
                                    <p><a href="#Addtional" className="additems-desc" key={index}>{AddItems.additional_desc}</a></p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobsComponent