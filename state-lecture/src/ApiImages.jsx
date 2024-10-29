// Working with images fetched from API

import imageOne from "./images/image1.jpg"
import imageTwo from "./images/image2.jpg"
import imageThree from "./images/image3.jpg"
import { Si1Password } from "react-icons/si";

const allMyImages = [
    {
        id: 1,
        image: imageOne
    },
    {
        id: 2,
        image: imageTwo
    },
    {
        id: 3,
        image: imageThree
    }
]

function ApiImages(){

    const imageStyle = {
        height: "200px"
    }

    return(
    
        <div>
            {allMyImages.map((image)=>(
                <div key={image.id}>
                    <img src={image.image} alt="image" style={imageStyle} />
                </div>
            ))}

            {/* To render image from public folder */}
            <img src="/vite.svg" alt="vite logo" />

            <Si1Password />
        </div>
    )
}

export default ApiImages