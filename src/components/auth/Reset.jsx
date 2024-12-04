import { AiOutlineClose } from "react-icons/ai";
import resetImg from "../../assets/forgot.svg";


const Reset = ({onLogin}) => {
  return (
    <div className="main-container --flex-center">
      <div className="form-container reset">
        <form className="--form-control">
          <h2 className="--color-danger --text">Reset</h2>

          <input type="email" className="--width-100" placeholder="Email" />

          <button className="--btn --btn-primary --btn-block">
            Reset Password
          </button>

          <span className="--text-sm --block --text-center">
            We'll send you a reset link!!!
          </span>
          <div className="close" onClick={onLogin}>
            <AiOutlineClose color="red" />
          </div>
        </form>
      </div>
      <div className="img-container">
        <img src={resetImg} alt="login-image" />
      </div>
    </div>
  );
};

export default Reset;
