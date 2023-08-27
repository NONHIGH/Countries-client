import { useEffect, useState } from "react";
import { ToastContainer } from "../stylesComponent/StyleToast";

const Toast = ({ type, title, message, duration, $isVisible }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible($isVisible);

    const timeout = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      console.log('finalizado');
      clearTimeout(timeout);
    };
  }, [duration, $isVisible]);
  if(!title){
    return null;
  }
  return (
    <>
      <ToastContainer type={type} $isVisible={visible}>
        {title && <strong>{title}</strong>}
        {message && <span>{message}</span>}
      </ToastContainer>
    </>
  );
};

export default Toast;
