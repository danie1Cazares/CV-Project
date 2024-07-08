import PropTypes from 'prop-types';

// {schoolName, degree, startDate, endDate, location}

function DisplayEducation ({color, educationData}){
    return (
        <>
        
            <div className="DisplayEducation"> 


                <h2 style={{color: color}}>Education</h2>

                {
                    educationData.map((entry, index) => (

                        entry.visible 

                        ?

                        <>
                            <div className="details-container" key={index}>
                                <div className="left-col">
                                    <p>{entry.startDate} - {entry.endDate}</p>
                                    <p>{entry.location}</p>
                                </div>
                                <div className="right-col">
                                    <p>{entry.schoolName}</p>
                                    <p>{entry.degree}</p>
                                </div>
                            </div>
                        
                        </>

                        :

                        console.log(entry)
                    ))   
                    
                }


            </div>
        </>
    )
}

DisplayEducation.propTypes = {
    // schoolName: PropTypes.string.isRequired,
    // degree: PropTypes.string.isRequired,
    // startDate: PropTypes.string.isRequired,
    // endDate: PropTypes.string.isRequired,
    // location: PropTypes.string.isRequired,
    educationData: PropTypes.array.isRequired
};


export default DisplayEducation;



