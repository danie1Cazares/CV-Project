

function CustomizePanel({color, setLayout, setNewColor}) {

    const colorSelected = document.querySelector('#colorPick');

    return (
        <>
            <div className='customizePanel'>

                <div className='customizeWidget'>
                    <h2>Layout</h2>

                    <div className="layoutOptions">
                        <div className='layoutOption topLayout' onClick={()=>{setLayout('top')}}>
                            <div className="square">
                                <div className="blue" style={{backgroundColor: color}}></div>
                            </div>
                            <p>Top</p>
                        </div>

                        <div className='layoutOption leftLayout' onClick={()=>{setLayout('left')}}>
                            <div className="square" >
                                <div className="blue" style={{backgroundColor: color}}></div>
                            </div>
                            <p>Left</p>
                        </div>

                        <div className='layoutOption rightLayout' onClick={()=>{setLayout('right')}}>
                            <div className="square">
                                <div className="blue" style={{backgroundColor: color}}></div>
                            </div>
                            <p>Right</p>
                        </div>
                    </div>

                </div>

                <div className="customizeWidget">
                    <h2>Color</h2>
                    <label className='colorOption'>Accent Color
                        <input type="color" name="color" id="colorPick" onInput={setNewColor}/>
                    </label>
                </div>


            </div>

        </>
    ); 

}



export default CustomizePanel;