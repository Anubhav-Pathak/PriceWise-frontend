import React, { useState } from 'react';

function ImageUploader() {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

    
    const filteredFiles = Object.values(files).filter((file) =>
      allowedTypes.includes(file.type)
    );

    setSelectedImages((prevSelectedImages) => [
      ...prevSelectedImages,
      ...filteredFiles,
    ]);
  };

  return (
    <div>
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        multiple
        onChange={handleImageUpload}
      />
         <button onClick={handleUpload}>Upload</button>
      <ul>
        {selectedImages.map((image, index) => (
          <li key={index}>{image.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ImageUploader;
