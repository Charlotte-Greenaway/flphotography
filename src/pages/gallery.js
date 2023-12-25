import React, { useState, useEffect } from "react";
import Gallery from "react-photo-gallery";
import p1 from "../assets/gallery/p1.jpg";
import p2 from "../assets/gallery/p2.jpg";
import p3 from "../assets/gallery/p3.jpg";
import p4 from "../assets/gallery/p4.jpg";
import p5 from "../assets/gallery/p5.jpg";
import p6 from "../assets/gallery/p6.jpg";
import p7 from "../assets/gallery/p7.jpg";
import p8 from "../assets/gallery/p8.jpg";
import p9 from "../assets/gallery/p9.jpg";
import p10 from "../assets/gallery/p10.jpg";
import p11 from "../assets/gallery/p11.jpg";
import p12 from "../assets/gallery/p12.jpg";
import p13 from "../assets/gallery/p13.jpg";
import p14 from "../assets/gallery/p14.jpg";
import p15 from "../assets/gallery/p15.jpg";
import p16 from "../assets/gallery/p16.jpg";
import p17 from "../assets/gallery/p17.jpg";
import p18 from "../assets/gallery/p18.jpg";
import p19 from "../assets/gallery/p19.jpg";
import p20 from "../assets/gallery/p20.jpg";
import p21 from "../assets/gallery/p21.jpg";
import p22 from "../assets/gallery/p22.jpg";
import p23 from "../assets/gallery/p23.jpg";
import p24 from "../assets/gallery/p24.jpg";
import p25 from "../assets/gallery/p25.jpg";
import p26 from "../assets/gallery/p26.jpg";
import p27 from "../assets/gallery/p27.jpg";
import p28 from "../assets/gallery/p28.jpg";
import p29 from "../assets/gallery/p29.jpg";
import p30 from "../assets/gallery/p30.jpg";
import p31 from "../assets/gallery/p31.jpg";
import p32 from "../assets/gallery/p32.jpg";
import p33 from "../assets/gallery/p33.jpg";
import p34 from "../assets/gallery/p34.jpg";
import p35 from "../assets/gallery/p35.jpg";

const ImageModal = ({ src, onClose }) => {
    if (!src) return null;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
            <div style={{ position: 'relative' }}>
                <img src={src} alt="Enlarged pic" style={{ maxWidth: '90vw', maxHeight: '90vh' }} />
                <button onClick={onClose} style={{ position: 'absolute', top: 20, right: 20, fontSize: '1.5rem', color: 'white', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>✕</button>
            </div>
        </div>
    );
};

const GalleryPage = () => {
    const [photos, setPhotos] = useState([]);
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const imageImports = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35];
        const loadImages = async () => {
            const images = await Promise.all(imageImports.map(src => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = () => {
                        resolve({
                            src,
                            width: img.naturalWidth,
                            height: img.naturalHeight
                        });
                    };
                    img.onerror = reject;
                    img.src = src;
                });
            }));
            setPhotos(images);
        };

        loadImages();
    }, []);

    const openModal = (event, { photo }) => {
        setCurrentImage(photo.src);
    };

    const closeModal = () => {
        setCurrentImage(null);
    };

    return (
        <div>
            <Gallery photos={photos} onClick={openModal} />
            <ImageModal src={currentImage} onClose={closeModal} />
        </div>
    );
};

export default GalleryPage;
