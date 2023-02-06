

const ContainerImage = () => {
    return (
        <>
            <div className="contianerSection">
                <div className="containerSection--Container">
                    <div className="container-section--text-section">
                        <h3 className="container-section-title-text">Y Combinator created a new model for funding early stage startups.</h3>
                        <p className="container-section-span-text">Twice a year we invest $500,000 per company in a large number of startups.</p>
                        <p className="container-section-span-text">We work intensively with the companies for three months, to get them into the best possible shape and refine their pitch to investors. Each cycle culminates in Demo Day, when the startups present their companies to a carefully selected, invite-only audience.</p>
                        <p className="container-section-span-text">But YC doesn’t end on Demo Day. We and the YC alumni network continue to help founders for the life of their company, and beyond.</p>

                        <div className="button-option">
                            <a href="#Learn-More" className="btn-learn_more">Learn More </a>
                            <a href="#FAQ" className="btn-FAQ">Application FAQs </a>
                        </div>
                    </div>
                    <div className="container-section--image-section">
                        <img src="https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=" Action" className="Image_Banner" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default ContainerImage