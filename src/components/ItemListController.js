import { useState } from "react";
import { Row } from "react-bootstrap";

import Col from "react-bootstrap/Col";
import classNames from "classnames";

import ItemList from "./ItemList";
import SearchBox from "./SearchBox";


/**
 * @typedef {Object} ItemListControllerProps
 * @property {import("ksv-lib").KSVObject} ksvObject
 */


/**
 * @param {ItemListControllerProps} param0 
 */
export default function ItemListController({ ksvObject }) {
    const [activeItem, setActiveItem] = useState(null);
    const [searchVal, setSearchVal] = useState("");
    const [isCreating, setIsCreating] = useState(false);

    return (
        <Row className="mt-2">
            <Col className={classNames(
                activeItem || isCreating ? "d-xs-none" : "",
            )} md={
                activeItem || isCreating ? 4 : 12
            }>
                <SearchBox currentVal={searchVal} setSearchVal={setSearchVal} onCreate={setIsCreating} />
                <ItemList items={ksvObject.itemEntries} filter={searchVal} />
            </Col>
            {activeItem && !isCreating ? (
                <Col xs="8">
                </Col>
            ) : null}
            {isCreating ? (
                <Col xs="8">
                </Col>
            ) : null}
        </Row>
    )
}
