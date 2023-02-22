import {Alert} from "react-bootstrap";
import {useState} from "react";

const AlertMessage = ({variant, message}) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
        <>
          <Alert variant={variant}>
            <p>{message}</p>
          </Alert>
        </>
    );
  } else {
    return (<></>);
  }
}

export default AlertMessage