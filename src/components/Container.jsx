import * as React from "react";

const Container = ({
  children,
  topNav = true,
  centered = false,
  refresh_queries = [],
  paddingBottom = true,
  background = false
}) =>
{

  return (
    <div className="App">
      <img id="background-image" src="/src/assets/bg-1.png" alt="" />

      <div className={"container-local" + (centered ? " centered" : "")}>


        <div className={"container-padding" + (topNav ? " margin" : "") + (centered ? " centered" : "") + (!paddingBottom ? " pb-4" : "") + (background ? " background-active" : "")}>
          <>
            {children}
          </>
        </div>

      </div>

    </div>
  );
};

export default Container;
