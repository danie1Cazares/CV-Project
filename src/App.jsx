import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import GeneralInfo from './componets/GeneralInfo.jsx'
import EducationInfo from './componets/EducationInfo.jsx'
import ExperienceInfo from './componets/ExperienceInfo.jsx'
import ClearLoadBtnsPanel from './componets/ClearLoadBtnsPanel.jsx'
import ContentCustomizeToggle from './componets/ContentCustomizeToggle.jsx'
import DisplayGeneral from './componets/DisplayGeneral.jsx'
import DisplayExperience from './componets/DisplayExperience.jsx'
import DisplayEducation from './componets/DisplayEducation.jsx'
import CustomizePanel from './componets/customizePanel.jsx'

function App() {

  // const [fullName, setFullName] = useState(''); 

  // const handleInputChange = (event, setState) => {
  //   setState(event.target.value);
  // };

  const [educationExpand, setEducationExpand] = useState(false); 
  const [experienceExpand, setExperienceExpand] = useState(false);

  const [formData, setFormData] = useState({
    fullName: 'FirstName LastName',
    email: 'some@email.com',
    phone: '123-456-6788',
    address: '123 Some Street Rd.'
    // education: '', // Example field for EducationInfo
    // experience: '', // Example field for ExperienceInfo
  });


  const [educationData, setEducationData] = useState([]);
  const [expData, setExpData] = useState([]);

  const handleEducationInput = (data) => {
    
    setEducationData([...educationData, data]);
    // console.log(educationData, 'data added: ' + data);
  };

  const handleExpInput = (data) => {
    
    setExpData([...expData, data]);
    // console.log(educationData, 'data added: ' + data);
  };

  const toggleVisibility = (index) => {
    
      educationData[index].visible = !(educationData[index].visible);

      setEducationData([...educationData]);
  };  

  const toggleExpVisibility = (index) => {
    
    expData[index].visible = !(expData[index].visible);

    setExpData([...expData]);
};  

  // set educationData as a state that is an array of objects
  // render array until array is empty using all info in objects
  //use save button to save into array of objects

  const handleInputChange = (event) => {
    
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEducationExpand = () => {
   
    setEducationExpand(!educationExpand);
    setExperienceExpand(false);
    // console.log(e.target);
    // e.target.classList.toggle('rotate');
    // document.querySelector('.edu-expand-btn').classList.add('rotate');
  };

  const handleExperienceExpand = () => {
   
    setExperienceExpand(!experienceExpand);
    setEducationExpand(false);
  };

  const loadExample = () => {

    const educationExample = [
      {
        schoolName: 'Mesa Community College',
        degree: 'Graphic Design',
        startDate: '2018-03-23',
        endDate: '2020-03-24',
        location: 'Mesa, AZ',
        visible: true
      },
      {
        schoolName: 'ASU',
        degree: 'Art',
        startDate: '2018-03-23',
        endDate: '2020-03-24',
        location: 'Tempe, AZ',
        visible: true
      }
    ];

    const expExample = [
      {
        companyName: 'Manning Group',
        positionTitle: 'Installer',
        jobStartDate: '2018-03-23',
        jobEndDate: '2020-03-24',
        jobLocation: 'Phoenix, AZ',
        jobDescription: 'Install furniture in offices as well as demo existing furniture',
        visible: true
      },
      {
        companyName: 'GWS',
        positionTitle: 'Project Coordinator',
        jobStartDate: '2018-03-23',
        jobEndDate: '2020-03-24',
        jobLocation: 'Chandler, AZ',
        jobDescription: 'Coordinate on-site projects involving furniture, keys, events, ect..',
        visible: true
      }
    ];

    setFormData({fullName: 'Daniel Cazares', email: 'danielcazares@gmail.com', phone: '123-456-3211', address:'101 Some Street Rd'});
    setEducationData(educationExample);
    setExpData(expExample);
  }

  const clearResume = () => {
    setFormData({});
    setEducationData([]);
    setExpData([]);
  }

  const [currentView, setCurrentView] = useState('content'); 
  const changeView = (view) => {
    setCurrentView(view);
  };

  const setLayout = (layout) => {

    const display = document.querySelector('.resumeOutput');
    const header = document.querySelector('.DisplayGeneral');

    if (layout === 'left')
    {
      display.classList.remove('setLayoutToRight');

      display.classList.add('setLayoutToLeft');
      header.classList.add('reduceWidth');
    } else if (layout === 'top'){

      try {
        display.classList.remove('setLayoutToLeft');
        display.classList.remove('setLayoutToRight');
        header.classList.remove('reduceWidth');
      } catch {
        console.log('Classes not applied')
      }

    } else if (layout === 'right') {
      display.classList.remove('setLayoutToLeft');

      display.classList.add('setLayoutToRight');
      header.classList.add('reduceWidth');

    }




  };

  const [color, setColor] = useState('#0e374e');

  const setNewColor = (e) => {
    setColor(e.target.value); 
  }


  // make responsive
  //use JS and if statements to make responsive and CSS as needed

  // at 1300 width stack all resume input componets as well as contentcutomizetoggle componet
  // at 1000 width stack buttons inside clearloadbtnspanel compnent

  //set min width of resume input components



  return (
    <>

    <div className='wrapper'>
          <div className='responsiveSizing'>
            <ContentCustomizeToggle changeView={changeView}/>
            <div className='resumeInput'>
              <ClearLoadBtnsPanel loadExample={loadExample} clearResume={clearResume}/>
              {
                currentView === 'content'

                ?

                <>
                  
                  <GeneralInfo handleInputChange={handleInputChange}/>
                  {/* <div> */}
                    <EducationInfo toggleVisibility={toggleVisibility} educationData={educationData} handleEducationInput={handleEducationInput} handleEducationExpand={handleEducationExpand} educationExpand={educationExpand}/>
                    <ExperienceInfo toggleExpVisibility={toggleExpVisibility} expData={expData} handleExpInput={handleExpInput} handleExperienceExpand={handleExperienceExpand} experienceExpand={experienceExpand}/>
                  {/* </div> */}

                </>

                :

                <CustomizePanel color={color} setLayout={setLayout} setNewColor={setNewColor}/>

              }
            </div>
        </div>
        <div className='resumeOutput'>
          <DisplayGeneral color={color} fullName={formData.fullName} email={formData.email} phone={formData.phone} address={formData.address}/>
          <div className="displayDetails">
            <DisplayEducation color={color} educationData={educationData}/>
            <DisplayExperience color={color} expData={expData} />
          </div>

        </div>
    </div>
    
    
    </>
  )
}

export default App;
