import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/FireContext";

const UploadImgFirebase = () => {
  const { storage } = useContext(FirebaseContext);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState();
  const handleSendimg = (e) => {
    e.preventDefault();
    const ref = storage.ref(`images/${file.name}`);
    const uploadImg = ref.put(file);
    uploadImg.on("state_changed", console.log, console.error, () => {
      ref.getDownloadURL().then((res) => {
        setUrl(res);
        setFile(null);
      });
    });
  };
  useEffect(() => {
  }, [url]);
  return (
    <>
      <form onSubmit={handleSendimg}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button>submit</button>
      </form>
    </>
  );
};

export default UploadImgFirebase;
