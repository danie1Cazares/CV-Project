

import PropTypes from 'prop-types';


function DisplayExperience ({color, expData}){
    return (
        <>
        
            <div className="DisplayExperience"> 


                <h2 style={{color: color}}>Experience</h2>

                {
                    expData.map((entry, index) => (

                        entry.visible 

                        ?

                        <>
                            <div className="details-container" key={index}>
                                <div className="left-col">
                                    <p>{entry.jobStartDate} - {entry.jobEndDate}</p>
                                    <p>{entry.jobLocation}</p>
                                </div>
                                <div className="right-col">
                                    <p>{entry.companyName}</p>
                                    <p>{entry.positionTitle}</p>
                                    <p>{entry.jobDescription}</p>
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

DisplayExperience.propTypes = {
    // companyName: PropTypes.string.isRequired,
    // positionTitle: PropTypes.string.isRequired,
    // jobStartDate: PropTypes.string.isRequired,
    // jobEndDate: PropTypes.string.isRequired,
    // jobLocation: PropTypes.string.isRequired,
    // jobDescription: PropTypes.string.isRequired,
    expData: PropTypes.array.isRequired

};


export default DisplayExperience;