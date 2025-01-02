 
import './App.css';
 import  H from './dashboard'
 import  Nav from './commponents/nav'
 import DatabaseStructure from './Database'
 import Usagedatabase from './usageDatabase'
 import GitWeb from './Git_info_web'
 import Git from './GitHub_web'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Git_GithubWeb from './Git_Github';
import Git_video_web from './Git_video_web';
import IIS_Server_Upload from './IIS_Server_Upload';
import Cloud_Server_Upload from './Cloud_Server_Upload';
import Cloud_Invoice from './Cloud_Invoice';
import Third_party_devloper_cost_web from './third_party_developer_cost_web';
import Database_migration from './Database_migration';
import Task_Schedular from './Task_Schedular';
import Attendence_Process from './Attendence_Process';
import TroubleShootingWeb from './TroubleShootingWeb';
import Mvc_Structure_web from './Mvc_Structure_web';
import Beginner_csharp from './commponents/Beginner_csharp';
import CSharp_Structure from './CSharp_Structure';
import Usage_of_database from './Usage_of_database';
import Dmt_Tool from './Dmt_Tool';
import Cssf_Activity from './commponents/Cssf_Activity';
import Epicor_cloud from './commponents/Epicor_cloud';
import Other_Avctivity from './commponents/Other_Avctivity';

 
function App() {
  return (
    
     <>
     
  <Router>
  <Nav/>
 <Routes>
 
  <Route path='/' element={<H/>} />
  <Route path='/DatabaseStructure' element={<DatabaseStructure/>} />
  <Route path='/UsageOfDatabase' element={<Usagedatabase/>} />
  <Route path='/GitInfo' element={<GitWeb/>} />
  <Route path='/GitHubInfo' element={<Git/>} />
  <Route path='/GitHubVSGit' element={<Git_GithubWeb/>} />
  <Route path='/GitVideo' element={<Git_video_web/>} />
  <Route path='/IIS_Server_Upload' element={<IIS_Server_Upload/>} />
  <Route path='/Cloud_Server_Upload' element={<Cloud_Server_Upload/>} />
  <Route path='/Cloud_Invoice_Generation' element={<Cloud_Invoice/>} />
  <Route path='/third_party_developer_cost' element={<Third_party_devloper_cost_web/>} />
  <Route path='/Database_Migration' element={<Database_migration/>} />
  <Route path='/Task_Schedular' element={<Task_Schedular/>} />
  <Route path='/Attendance_Process' element={<Attendence_Process/>} />
  <Route path='/Troubleshooting' element={<TroubleShootingWeb/>} />
  <Route path='/MVC_Structure' element={<Mvc_Structure_web/>} />
  <Route path='/beginnersCSharp' element={<Beginner_csharp/>} />
  <Route path='/CSharp_Structure' element={<CSharp_Structure/>} />
  <Route path='/Usage_of_database' element={<Usage_of_database/>} />
  <Route path='/Usage_of_database' element={<Usage_of_database/>} />
  <Route path='/Dmt_Tool' element={<Dmt_Tool/>} />
  <Route path='/Cssf_Activity' element={<Cssf_Activity/>} />
  <Route path='/Epicor_cloud' element={<Epicor_cloud/>} />
  <Route path='/Other_Activity' element={<Other_Avctivity/>} />
</Routes>
 
</Router>
</>
 
   
  );
}

export default App;
