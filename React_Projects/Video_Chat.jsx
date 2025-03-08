import { useRef, useEffect } from "react";

export default function VideoChat() {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      localVideoRef.current.srcObject = stream;
    });
  }, []);

  return (
    <div>
      <video ref={localVideoRef} autoPlay muted className="w-1/2" />
      <video ref={remoteVideoRef} autoPlay className="w-1/2" />
    </div>
  );
}
