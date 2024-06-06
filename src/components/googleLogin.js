import React from "react";

const GoogleLoginComponent = () => {
  const handleGoogleLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=138090815002-r5j12j1f5okmum3bg1e8k7t8biropi83.apps.googleusercontent.com&redirect_uri=http://localhost:3000/dashboard&response_type=code&scope=openid%20email&access_type=offline`;
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default GoogleLoginComponent;
