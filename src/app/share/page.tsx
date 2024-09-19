"use client"
import React, { useState } from 'react';

const Share = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    description: '',
    image: '', 
  });

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await fetch('https://syntax-share-backend.vercel.app/api/v1/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Post submitted successfully!');
        // Clear form after successful submission
        setFormData({
          name: '',
          title: '',
          description: '',
          image: '',
        });
      } else {
        alert('Failed to submit post!');
      }
    } catch (error) {
      console.error('Error submitting post:', error);
      alert('Failed to submit post!');
    }
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto py-20 p-8">
      <h2 className="text-2xl font-bold mb-4">Share your post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
            required
          />
        </div>
        <div>
          <label htmlFor="title" className="block font-medium">Post Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block font-medium">Post Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block font-medium">Image URL (optional)</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Share Post
        </button>
      </form>
    </div>
  );
};

export default Share;