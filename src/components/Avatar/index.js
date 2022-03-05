import React, { useState } from "react";

const Avatar = ({ image }) => {
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    const [imageToShow, setImageToShow] = useState("");

    const showImage = (image) => {
        setImageToShow(image);
        setLightBoxDisplay(true);
    };

    const hideLightBox = () => {
        setLightBoxDisplay(false);
    };

    return (
        <>
            <img src={image} onClick={() => showImage(image)} />

            {lightboxDisplay ? (
                <div id="lightbox" onClick={hideLightBox}>
                    <img id="lightbox-img" src={imageToShow}></img>
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default Avatar;
