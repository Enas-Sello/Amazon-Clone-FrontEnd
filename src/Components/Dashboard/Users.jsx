import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Users() {
    const loggedInUser = useSelector((state) => state.user.loggedInUser);
    // console.log(loggedInUser);
    // get all users from the store
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    if (!user) {
        navigate("/login");
    }
    const dispatch = useDispatch();
    // get all users
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get("https://amazon-clone-deploy.herokuapp.com/user/allUsers", {
                headers: {
                    "x-access-token": `${loggedInUser.token}`,
                },
            })
            .then((res) => {
                setUsers(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [loggedInUser.token]);

    return (
        <div className="container">
            <p></p>
            <div className="row">
                <div className="col-md-12">
                    <h2>
                        total users:{" "}
                        <span className=" text-warning">{users.length}</span>
                    </h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.role ? "Admin" : "User"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
