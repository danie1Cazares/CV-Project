import PropTypes from 'prop-types';

function DisplayGeneral ({color, fullName, email, phone, address}){
    return (
        <>
            <div className="DisplayGeneral" style={{backgroundColor: color}}> 
                <h1 id='firstNameDisplay'>{fullName}</h1>
                <div className="contactInfo">
                    <p><span className="material-symbols-outlined icon">
mail
</span>{email}</p>
                    <p><span className="material-symbols-outlined icon">
call
</span>{phone}</p>
                    <p><span className="material-symbols-outlined icon">
share_location
</span>{address}</p>
                </div>

            </div>
        </>
    )
}

DisplayGeneral.propTypes = {
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
};

export default DisplayGeneral;