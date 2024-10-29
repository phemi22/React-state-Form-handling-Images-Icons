import { useState } from "react"
import styles from "./NewForm.module.css"

function NewForm(){
    const [formDetails, setFormDetails] = useState({
        fullname: " ",
        email: " "
    })

    const formSubmitter = (e)=>{
        e.preventDefault()        
    }

    return(
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="fullname">Enter Full Name</label>
                    <input 
                    type="text"
                    name="fullname"
                    id="fullname"
                    value={formDetails.fullname || " "}
                    onChange={(e)=>setFormDetails({...formDetails, fullname: e.target.value})}
                    className={styles.input}
                    />
                </div>
                
                <div className={styles.inputGroup}>
                    <label htmlFor="email">Enter Your Email</label>
                    <input 
                    type="text"
                    name="email"
                    id="email"
                    value={formDetails.email || " "}
                    onChange={(e)=>setFormDetails({...formDetails, email: e.target.value})}
                    className={styles.input}
                    />
                </div>

                <div className={styles.buttonDiv}>
                    <button className={styles.button} onClick={(e)=>formSubmitter(e)}>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default NewForm