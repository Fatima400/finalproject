import React, { useState } from 'react';
import { storage } from './firebase';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = () => {
    if (selectedImage) {
      const storageRef = storage.ref();
      const imageRef = storageRef.child(selectedImage.name);

      imageRef.put(selectedImage)
        .then(() => {
          console.log('Image uploaded successfully.');
        })
        .catch((error) => {
          console.log('Error uploading image:', error);
        });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUploader;