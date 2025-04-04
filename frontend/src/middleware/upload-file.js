const uploadFile = async (file) => {
    if (!file) {
      console.error("No file selected");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file); // 'file' is the key name used in the backend
  
    try {
      const response = await fetch("https://yourserver.com/upload", {
        method: "POST",
        body: formData,
      });
  
      const result = await response.json();
      console.log("Upload successful:", result);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  
  // Example Usage
  document.querySelector("input[type='file']").addEventListener("change", async (event) => {
    const file = event.target.files[0];
    await uploadFile(file);
  });
  