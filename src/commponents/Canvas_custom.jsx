import React from 'react'
import { Offcanvas, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Canvas_custom = () => {
    const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      
      <Button variant="primary" onClick={handleShow}>
        Launch offcanvas
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="top">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasExampleLabel">Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column h-100 justify-content-center align-items-center">
            <div className="search-voice">
              <i className="ri-mic-fill align-middle"></i>
              <span className="voice-wave"></span>
              <span className="voice-wave"></span>
              <span className="voice-wave"></span>
            </div>
            <h4>Talk to me, what can I do for you?</h4>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Canvas_custom
