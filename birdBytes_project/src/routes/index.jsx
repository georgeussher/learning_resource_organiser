import soc_logo from './soc_logo.png'
import studyosaurus from './studyosaurus_logo.png'

export default function Index() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
        <p>
        </p>
        <div>
          <img src={soc_logo} alt="SOC logo"/>
        </div> 
        <div>
          <img src={studyosaurus} alt="studyosaurus logo" style={{ width: '90%', margin: '5%' }}/>
        </div>
        <p>
        </p>
    </div>
    );
  }