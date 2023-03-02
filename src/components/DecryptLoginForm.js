import { useState, useRef } from 'react';

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
        <form onSubmit={handleSubmit}>
            <div>{hasData ? "Please provide your master password" : "Please set your master password"}</div>
            <input ref={passwordRef} type="password" value={tempPassword} onChange={(e) => {setTempPassword(passwordRef.current.value)}} />
            {error ? <div>{error}</div> : null}
            <input type="submit" value="Decrypt" />
        </form>
    )
}