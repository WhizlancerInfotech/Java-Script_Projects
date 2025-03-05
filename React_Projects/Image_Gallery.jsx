import { useEffect, useState } from "react";

export default function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://api.unsplash.com/photos?client_id=YOUR_ACCESS_KEY")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div>
      {images.map((img) => (
        <img key={img.id} src={img.urls.small} alt={img.description} width="200" />
      ))}
    </div>
  );
}
