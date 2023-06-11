import style from "./Home.style.module.scss";

const Home = (props) => {
  return (
    <>
      <h1>Home Component</h1>
      <div className={style.productWrapper}>
        <div className={style.title}>Airdopes 141</div>
        <div className={style.imageWrapper}>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/grey_600x.png?v=1668599490"
            alt="Product-Image"
          />
        </div>
        <button
          className={style.addToCart}
          onClick={() => {
            props.addtoCartHandler({ name: "Airdopes 141", price: 1000 });
          }}
        >
          Add to Cart
        </button>
      </div>
      <div>
        <h4>Cart Details</h4>
        <table>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
          </tr>
          {
            props.cartData.map((item,key)=>{
              return(
                <tr key={key}>
                 <th>{item.cartData.name}</th>
                  <th>{item.cartData.price}</th>
                </tr>
              )
            })
          }
        </table>
      </div>
    </>
  );
};

export default Home;
