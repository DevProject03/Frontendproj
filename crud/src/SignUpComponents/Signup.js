import React from "react"

export default function Signup() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )
    console.log(formData.favColor)
    
    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit() {
        submitToApi(formData)
    }
    return (
        <main>
            <div className="card">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Firstname"
                    className="form--input"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />
                <input 
                    type="text"
                    placeholder="Middlename"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Lastname"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="BVN"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="D.O.B"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="BVN"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Email Address"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Password"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Confirm Password"
                    className="form--input"
                />
                <select className="form--input">
                    <option className="form--input" value="0">Account Type:</option>
                    <option className="form--input" value="1">Current</option>
                    <option className="form--input" value="2">Savings</option>
                </select>
                <button 
                    className="form--button"
                >
                    SIGN UP
                </button>
            </form>
            </div>
        </main>
    )
}