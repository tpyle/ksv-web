import { Save2Fill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import { Route, Routes } from 'react-router-dom';

import ItemListController from './ItemListController';

/**
 * @typedef {Object} KSVControllerProps
 * @property {import("ksv-lib").KSVObject} ksv
 * @property {function} saveKSV
 */

/**
 * @param {KSVControllerProps} param0 
 */
export default function KSVController({ ksv, saveKSV }) {
    return (
        <>
            <Button onClick={() => { saveKSV() }} variant="success">
                <Save2Fill />
            </Button>
            <Routes>
                <Route exact path="/" element={<ItemListController ksvObject={ksv} />} />
                <Route path="/templates" element={<span>Hello</span>} />
            </Routes>
        </>
    )
}
