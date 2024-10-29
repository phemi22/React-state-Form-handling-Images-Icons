// This kind of component styling is used to style simple components but the recommendation is to stick to modular and global css.

export default function NewButton(){

    const styles = {
        backgroundColor: "blue",
        color: "white",
        width: "20%"
    }

    return(
        <div>
            <button style={styles}>Create Account</button>
        </div>
    )
}