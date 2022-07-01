import Navbar from './Navbar';
function onSignUp() {
  window.location.href  = "/";
}
function Signup() {
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

          <button type="button" onClick={onSignUp} class="btn btn-primary btn-block mb-4">
            Sign up
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
