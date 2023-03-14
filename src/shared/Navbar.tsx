
export const Navbar = () => {
  return (
    <>
        <div className="navbar">
        <div className="logo">
          <h1>LOGO</h1>
          {/* <img src="" alt="" /> */}
        </div>
        <div className="row-items">
          <h3>Home</h3>
          <h3>Ways to donate</h3>
          <h3>About Us</h3>
          <h3>Blog</h3>
          <h3>Connect with us</h3>
          <h3>Sponsor a Child</h3>
        </div>
        <div className="search_user_items">
          <form >
          <input type="text" placeholder='Search by code:'/>
          </form>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-sharp fa-solid fa-cart-shopping"></i>
          <i className="fa-solid fa-user"></i>


        </div>
        </div>
    </>
  )
}
