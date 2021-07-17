import React from "react";

const Header = () => {
  return (
    <>
      <header className="App_header">
        <form>
          <input
            type="text"
            className=""
            value=""
            placeholder="Write a Title..."
          />
          <textarea
            type="text"
            className=""
            placeholder="Description..."
            rows="5"
            cols=""
            value=""
          />
          <br />
          <input type="submit" />
          <br />
        </form>
      </header>
    </>
  );
};

export default Header;
