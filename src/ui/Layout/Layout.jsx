import "./Layout.css";
export const Layout = ({ children }) => {
  return (
    <div className="layout-container" >
      <div className="main-container">
        <div className="layout-colum">
          <img src="/assets/devu-icon.png" alt="logo" />
        </div>
        <div className="main-content">
          {children}
        </div>
        <div className="polyfill-colum" />
      </div>
    </div>
  );
};
