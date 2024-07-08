function ClearLoadBtnsPanel ({loadExample, clearResume}){
    return (
        <>
            <div className="ClearLoadBtnsPanel"> 
                <div className="clearBtn" onClick={clearResume}><span className="material-symbols-outlined icon">
delete
</span>Clear Resume</div>
                <div className="loadBtn" onClick={loadExample}>Load Example</div>
            </div>
        </>
    )
}

export default ClearLoadBtnsPanel;