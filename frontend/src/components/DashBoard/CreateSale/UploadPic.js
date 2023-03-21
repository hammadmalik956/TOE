import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload,Button } from "antd";
import React, { useState, useRef } from 'react';
import { CameraOutlined } from "@ant-design/icons";




const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};



const UploadPic = (props) => {
  // Camera Module
  
  const [cameraModalVisible, setCameraModalVisible] = useState(false);
  const videoRef = useRef(null);

  const handleCameraOpen = () => {
    setCameraModalVisible(true);
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        
      })
      .catch(error => console.error(error));
  };
  const handleCameraClose = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    setCameraModalVisible(false);
  };
  const handleCapture = async () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
    const dataURL = canvas.toDataURL();
    
    
    
      setFileList([ dataURL])
      
   // setImageSrc(dataURL);
    

    // Upload image to server
    

    handleCameraClose();
  };
  ////////
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    console.log(file)
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    
    }

    setPreviewImage(file.url || (file.preview));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  
  const handleChange = ({ fileList: newFileList }) =>
    setFileList(newFileList);
  
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
    console.log(fileList)
  const takePicButton = (
    <div>
      <CameraOutlined />
      <div style={{ marginTop: 8 }}>Take Image</div>
    </div>
  );

  return (
    <div>

      <Upload
        action={props.action}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 2 ? null : uploadButton}
      </Upload>
      
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
      <Button className="h-[102px]" onClick={handleCameraOpen}>{takePicButton}</Button>
      <Modal
        open={cameraModalVisible}
        onCancel={handleCameraClose}
        footer={[
          <Button key="cancel" onClick={handleCameraClose}>Cancel</Button>,
          <Button key="capture" type="primary" onClick={handleCapture}>Capture</Button>,
        ]}
      >
       
       <video ref={videoRef} autoPlay />
       
      </Modal>



    </div>
  )
}

export default UploadPic
