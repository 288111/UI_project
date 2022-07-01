import Navbar from "./Navbar";

function onSignIn() {
  window.location.href  = "/";
}
function Signin() {
  return (
    <>
    <Navbar />
    <div class="d-flex justify-content-center mt-5">
    <form>
      <div class="form-outline mb-4">
        <input type="email" id="username" class="form-control" />
        <label class="form-label" for="username">
            Username
        </label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" id="password" class="form-control" />
        <label class="form-label" for="password">
          Password
        </label>
      </div>


      <button type="button" onClick={onSignIn}class="btn btn-primary btn-block mb-4">
        Sign in
      </button>

      <div class="text-center">
        <p>
          Not a member? <a href="/signup">Signup</a>
        </p>
      </div>
    </form>
    </div>
    </>
  );
}

export default Signin