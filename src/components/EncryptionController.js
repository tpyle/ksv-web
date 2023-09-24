import { useState, useEffect } from 'react';

import KSVObject from 'ksv-lib/KSVObject';

import KSVController from './KSVController';
import DecryptLoginForm from './DecryptLoginForm';


export default function EncryptionController({ encryptedData, setEncryptedData, setAuthenticated }) {
    const [ksv, setKSV] = useState(null);
    const [password, setPassword] = useState(null);
    const [failedEncrypt, setFailedEncrypt] = useState(null);

    useEffect(() => {
        async function decrypt() {
            if (encryptedData) {
                try {
                    setKSV(await KSVObject.decrypt(encryptedData, password));
                    setAuthenticated(true);
                } catch (e) {
                    console.error(e);
                    setFailedEncrypt(new Error(`Failed to decrypt data. Is your password correct?`));
                }
            } else {
                setKSV(KSVObject.default());
                setAuthenticated(true);
            }
        }
        if (password !== null) {
            decrypt();
        }
    }, [password, encryptedData, setAuthenticated]);

    async function encrypt() {
        setEncryptedData(await ksv.encrypt(password));
    }

    if (ksv !== null) {
        return (
            <KSVController ksv={ksv} saveKSV={encrypt} />
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
