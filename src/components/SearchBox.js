import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PlusLg, Search } from "react-bootstrap-icons";

export default function SearchBox({ currentVal, setSearchVal, onCreate }) {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text id="search-icon">
                <Search />
            </InputGroup.Text>
            <Form.Control
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-icon"
                value={currentVal}
                onChange={e => setSearchVal(e.target.value)}
            />
            <Button id="create-item" variant="success" onClick={()=>onCreate()}>
                <PlusLg />
            </Button>
        </InputGroup>
    )
}
