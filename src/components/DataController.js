import EncryptionController from "./EncryptionController";

export default function DataController({ setAuthenticated }) {
    /**
     * Stores a buffer of encrypted data in local storage
     * @param data {Buffer} The data to store
     */
    function setEncryptedData(data) {
        localStorage.setItem('encryptedData', data);
    }

    /**
     * Gets the encrypted data from local storage
     * @returns {Buffer} The encrypted data
     */
    function getEncryptedData() {
        return localStorage.getItem('encryptedData');
    }

    return (
        <EncryptionController
            encryptedData={getEncryptedData()}
            setEncryptedData={setEncryptedData}
            setAuthenticated={setAuthenticated}
        />
    );
}
