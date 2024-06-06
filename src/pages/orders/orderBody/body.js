import Button from "./button";
import OrderDetails from "./orderDetails";
import styles from "./../../../styles/orders.module.css";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchOrder, setFilter } from "../../../store/orderAction";

const Body = () => {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.order);

  // const selectedFilter = useSelector((store) => store.selectedFilter);
  const selectedFilter = useSelector((store) => store.order.selectedFilter);

  function clicked(value) {
    dispatch(setFilter(value));
    dispatch(fetchOrder());
  }

  const SelectedFilter = selectedFilter;

  // console.log(SelectedFilter);

  // console.log(extractedString); // Output: "In Progress"

  const filteredOrders = orders.order.filter((order) => {
    if (SelectedFilter === "New Orders") {
      return order.state === 0;
    }
    if (SelectedFilter === "In Progress") {
      return order.state === 1;
    }
    if (SelectedFilter === "Order Ready") {
      return order.state === 2;
    }
    if (SelectedFilter === "In Delivery") {
      return order.state === 3;
    }
  });

  useEffect(() => {
    const APIcall = async () => {
      dispatch(fetchOrder());
    };
    APIcall();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.ordersButtons}>
          <Button name="New Orders" clicked={clicked} />
          <Button name="In Progress" clicked={clicked} />
          <Button name="Order Ready" clicked={clicked} />
          <Button name="In Delivery" clicked={clicked} />
        </div>
        {filteredOrders.length > 0 ? (
          filteredOrders.map((o) => (
            <OrderDetails
              key={o._id}
              id={o._id}
              items={o.orderitems}
              time={o.updatedAt}
            />
          ))
        ) : (
          <p>No orders to display.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
