import Home from "../components/Home";
import { connect } from "react-redux";
import { addToCart } from "../Services/actions/action";

const mapStateToProps = (state) => ({
 cartData:state.cartItem
});
const mapDispatchToProps = (dispatch) => ({
  addtoCartHandler: (data) => dispatch(addToCart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
