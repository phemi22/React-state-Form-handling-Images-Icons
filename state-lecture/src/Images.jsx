// import imageOne from "./images/image1.jpg"
// import imageTwo from "./images/image2.jpg"

// from the images.js file
import myImages from "./images.js"

function Images(){

    const imageStyle = {
        height: "350px"
    }

    return(
        // <div>
        //     <img src={imageOne} style={imageStyle} alt="first image" />
        //     <img src={imageTwo} style={imageStyle}  alt="second image" />
        // </div>

        // from the images.js file
        <div>
            <img src={myImages.imageOne} alt="Image One" style={imageStyle} />
            <img src={myImages.imageTwo} alt="Image Two" style={imageStyle} />
            <img src={myImages.imageThree} alt="Image Three" style={imageStyle} />
        </div>
    )
}

export default Images