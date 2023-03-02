import { useState, useEffect } from 'react';

import KSVObject from 'ksv-lib/KSVObject';
import DecryptLoginForm from './DecryptLoginForm';


export default function EncryptionController({ encryptedData, setEncryptedData }) {
    const [ksv, setKSV] = useState(null);
    const [password, setPassword] = useState(null);
    const [failedEncrypt, setFailedEncrypt] = useState(null);

    useEffect(() => {
        async function decrypt() {
            if (encryptedData) {
                try {
                    setKSV(KSVObject.decrypt(encryptedData, password));
                } catch (e) {
                    setFailedEncrypt(e);
                }
            } else {
                setKSV(KSVObject.default());
            }
        }
        if (password !== null) {
            decrypt();
        }
    }, [password, encryptedData]);

    async function encrypt() {
        ksv.encrypt();
    }

    if (ksv !== null) {
        return (
            "We are authenticated to our object"
        );
    } else {
        return (
            <DecryptLoginForm
                hasData={encryptedData !== null}
                error={failedEncrypt}
                setPassword={setPassword}
            />
        );
    }
}