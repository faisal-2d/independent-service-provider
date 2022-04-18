import React from 'react';

import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
const Products = () => {

    const notify = () => toast("Wow so easy !");
    return (
        <div>
            <h3>This is product page</h3>
            <button onClick={notify}>Notify !</button>
        <ToastContainer />
        </div>
    );
};

export default Products;