import React, { useState } from 'react';

const FileUploader = () => {
    // Initialize file state variable
    const [file, setFile] = useState(null);

    // Handle file selection
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    // Handle file upload
    const handleFileUpload = () => {
        if (file) {
            console.log('File to upload:', file.name);

            // Create a FormData object to hold the file data
            const formData = new FormData();
            formData.append('file', file);

            // Uncomment and replace '/your-upload-endpoint' with your server's endpoint
            // fetch('/your-upload-endpoint', {
            //     method: 'POST',
            //     body: formData,
            // })
            //     .then(response => response.json())
            //     .then(data => {
            //         console.log('Upload successful:', data);
            //     })
            //     .catch(error => {
            //         console.error('Upload error:', error);
            //     });
        } else {
            console.log('No file selected.');
        }
    };

    return (
        <div>
            <div className="mb-5 mt-2">
                <label htmlFor="file-upload">Upload an image or PDF:</label>
            </div>
            <input
                type="file"
                id="file-upload"
                accept="image/*,application/pdf"
                onChange={handleFileChange}
            />
            <button
                onClick={handleFileUpload}
                className="bg-accent text-background h-[3rem] w-[5rem] rounded hover:scale-95 transition text-xl mt-5"
            >
                Upload
            </button>
        </div>
    );
};

export default FileUploader;
