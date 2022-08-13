import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import axios from "axios";

function Search() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handelSubmet = (e) => {
        e.preventDefault();
        let path = "/searchResults";
        navigate(path + "/" + query);
    };
    return (
        <Form className="header-search" onSubmit={handelSubmet}>
            <InputGroup className="input-group">
                <FormControl
                    className="form-control"
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search Prodaucts"
                    aria-label="Search Prodaucts"
                    aria-describedby="button-search"
                />
                <button
                    className="btn searchIcon "
                    type="submit"
                    id="button-search"
                >
                    <GoSearch className="fw-bolder fs-5" />
                </button>
            </InputGroup>
        </Form>
    );
}

export default Search;
