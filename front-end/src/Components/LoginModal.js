//Dependencies
import { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProviders";
import { signInWithGoogle, } from "../Services/Firebase";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//CSS
import "./LoginModal.css";

//BOOTSTRAP
import Button from "react-bootstrap/esm/Button";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const LoginModal = ({ modalOpen, setModalOpen, setApplicationUser }) => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const userCheck = async (user) => {
    axios.get(`${API}/users/${user.uid}`).then((res) => {
      if (res.data.payload.uuid) {
        setApplicationUser(res.data.payload);
      }
    });
  };

  useEffect(() => {
    if (user) {
      userCheck(user);
      setModalOpen(false);
      navigate("/dashboard")
    }
  }, [user]);

  //stopPropagation prevents the "login-modal" onClick event to happen
  return modalOpen ? (
    <div className="login-modal" onClick={() => setModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="avatar-container">
          <div className="login-avatar">
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
        <div className="close">
          <div className="x-mark" onClick={() => setModalOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="signin-buttons">
          <h3>Login</h3>
          <Button onClick={signInWithGoogle}>Sign in With Google</Button>
          <p>Not a user? <Link to="/sign-up" onClick={() => setModalOpen(false)}>Please sign up first.</Link></p>
        </div>
      </div>
    </div>
  ) : null;
};

export default LoginModal;
