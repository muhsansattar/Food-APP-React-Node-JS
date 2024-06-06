function handlelogin(email, password) {
  return async function (dispatch) {
    try {
      const userData = {
        email: email,
        password: password,
      };

      const response = await fetch(
        "http://localhost:5050/api/v1/vendor/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();

      localStorage.setItem("token", data.Token);
      if (response.ok) {
        dispatch({ type: "account/loginsucess", payload: data });
      } else {
        dispatch({ type: "account/loginfailure" });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

function handlegoogleLogin(authorizationCode) {
  return async function (dispatch) {
    try {
      const response = await fetch(
        "http://localhost:5050/api/v1/vendor/oauth/google",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ authorizationCode }),
        }
      );

      const data = await response.json();
      localStorage.setItem("token", data.Token);
      if (response.ok) {
        dispatch({ type: "account/loginsucess", payload: data });
      } else {
        dispatch({ type: "account/loginfailure" });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export { handlelogin, handlegoogleLogin };
