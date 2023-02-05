import AddBountyForm from "./AddBountyForm"
import { useState } from 'react'

function BountyList (props){
   const [editToggle, setEditToggle] = useState(false)

   function toggle() {
    setEditToggle(false)
   }
    return(
        <div className="bounty-list">
            {!editToggle &&
            <>
            <h3>{props.firstName} {props.lastName}</h3>
            {props.living === "true"  && <p>Living: Yes</p>}
            {props.living === "false" && <p>Living: No</p>}
            <p>Bounty Amount: {props.bountyAmount}</p>
            {props.type === "Jedi" &&<p className="type-jedi">Type: {props.type}</p>}
            {props.type === "Sith" &&<p className="type-sith">Type: {props.type}</p>}
            <button className="deleteBtn" onClick={()=> props.deleteBounty(props._id)}>Delete</button>
            <button onClick={()=> setEditToggle(true)}>Update</button>
            </>}
            {editToggle &&
            <>
            <AddBountyForm
            firstName={props.firstName}
            lastName={props.lastName}
            living={props.living}
            bountyAmount={props.bountyAmount}
            type={props.type}
            _id={props._id}
            btnTxt="Submit Update"
            submit={props.updateBounty}
            toggle={toggle}
            />
            <button onClick={()=> setEditToggle(false)}>Close</button>
            </>
            }
        </div>
    )

}

export default BountyList
