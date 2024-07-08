// import { useState } from "react";
import PropTypes from 'prop-types';

function GeneralInfo({handleInputChange}) {

    // const [fullName, setFullName] = useState(''); 


    return (
        <>

        <form className="GeneralInfo">
            {/* {updateDisplay(fullName,'#firstNameDisplay')} */}
             <h2>Personal Details</h2>
            <label htmlFor="fullName">Full name</label>
            <input name="fullName" id="fullName"  onInput={handleInputChange} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onInput={handleInputChange}/>
            <label htmlFor="phone"> Number</label>
            <input type="tel" name="phone" id="phone" onInput={handleInputChange} />
            <label htmlFor="address">Address</label>
            <input name="address" id="address" onInput={handleInputChange}/>
        </form>
        {/* add submit and edit btns */}
        </>
    ); 

}

GeneralInfo.propTypes = {
    handleInputChange: PropTypes.string.isRequired,
};

/*onInput={()=>{setFullName(document.querySelector('#fullName').value)}} */

// function updateDisplay(text, elementId)
// {
//     const element = document.querySelector(elementId);
//     element.innerText = text;
// }



export default GeneralInfo;