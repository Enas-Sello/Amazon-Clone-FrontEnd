import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logoMain from "../assets/imgs/logo/Amazon-logo-main.png";
import { Link } from "react-router-dom";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import { api } from "../Redux/services";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { userSliceActions } from "../Redux/userSlice";
export let tokenExpirationDate;
export default function Login(props) {
<<<<<<< HEAD
  const [emailorphone, setEmailorphone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const error = useSelector((state) => state.user.error);
=======
    const [emailorphone, setEmailorphone] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const loggedInUser = useSelector((state) => state.user.loggedInUser);
    // const [login, response] = api.useLoginMutation();
    const [isRevealedPassword, setIsRevealedPassword] = useState(false);
    const dispatch = useDispatch();
>>>>>>> 4f0a016dac97c381a21e8703fcf4cd1363d71ae1

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("userData"));

        tokenExpirationDate = new Date(
            storedData?.expiration || new Date().getTime() + 1000 * 60 * 60 * 2
        );
        if (loggedInUser?.userToken) {
            localStorage.setItem(
                "userData",
                JSON.stringify({
                    userId: loggedInUser?.id,
                    token: loggedInUser?.userToken,
                    name: loggedInUser?.userName,
                    expiration: tokenExpirationDate.toISOString(),
                })
            );
        }

<<<<<<< HEAD
    tokenExpirationDate = new Date(
      storedData?.expiration || new Date().getTime() + 1000 * 60 * 60 * 2
    );
    if (loggedInUser?.token) {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          ...loggedInUser,
          expiration: tokenExpirationDate.toISOString(),
        })
      );
    }
=======
        props.funcNav(false);
>>>>>>> 4f0a016dac97c381a21e8703fcf4cd1363d71ae1

        if (loggedInUser?.userName) {
            console.log("user is logged in");
            navigate("/");
        } else {
            console.log("user is NOT logged in");
        }
    }, [loggedInUser, navigate, props]);

<<<<<<< HEAD
    if (loggedInUser?.user.name && !error) {
      console.log("user is loggedin");
      navigate(`/`);
    } else {
      console.log(loggedInUser);
    }
  }, [error, loggedInUser, navigate, props]);

  const loginn = (e) => {
    e.preventDefault();

    dispatch(userSliceActions.login({ email: emailorphone, password }));

    // login({ email: emailorphone, password })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => console.log(error));
  };
  return (
    <Container style={{ maxWidth: "600px" }}>
      <Row className="mb-3 text-center">
        <Link to="/">
          <img src={logoMain} alt="logo-main" style={{ width: "103px" }} />
        </Link>
      </Row>
      <Row className="justify-content-center">
        <Form
          className="border border-1 py-2 px-3 "
          style={{ maxWidth: "80%" }}
        >
          <h3 className="mb-3 text-start">Sign-In</h3>
          <Form.Group>
            <Form.Label htmlFor="name">Email or mobile phone number</Form.Label>
            <Form.Control
              type="email"
              id="name"
              required
              value={emailorphone}
              onChange={(e) => setEmailorphone(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="mb-3 ">
            <Button
              className="form-btn"
              style={{
                background: "#f0c14b",
                borderColor: "#a88734 #9c7e31 #846a29",
                marginTop: "20px",
              }}
              onClick={loginn}
              type="submit"
            >
              Sign In
            </Button>
            {error && <div> there is an error !</div>}
          </div>
          <Col className="mb-3 text-center">New to Amazon ?{"  "}</Col>
          <Link to="/signup">
            {"  "}
            <Button
              className="form-btn"
              style={{
                background: "#e7e9ec",
                borderColor: "#adb1b8 #a2a6ac #8d9096",
              }}
            >
              Create your Amazon account
            </Button>
          </Link>
        </Form>
      </Row>
    </Container>
  );
=======
    const loginn = (e) => {
        e.preventDefault();
        dispatch(userSliceActions.login({ email: emailorphone, password }));

        // login({ email: emailorphone, password })
        //   .then((response) => {
        //     console.log(response);
        //   })
        //   .catch((error) => console.log(error));
    };
    return (
        <Container style={{ maxWidth: "600px" }}>
            <Row className="mb-3 text-center">
                <Link to="/">
                    <img
                        src={logoMain}
                        alt="logo-main"
                        style={{ width: "103px" }}
                    />
                </Link>
            </Row>
            <Row className="justify-content-center">
                <Form
                    className="border border-1 py-2 px-3 "
                    style={{ maxWidth: "80%" }}
                >
                    <h3 className="mb-3 text-start">Sign-In</h3>
                    <Form.Group>
                        <Form.Label htmlFor="name">
                            Email or mobile phone number
                        </Form.Label>
                        <Form.Control
                            type="email"
                            id="name"
                            required
                            value={emailorphone}
                            onChange={(e) => setEmailorphone(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control
                            type={isRevealedPassword ? "text" : "password"}
                            id="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Text className="text-dark">
                            <div
                                className="passwordToggle"
                                variant="outline-dark"
                                onClick={() =>
                                    setIsRevealedPassword(!isRevealedPassword)
                                }
                            >
                                {isRevealedPassword ? <BiHide /> : <BiShow />}
                            </div>
                        </Form.Text>
                    </Form.Group>
                    <div className="mb-3 ">
                        <Button
                            className="form-btn"
                            style={{
                                background: "#f0c14b",
                                borderColor: "#a88734 #9c7e31 #846a29",
                                marginTop: "20px",
                            }}
                            onClick={loginn}
                            type="submit"
                        >
                            Sign In
                        </Button>
                    </div>
                    <Col className="mb-3 text-center">
                        New to Amazon ?{"  "}
                    </Col>
                    <Link to="/signup">
                        {"  "}
                        <Button
                            className="form-btn"
                            style={{
                                background: "#e7e9ec",
                                borderColor: "#adb1b8 #a2a6ac #8d9096",
                            }}
                        >
                            Create your Amazon account
                        </Button>
                    </Link>
                </Form>
            </Row>
        </Container>
    );
>>>>>>> 4f0a016dac97c381a21e8703fcf4cd1363d71ae1
}
