import { useState } from "react"

function Form(){
    const [fullname, setFullname] = useState(" ")
    const [email, setEmail] = useState(" ")

    const fullNameCollector = (e)=>{
        setFullname(e.target.value)
    }

    const emailCollector = (e)=>{
        setEmail(e.target.value)
    }

    return(
        <div>
            <form>
                <div className="input-group">
                    <label htmlFor="fullname">Enter Full Name</label>
                    <input 
                    type="text"
                    name="fullname"
                    id="fullname"
                    value={fullname || " "}
                    onChange={(e)=>fullNameCollector(e)}
                    />
                </div>
                
                <div className="input-group">
                    <label htmlFor="email">Enter Your Email</label>
                    <input 
                    type="text"
                    name="email"
                    id="email"
                    value={email || " "}
                    onChange={(e)=>emailCollector(e)}
                    />
                </div>


            </form>
        </div>
    )
}

export default Form