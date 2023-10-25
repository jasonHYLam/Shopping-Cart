import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./ShopPage";
import HomePage from "./HomePage";
import ItemPage from "./ItemPage";
import CheckoutPage from "./CheckoutPage";
import Layout from "./Layout";

const Router = () => {

  function populateIdArray() {
    const array = [];
    const listLength = 20

    for (let i = 1; i <= listLength; i++ ) {
      array.push(i)
    }
    return array;
  }

  const [idArray, setIdArray] = useState(populateIdArray())
  const [addedItems, setAddedItems] = useState([])


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout shopListLength={addedItems.length}/>,
      children: [

        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/shop",
            element: <ShopPage idArray={idArray}/>
        },
        {
            path: "/shop/:id",
            element: <ItemPage addedItems={addedItems} setAddedItems={setAddedItems}/>
        },
        {
            path: "/checkout",
            element: <CheckoutPage addedItems={addedItems}/>
        },

      ]
    }

  ]);

  return <RouterProvider router={router} />
}

export default Router;