function ContentCustomizeToggle ({changeView}){
    return (
        <>
            <div className="ContentCustomizeToggle"> 
                <div className="contentBtn" onClick={()=>changeView('content')}><span className="material-symbols-outlined icon">description</span>Content</div>
                <div className="customizeBtn" onClick={()=>changeView('customize')}><span className="material-symbols-outlined icon">design_services</span>Customize</div>
            </div>
        </>
    )
}

export default ContentCustomizeToggle;