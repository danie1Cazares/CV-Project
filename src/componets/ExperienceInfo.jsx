
import PropTypes from 'prop-types';
import { useState } from 'react'


function ExperienceInfo ({toggleExpVisibility, expData, handleExpInput, handleExperienceExpand, experienceExpand}){

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

       const inputs = document.querySelectorAll('.ExperienceInfo .content input');
    
        inputs.forEach((input) => {
            input.value = '';
        });

        setData(false)

      };

      const handleCancel = (e) => {

        e.preventDefault();

       const inputs = document.querySelectorAll('.ExperienceInfo .content input');
    
        inputs.forEach((input) => {
            input.value = '';
        });

        setShowForm(false);
        setData(false);

      };

    return (
            <>


                <form className="ExperienceInfo"> 
                    <h2 className={`${experienceExpand ? '' : 'notExpanded'}`}><div><span className="material-symbols-outlined icon">work</span><span>Experience</span></div><span className={`material-symbols-outlined edu-expand-btn ${experienceExpand ? 'rotate' :  ''}`} onClick={handleExperienceExpand}>keyboard_arrow_up</span></h2>

                    <div className={`content ${experienceExpand ? 'open' : ''}`}>
                        {
                             showForm ?

                             <>
                                 <label htmlFor="companyName">Company Name</label>
                                 <input name="companyName" id="companyName" onInput={handleInputChange} />
                                 <label htmlFor="positionTitle">Position Title</label>
                                 <input name="positionTitle" id="positionTitle" onInput={handleInputChange}/>
                                 <label htmlFor="jobStartDate">Start Date</label>
                                 <input type="date" name="jobStartDate" id="jobStartDate"  onInput={handleInputChange}/>
                                 <label htmlFor="jobEndDate">End Date</label>
                                 <input type="date" name="jobEndDate" id="jobEndDate" onInput={handleInputChange} />
                                 <label htmlFor="jobLocation">Location</label>
                                 <input name="jobLocation" id="jobLocation" onInput={handleInputChange} />
                                 <label htmlFor="jobDescription">Description</label>
                                 <input name="jobDescription" id="jobDescription" onInput={handleInputChange} />
                                 <div className='buttonsContainer'><button id="delete-btn" onClick={handleDelete}><span className="material-symbols-outlined icon">delete</span>Delete</button><div className='group-btns'><button onClick={handleCancel}>Cancel</button><button id="save-btn" onClick={(e) => {e.preventDefault(); data.visible = true; setShowForm(false); data ? handleExpInput(data) : console.log('no data'); setData(false)}}>Save</button></div></div>

                             </>
     
                             :
                             
                             <>

                                {   
                                    expData.length > 0

                                    ?

                                    <>

                                        {
                                            expData.map((entry,index) => (
                                                <>
                                                    <div className='expEntry'><h3>{entry.companyName}</h3><span className="material-symbols-outlined"  onClick={()=>{toggleExpVisibility(index)}} >visibility{entry.visible ? '' : '_off'}</span></div>
                                                </>
                                            ))
                                        }
                                    
                                        <button onClick={()=>{setShowForm(true)}}>+ Experience</button>
                                    </>

                                    :

                                    <button onClick={()=>{setShowForm(true)}}>+ Experience</button>


                                }       
     
                             </>
     
                        }
                       

                    </div>

                </form>


        </>
    )
}

ExperienceInfo.propTypes = {
    // handleInputChange: PropTypes.string.isRequired,
    handleExperienceExpand: PropTypes.string.isRequired,
    experienceExpand: PropTypes.string.isRequired,
    handleExpInput: PropTypes.func.isRequired,
    expData: PropTypes.array.isRequired,
    toggleExpVisibility: PropTypes.func.isRequired
 
};



export default ExperienceInfo;