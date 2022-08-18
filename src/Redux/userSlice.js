import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tokenExpirationDate from "../pages/Login";
const initialState = {
    loading: false,
    loggedInUser: null,
    error: "",
};

const storedData = JSON.parse(localStorage.getItem("userData"));

// Generates pending, fulfilled and rejected action types
// "https://amazon-clone-deploy.herokuapp.com/user/signup",

export const login = createAsyncThunk("user/login", async (userData) => {
    const response = await axios.post(
        "https://amazon-clone-deploy.herokuapp.com/user/login",
        userData
    );
    console.log(response.data);
    return response.data;
});
///////////////////////////////////////
// "https://amazon-clone-deploy.herokuapp.com/user/register",

export const register = createAsyncThunk("user/register", async (userData) => {
    const response = await axios.post(
        "https://amazon-clone-deploy.herokuapp.com/user/register",
        userData
    );
    return response.data;
});

// update user
export const updateUser = createAsyncThunk("user", async (userData) => {
    const bodyParameters = {
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
    };
    //console.log(userData);
    const response = await axios
        .put("https://amazon-clone-deploy.herokuapp.com/user", bodyParameters, {
            headers: {
                // "Content-Type": "application/json",
                "x-access-token": `${userData.token}`,
            },
        })
        .then((response) => {
            console.log("hhddd");
            localStorage.setItem(
                "userData",
                JSON.stringify({
                    user: response.data.user,
                    token: userData.token,
                    expiration: storedData?.expiration,
                })
            );
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
    return response.data;
});

//update password
export const updateUserPassword = createAsyncThunk("user", async (userData) => {
    console.log(userData);
    const response = await axios.put(
        "https://amazon-clone-deploy.herokuapp.com/user/password",
        {
            password: userData.password,
            confirm_password: userData.confirm_password,
        },
        {
            headers: {
                // "Content-Type": "application/json",
                "x-access-token": `${userData.token}`,
            },
        }
    );

    return response.data;
});
// get all users
export const getAllUsers = createAsyncThunk("user", async (userData) => {
    const response = await axios.get(
        "https://amazon-clone-deploy.herokuapp.com/user/allUsers",
        {
            headers: {
                "x-access-token": `${userData.token}`,
            },
        }
    );
    console.log(response.data);
    return response.data;
});
//////////
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout(state, action) {
            localStorage.removeItem("userData");
            state.loggedInUser = null;
        },
        setUser(state, action) {
            state.loggedInUser = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.loggedInUser = action.payload;
            state.error = "";
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.loggedInUser = null;
            state.error = action.error.message;
        });

        /////////////////////////////////////////
        builder.addCase(register.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.loading = false;
            state.loggedInUser = action.payload;
            state.error = "";
        });
        builder.addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.loggedInUser = null;
            state.error = action.error.message;
        });
        //////////////

        builder.addCase(updateUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.loggedInUser.user = action.payload.user;
            state.error = "";
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.loggedInUser = null;
            state.error = action.error.message;
        });
        //////////////
    },
});

export const userSliceActions = {
    ...userSlice.actions,
    login,
    register,
    updateUser,
    updateUserPassword,
    getAllUsers,
};

export default userSlice.reducer;
