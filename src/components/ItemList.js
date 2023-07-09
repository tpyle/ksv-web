import ListGroup from 'react-bootstrap/ListGroup';

/**
 * Determines whether item matches the given string.
 * @param {import("ksv-lib/schemas/ItemEntry").ItemEntry} item 
 * @param {string} string 
 */
function matchesString(item, string) {
    for(const altName in item.alternativeNames) {
        if (altName.toLowerCase().includes(string)) return true;
    }
    if (item.itemName.toLowerCase().includes(string)) return true;
}

/**
 * @typedef {Object} ItemListProps
 * @property {import("ksv-lib/schemas/ItemEntry").ItemEntry[]} items
 */

/**
 * @param {ItemListProps} param0 
 */
export default function ItemList({ items, filter="" }) {
    const _filter = filter.toLowerCase();
    return (
        <ListGroup>
            {items.filter(item => matchesString(item, _filter)).map((item) => (
                <ListGroup.Item key={item.id}>
                    {item.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
