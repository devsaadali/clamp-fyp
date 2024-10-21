import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [campus, setCampus] = useState("");
  const [file, setFile] = useState(null);
  const [campuses, setCampuses] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subject", subject);
    formData.append("campus", campus);
    formData.append("file", file);

    axios
      .post("/api/pastpapers/", formData)
      .then((response) => console.log(response.data))
      .catch((error) => console.error("There was an error!", error));
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <Box
      className="upload-page"
      sx={{
        backgroundColor: "#EDEDED",
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingLeft: "6%",
        paddingRight: "6%",
        // minHeight: "100vh",
        minHeight: "100dvh",
        paddingTop: {
          xs: "60px",
          sm: "30px",
        },
      }}
    >
      <Paper
        sx={{
          width: {
            xs: "90%",
            sm: "70%",
            md: "60%",
            lg: "50%",
          },
          minWidth: "290px",
          textAlign: "center",
          // borderRadius: "31px",
          borderRadius: "25px",
          backgroundColor: "rgb(245, 245, 245)",
          paddingY: "10px",
          boxShadow: "0px 0px 15px -10px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            padding: "10px",
            marginTop: "20px",
            // marginBottom: "15px",
            fontWeight: "bold",
            fontSize: "35px",
          }}
        >
          Login
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: window.innerWidth < 600 ? "0px" : "20px",
          }}
        >
          <input
            type="text"
            aria-label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username*"
            style={{
              width: "80%",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
              fontSize: "16px",
              height: "55px",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "20px",
              paddingRight: "20px",
              background: "none",
              borderRadius: "8px",
            }}
          />
          <input
            type="password"
            aria-label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password*"
            style={{
              width: "80%",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
              fontSize: "16px",
              height: "55px",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "20px",
              paddingRight: "20px",
              background: "none",
              borderRadius: "8px",
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginBottom: "15px",
              marginTop: "10px",
              width: "80%",
              height: "50px",
              padding: "10px",
              backgroundColor: "black",
              borderRadius: "12px",
              fontSize: "18px",
              ":hover": {
                backgroundColor: "black",
              },
            }}
          >
            Login
          </Button>
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Don't have an account?{" "}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Signup
            </Link>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
