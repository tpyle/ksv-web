import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import KeyCharacterClass, { DEFAULT_CHARACTER_CLASSES } from "ksv-lib/schemas/KeyCharacterClass";

/**
 * @typedef {Object} KeyCharacterClassFormProps
 * @property {KeyCharacterClass} currentClass
 * @property {function} onSubmit
 * @property {function} onCancel
 * @property {function} onDelete
 */

/**
 * @param {KeyCharacterClassFormProps} param0
 */
export default function KeyCharacterClassForm({ currentClass=null, onSubmit, onCancel, onDelete }) {
    const [isStandardCharacterClass, setIsStandardCharacterClass] = useState(currentClass ? currentClass.isStandardCharacterClass : false)
    const [characters, setCharacters] = useState(currentClass ? currentClass.characters : [])
    const [standardCharacterClass, setStandardCharacterClass] = useState(currentClass ? currentClass.standardCharacterClass : null)
    const [minLen, setMinLen] = useState(currentClass ? currentClass.minLen : 0)
    const [maxLen, setMaxLen] = useState(currentClass ? currentClass.maxLen : 0)

    console.log('classes');
    console.log(DEFAULT_CHARACTER_CLASSES);

    return (
        <Form>
            { isStandardCharacterClass ? (
                <Form.Group>
                    <Form.Label>Characters</Form.Label>
                    <Form.Control type="text" value={characters} onChange={(e) => setCharacters(e.target.value)} />
                </Form.Group>
            ) : (
                <Form.Group>
                    <Form.Label>Standard Character Class</Form.Label>
                    <Form.Control as="select" value={standardCharacterClass} onChange={(e) => setStandardCharacterClass(e.target.value)}>
                        <option value={null}>None</option>
                        {Object.entries(DEFAULT_CHARACTER_CLASSES).map(([k,v]) => (
                            <option key={k} value={v}>{k}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
            )}
            <Form.Group>
                <Form.Label>Minimum Length</Form.Label>
                <Form.Control type="number" value={minLen} onChange={(e) => setMinLen(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Maximum Length</Form.Label>
                <Form.Control type="number" value={maxLen} onChange={(e) => setMaxLen(e.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={() => onSubmit({
                characters,
                standardCharacterClass,
                minLen,
                maxLen,
            })}>Submit</Button>
            <Button variant="secondary" onClick={() => onCancel()}>Cancel</Button>
            {currentClass && <Button variant="danger" onClick={() => onDelete()}>Delete</Button>}
        </Form>
    )
}
