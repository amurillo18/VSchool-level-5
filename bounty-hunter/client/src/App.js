import axios from 'axios';
import {useState, useEffect} from 'react';
import Bounties from './components/bountyList'
import NewBounty from './components/AddBountyForm'
import './App.css';

function App() {
  const[bounty, setBounty] = useState([])
// get bounty list
function getBountyList(){
    axios.get('/bounty').then(res => setBounty(res.data)).catch(err => console.log(err)) 
}
  useEffect(() => {
    getBountyList()
  },[])
  // add new bounty to list
  function addNewBounty(newBounty){
    axios.post('/bounty', newBounty).then(res => {setBounty(prevBounty => [...prevBounty, res.data])}).catch(err => console.log(err))
  }
  // put
  function updateBounty(updates, bountyId){
    axios.put(`/bounty/${bountyId}`, updates).then(res => {
      setBounty(prevBounty => prevBounty.map(bounty => bounty.id !== bountyId ? bounty : res.data))
    }). catch(err => console.log(err))
    getBountyList()
  }
  // delete
  function deleteBounty(bountyId){
    axios.delete(`/bounty/${bountyId}`).then(res => { 
      setBounty(prevBounty => prevBounty.filter(bounty => bounty._id !== bountyId))
    }).catch(err => console.log(err))
  }

  return (
    <div className="App">
      <NewBounty submit={addNewBounty}
        btnTxt="Add New Bounty"
      />
      <h1 className='list-title'>Bounty List</h1>
      {bounty.map(bounty => 
      <Bounties 
      {...bounty} 
      key={bounty._id}
      deleteBounty={deleteBounty}
      updateBounty={updateBounty}
      />)}
    </div>
  );
}

export default App;
