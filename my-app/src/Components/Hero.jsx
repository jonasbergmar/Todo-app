const Hero = () => {
  return (
    <>
      <div className="heroContainer">
        <img
          className="heroImage"
          src="https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png"
          alt=""
        />
        <div className="heroText">
          <h1>Welcome!</h1>
          <h2>To Your New Favorite Checklist.</h2>
          <button className="heroCta">Go to todos</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
