// The home page.

const Home = () => {
  return (
    <>
      <div style={{ maxWidth: "800px", margin: "10px auto" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={"/jay1.jpeg"}
            alt="Jay Adusumilli"
            style={{ width: "60%", height: "auto", maxWidth: "600px" }}
          />
        </div>
        <br />
        <br />
        <div style={{ margin: "auto 20px" }}>
          <h1>Hello!</h1>
          <p>
            My name is Jay Adusumilli and I'm a computer engineering graduate
            from Clemson University. I hail from Fort Mill, SC and went to high
            school at the South Carolina Governer's School for Science and Math.
            I have over 7 years of experience in competition robotics,
            programming and 3D printing. I am certified in Python, Microsoft
            Office and Solidworks. I also am proficient in C, C++, C# and
            Matlab. In addition to programming, I love working with my hands
            designing and building projects.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
