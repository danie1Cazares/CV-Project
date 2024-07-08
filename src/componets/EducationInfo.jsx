
import PropTypes from 'prop-types';
import { useState } from 'react'


function EducationInfo({toggleVisibility, educationData, handleEducationInput, handleEducationExpand, educationExpand}){

    const [showForm, setShowForm] = useState(false);

    const [data, setData] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData({
          ...data,
          [name]: value,
        });
      };

      const handleDelete = (e) => {

        e.preventDefault();

       const inputs = document.querySelectorAll('.EducationInfo .content input');
    
        inputs.forEach((input) => {
            input.value = '';
        });

        setData(false)

      };

      const handleCancel = (e) => {

        e.preventDefault();

       const inputs = document.querySelectorAll('.EducationInfo .content input');
    
        inputs.forEach((input) => {
            input.value = '';
        });

        setShowForm(false);
        setData(false);

      };


    return (
        <>

            <form className="EducationInfo">
                  <h2 className={`${educationExpand ? '' : 'notExpanded'}`}><div><span className="material-symbols-outlined icon">school</span><span>Education</span></div><span className={`material-symbols-outlined edu-expand-btn ${educationExpand ? 'rotate' :  ''}`} onClick={handleEducationExpand}>keyboard_arrow_up</span></h2>
                    <div className={`content ${educationExpand ? 'open' : ''}`}>

                    {
                        showForm ?
                        
                        <>

                            <label htmlFor="schoolName">School</label>
                            <input name="schoolName" id="schoolName" onInput={handleInputChange}/>
                            <label htmlFor="degree">Degree</label>
                            <input name="degree" id="degree" onInput={handleInputChange} />
                            <label htmlFor="startDate">Start Date</label>
                            <input type="date" name="startDate" id="startDate" onInput={handleInputChange}/>
                            <label htmlFor="endDate">End Date</label>
                            <input type="date" name="endDate" id="endDate" onInput={handleInputChange} />
                            <label htmlFor="location">Location</label>
                            <input name="location" id="location" onInput={handleInputChange}/>
                            <div className='buttonsContainer'><button id="delete-btn" onClick={handleDelete}><span className="material-symbols-outlined icon">delete</span>Delete</button><div className='group-btns'><button onClick={handleCancel}>Cancel</button><button id="save-btn" onClick={(e) => {e.preventDefault(); data.visible = true; setShowForm(false); data ? handleEducationInput(data) : console.log('no data'); setData(false)}}>Save</button></div></div>

                        </>


                        :

                        <>
                            
                            {
                                educationData.length > 0

                                ?

                                <>

                                    {
                                        educationData.map((entry,index) => (
                                            <>
                                                <div className='eduEntry'><h3>{entry.schoolName}</h3><span className="material-symbols-outlined"  onClick={()=>{toggleVisibility(index)}} >visibility{entry.visible ? '' : '_off'}</span></div>
                                            </>
                                        ))
                                    }
                                
                                    <button onClick={()=>{setShowForm(true)}}>+ Education</button>
                                </>

                                :

                                <button onClick={()=>{setShowForm(true)}}>+ Education</button>


                            }
                            {/* <div className='eduEntry'><h3>London City University</h3><span className="material-symbols-outlined">visibility</span></div>
                            <div className='eduEntry'><h3>Hayden University</h3><span className="material-symbols-outlined">visibility</span></div> */}

                        </>


                    }


                    </div>

            </form>  

          
        </>
    )
}

EducationInfo.propTypes = {
    // handleInputChange: PropTypes.string.isRequired,
    handleEducationExpand: PropTypes.string.isRequired,
    educationExpand: PropTypes.string.isRequired,
    handleEducationInput: PropTypes.string.isRequired,
    educationData: PropTypes.array.isRequired,
    toggleVisibility: PropTypes.func.isRequired
    // handleCancelBtn: PropTypes.func.isRequired,
    // handleDeleteBtn: PropTypes.func.isRequired,
};


export default EducationInfo;

// ${educationExpand ? 'rotate' :  ''}