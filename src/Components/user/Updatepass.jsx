import React from "react";

import { userSliceActions } from "../../Redux/userSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoSendOutline } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import { Button, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { BiShow, BiHide } from "react-icons/bi";

const Updatepass = () => {
    const [password, setPassword] = useState("");
    console.log(password);
    const [isRevealedPassword, setIsRevealedPassword] = useState(false);
    const token = useSelector((state) => state.user.loggedInUser?.token);
    const userinfo = useSelector((state) => state.user.loggedInUser);
    const navigate = useNavigate();
    if (!userinfo) {
        navigate("/login");
    }
    const { user } = userinfo;
    const dispatch = useDispatch();
    const updateHandler = (e) => {
        e.preventDefault();
        dispatch(userSliceActions.updateUserPassword({ password, token }));
    };
    return (
        <Container style={{ maxWidth: "600px" }}>
            <Row>
                <Link to={"/profile"}>
                    <h1>
                        back to your account {"  "}
                        <RiArrowGoBackFill />
                    </h1>
                </Link>
                <hr />
            </Row>
            <Form>
                <Helmet>
                    <title>Edit profoil information </title>
                </Helmet>

                <h4 className="text-dark"> Change your password</h4>
                <Form.Text className="text-muted">
                    If you want to change the password associated with your
                    Amazon customer account, you may do so below. Be sure to
                    click the Save Changes button when you are done.
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>user password</Form.Label>
                    <Form.Control
                        type={isRevealedPassword ? "text" : "password"}
                        // Nanousa23@
                        placeholder={user.password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Text className="text-dark">
                        <div
                            className="passwordToggleUpdatePass"
                            variant="outline-dark"
                            onClick={() =>
                                setIsRevealedPassword(!isRevealedPassword)
                            }
                        >
                            {isRevealedPassword ? <BiHide /> : <BiShow />}
                        </div>
                    </Form.Text>
                    <Button
                        onClick={updateHandler}
                        className="mt-2 "
                        variant="warning"
                        type="submit"
                    >
                        Save changes
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    );
};
export default Updatepass;
