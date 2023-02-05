 import  { useState} from 'react'
function AddBountyForm(props){
    const initialInputs = {
        firstName: props.firstName || "", 
        lastName: props.lastName || "",
        living: props.living || "",
        bountyAmount: props.bountyAmount || 50,
        type: props.type || ""
    }
    const [inputs, setInputs] = useState(initialInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs,[name]:value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        props.toggle && props.toggle()
        setInputs(initialInputs)
        
    }

    return(
        <form className='add-bounty' onSubmit={handleSubmit}>
            <input
            type="text"
            className="firstName"
            name='firstName'
             placeholder="First Name"
             value={inputs.firstName}
             required
             onChange={handleChange}
             />
             <input
            type="text"
            className="lastName"
            name='lastName'
             placeholder="Last Name"
             value={inputs.lastName}
             required
             onChange={handleChange}
             />
             <select
             value={inputs.type}
             name="type"
             required 
             onChange={handleChange}
             >
                <option value="">Jedi/Sith</option>
                <option value="Jedi">Jedi</option>
                <option value="Sith">Sith</option>
             </select>
             <select
             value={inputs.living}
             required
             name="living"
             onChange={handleChange}
             >
                <option value="">Living?</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
             </select>
             <input
                type="number"
                name="bountyAmount"
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder="Bounty Amount"
                required
             />
             <button>{props.btnTxt}</button>
        </form>
    )

}

export default AddBountyForm