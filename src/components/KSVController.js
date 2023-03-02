import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


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
        <Tabs
            defaultActiveKey="items"
        >
            <Tab eventKey="items" title="Item">

            </Tab>
            <Tab eventKey="templates" title ="Templates">

            </Tab>
        </Tabs>
    )
}