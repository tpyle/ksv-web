import EncryptionController from "./EncryptionController";

export default function DataController() {
    /**
     * Stores a buffer of encrypted data
     * @param data {Uint8Array} The data to store
     */
    function setEncryptedData(data) {
        localStorage.setItem('encryptedData', data);
    }

    function getEncryptedData() {
        return localStorage.getItem('encryptedData');
    }

    return (
        <EncryptionController
            encryptedData={getEncryptedData()}
            setEncryptedData={setEncryptedData}
        />
    );
}