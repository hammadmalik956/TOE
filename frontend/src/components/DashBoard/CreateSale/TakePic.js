import React, { useState, useRef } from 'react';
import { Button, Modal } from 'antd';
import { CameraOutlined } from "@ant-design/icons";

const TakePic = () => {
  const [imageSrc, setImageSrc] = useState([null]);
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
    setImageSrc(dataURL);

    // Upload image to server
    

    handleCameraClose();
  };
  
  const takePicButton = (
    <div>
      <CameraOutlined />
      <div style={{ marginTop: 8 }}>Take Image</div>
    </div>
  );
       
  return (
    <div>
      <Button onClick={handleCameraOpen}>{takePicButton}</Button>
      <Modal
        open={cameraModalVisible}
        onCancel={handleCameraClose}
        footer={[
          <Button key="cancel" onClick={handleCameraClose}>Cancel</Button>,
          <Button key="capture" type="primary" onClick={handleCapture}>Capture</Button>,
        ]}
      >
       
       <video ref={videoRef} autoPlay />
       {imageSrc && <img src={imageSrc} alt="Captured" />}
      </Modal>
      
     
    </div>
  );
};

export default TakePic;