"use client";
import React, { useState, useEffect } from "react";
import EditableImage from "../../components/layout/EditableImage";
import Image from "next/image";
import { toast } from "react-hot-toast";

const Carousel = () => {
  const [image, setImage] = useState("");
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    fetch("/api/carousel")
      .then((res) => res.json())
      .then((data) => {
        setCarouselImages(data.images);
        console.log("Carousel Images:", data.images);
      })
      .catch((error) =>
        console.error("Error fetching carousel images:", error)
      );
  }, []);

  const uploadImage = async (imageData) => {
    try {
      if (!imageData) return; // Skip upload if no image data provided

      const response = await fetch("/api/carousel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageUrl: imageData }),
      });
      const data = await response.json();
      console.log("Image uploaded successfully:", data);

      // Update the state with the newly uploaded image
      setCarouselImages([...carouselImages, data.image]);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleDelete = async (_id) => {
    try {
      const promise = new Promise(async (resolve, reject) => {
        const response = await fetch(`/api/carousel?_id=${_id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          resolve();
        } else {
          reject();
        }
      });

      await toast.promise(promise, {
        loading: "Deleting...",
        success: "Deleted",
        error: "Error",
      });

      // Remove the image from the state
      setCarouselImages(carouselImages.filter((img) => img._id !== _id));
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <div className="max-w-4xl m-8 p-4 rounded-lg bg-slate-400">
      <h1 className="text-3xl font-bold text-center m-8">
        Upload Carousel Images
      </h1>

      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Image</h2>
        <EditableImage link={image} setLink={uploadImage} />
        <div className="grid grid-cols-1 gap-4 mt-4">
          {carouselImages.map((carouselImage) => (
            <div
              key={carouselImage._id}
              className="carousel-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl relative"
            >
              <Image
                src={carouselImage.imageUrl}
                width={200}
                height={200}
                alt="Carousel Image"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-2 left-2">
              <button onClick={() => handleDelete(carouselImage._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
  Delete
</button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
