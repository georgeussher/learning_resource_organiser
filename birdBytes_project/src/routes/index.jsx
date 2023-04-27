import soc_logo from './soc_logo.png'
import studyosaurus from './studyosaurus_logo.png'

export default function Index() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
        <p>
        </p>
        <div>
          <img src={soc_logo} alt="SOC logo" style={{width:'40%', marginLeft: '15%'}}/>
        </div> 
        <div>
          <img src={studyosaurus} alt="studyosaurus logo" style={{ width: '90%', marginLeft: '2%' }}/>
        </div>
        <div id="container" style={{marginRight:'7%', marginBottom:'-6%', marginTop:'10%'}}>
          <h2 id="about">
            About
          </h2>
        </div>
        <p className="zero-state" style={{marginRight:'7%', marginTop:'9%'}}>
        Welcome to StudyOsaurus, the ultimate tool for Bootcampers looking to simplify their study routine, avoid overwhelm and achieve academic success. 
        This app provides you with a centralised platform to organise your study resources, view the curriculum and keep track of your progress
        You can easily view all of your study materials in one place.
        </p>
        <p className="zero-state" style={{marginRight:'7%'}}>
        You can manage documents, links and notes to ensure that you stay on top of things. 
        The intuitive interface allows you to organise everything in a way that just makes sense. Say goodbye to endless scrolling through emails, 
        folders, and Slack channels - here, you can quickly access everything you need with just a few clicks.
        </p>
        <p className="zero-state" style={{alignSelf: 'center'}}>
        To get started, select a week in the sidebar and get stuck into the many helpful resources. You can even click the add button within each subject and add your own!
        </p>
        <br />
        <a href="https://www.schoolofcode.co.uk/" className="zero-state" style={{marginBottom:'%'}}>
          Click here to learn more
        </a>
    </div>
    );
  }