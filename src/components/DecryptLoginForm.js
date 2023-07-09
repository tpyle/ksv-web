import classNames from 'classnames';
import { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { UnlockFill } from 'react-bootstrap-icons';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function DecryptLoginForm({
    hasData=false,
    error=null,
    setPassword=()=>{},
}) {
    const [tempPassword, setTempPassword] = useState("");
    const passwordRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        setPassword(tempPassword);
    }

    return (
        <Container className="d-flex w-100 justify-content-center align-items-center text-align-center">
            <Form onSubmit={handleSubmit}>
                <Form.Group className={classNames("mb-3")}>
                    <Form.Label>{hasData ? "Please provide your master password" : "Please set your master password"}</Form.Label>
                    <Form.Control ref={passwordRef} type="password" value={tempPassword} onChange={(e) => {setTempPassword(passwordRef.current.value)}} />
                    <Form.Text className="text-muted">
                        Your master password is used to encrypt and decrypt your data. It is not stored anywhere.
                    </Form.Text>
                </Form.Group>
                {error ? <Alert variant='error'>{error}</Alert> : null}
                <Button variant="success" type="submit">
                    <UnlockFill className={classNames('ml-2')} />
                    <span>Decrypt</span>
                </Button>
            </Form>
        </Container>
    );
}
