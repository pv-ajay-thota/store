import { useEffect, useState } from "react";
import Header from "./Header";
import Photos from "./data";
import ReactPaginate from "react-paginate";

const Products = ({ itemsPerPage }) => {
  const [products, SetProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // const url = "https://jsonplaceholder.typicode.com/photos";
  const getProducts = async () => {
    setLoading(true);
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // SetProducts(parsedData);
    SetProducts(Photos);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  if (loading) {
    return (
      <>
        <div>loading please wait ...</div>
      </>
    );
  }

  return (
    <>
      <div>
        <div className="container w-full mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2">
          {currentItems.map((item) => {
            return (
              <div key={item.id} className="col-md-4">
                <Product {...item} />
              </div>
            );
          })}
        </div>
        <div className="my-10 mr-10">
          <ReactPaginate
            className="flex justify-end "
            // previousLinkClassName="py-3 px-6 ml-0 leading-tight text-blue-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            // pageLinkClassName="py-3 px-6 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            // nextLinkClassName="py-3 px-6 leading-tight text-blue-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"

            previousLinkClassName="py-3 px-5 ml-0 leading-tight text-blue-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            pageLinkClassName="py-3 px-5 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            nextLinkClassName="py-3 px-5 leading-tight text-blue-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            breakLinkClassName="py-3 px-8 leading-tight text-blue-500 bg-white"
            activeLinkClassName="py-3 px-5 leading-tight text-blue-500 bg-white border border-gray-300"
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  );
};

const Product = (props) => {
  const [itemCount, setItemCount] = useState(1);
  // let { description, imageUrl, newsUrl, author, date, source } = props;
  let { id, title, thumbnailUrl, url, source } = props;

  const cardStyle = 3;

  const addToCart = () => {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push({
      id: id,
      productName: title,
      productBrand: title,
      quantity: itemCount,
      price: 150,
    });
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  // if (cardStyle === 1) {
  //   return (
  //     <>
  //       <div key={id} className="hover:cursor-pointer hover:scale-150">
  //         <div className="card m-4 p-4 bg-white shadow-md hover:bg-blue-100 rounded-lg">
  //           <div
  //             style={{
  //               display: "flex",
  //               justifyContent: "flex-end",
  //               position: "absolute",
  //               right: "0",
  //             }}
  //           >
  //             <span className="badge rounded-pill bg-danger"> {source} </span>
  //           </div>
  //           <img
  //             src={
  //               !thumbnailUrl
  //                 ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
  //                 : thumbnailUrl
  //             }
  //             className="mx-auto object-fill"
  //             alt="..."
  //           />
  //           <div className="card-body">
  //             <h5 className="card-title ">{title} </h5>
  //             {/* <p className="card-text">{description}</p> */}
  //             {/* <p className="card-text">
  //               <small className="text-muted">
  //                 By {!author ? "Unknown" : author} on
  //                 {new Date(date).toGMTString()}
  //               </small>
  //             </p>
  //             <a
  //               rel="noreferrer"
  //               href={newsUrl}
  //               target="_blank"
  //               className="btn btn-sm btn-dark"
  //             >
  //               Read More
  //             </a> */}
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  // if (cardStyle === 2) {
  //   return (
  //     <>
  //       <div className="flex justify-center m-4 p-2 hover:cursor-pointer hover:scale-110">
  //         <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
  //           <img
  //             className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
  //             src={thumbnailUrl}
  //             alt=""
  //           />
  //           <div className="relative p-6 flex flex-col justify-start">
  //             <h5 className="text-gray-900 text-xl font-medium mb-2">
  //               Card title
  //             </h5>
  //             <p className="text-gray-700 text-base mb-4">
  //               This is a wider card with supporting text below as a natural
  //               lead-in to additional content. This content is a little bit
  //               longer.
  //             </p>
  //             {/* <p className="text-gray-600 text-xs">Last updated 3 mins ago</p> */}
  //             <button className="flex absolute right-0 bottom-0 m-1 w-fit px-2 py-1 border-2 rounded-md text-white bg-blue-500 hover:text-white hover:bg-blue-700">
  //               Add to cart
  //               <svg
  //                 className="fill-white"
  //                 version="1.1"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 // viewBox="0 0 24 24"
  //                 // xmlns:xlink="http://www.w3.org/1999/xlink"
  //                 // enable-background="new 0 0 24 24"
  //               >
  //                 <g>
  //                   <g>
  //                     <path d="m464.5,301.1l36.5-178h-359.7l-12.5-59.2-108.4-52.9-9.4,18.7 99,47.8 50,238.8h289c0,0 28.5,17.9 17.5,40.5-4.9,7-12.5,15.6-26.1,15.6h-287.6v20.6h287.7c19.8,0 36.5-10.4 45.9-27 18.4-34.4-21.9-64.9-21.9-64.9zm-286.7-5.7l-32.3-151.6h330.5l-31.3,151.6h-266.9z" />
  //                     <path d="m212.2,422.1c-21.9,0-39.6,17.6-39.6,39.4s17.7,39.4 39.6,39.4 39.6-17.6 39.6-39.4-17.7-39.4-39.6-39.4zm0,58.1c-10.4,0-18.8-8.3-18.8-18.7s8.3-18.7 18.8-18.7 18.8,8.3 18.8,18.7-8.4,18.7-18.8,18.7z" />
  //                     <path d="m424.9,422.1c-21.9,0-39.6,17.6-39.6,39.4s17.7,39.5 39.6,39.5 40.7-17.6 39.6-39.4c0-21.8-17.7-39.5-39.6-39.5zm18.8,39.5c0,10.4-8.3,18.7-18.8,18.7s-18.8-8.3-18.8-18.7 8.3-18.7 18.8-18.7 19.8,8.3 18.8,18.7z" />
  //                   </g>
  //                 </g>
  //               </svg>
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  if (cardStyle === 3) {
    return (
      <>
        <div className="w-80 m-4 p-4 bg-white shadow-lg rounded hover:cursor-pointer hover:scale-110">
          <div
            className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
            style={{
              backgroundImage: `url('${url}')`,
            }}
            //   "background-image: url('https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
          >
            {/* <div className="flex justify-between">
              <input type="checkbox" />
              <button className="text-white hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div> */}
            {/* <div>
              <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                available
              </span>
            </div> */}
          </div>
          <div className="p-4 flex flex-col items-center">
            <p className="text-gray-400 font-light text-xs text-center">
              Hammond robotics
            </p>
            <h1 className="text-gray-800 text-center mt-1">Item name</h1>
            <p className="text-center text-gray-800 mt-1">$1299</p>
            <div className="inline-flex items-center mt-2">
              <button
                onClick={() => {
                  if (itemCount > 1) {
                    setItemCount(itemCount - 1);
                  }
                }}
                className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  />
                </svg>
              </button>
              <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                {itemCount}
              </div>
              <button
                onClick={() => setItemCount(itemCount + 1)}
                className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
            <button
              onClick={addToCart}
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
            >
              Add to cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </>
    );
  }
};

const LandingPage = () => {
  return (
    <>
      <div className="h-screen w-screen flex flex-col">
        <div className="flex-none">
          <Header />
        </div>
        <div className="flex-1 overflow-y-auto bg-gray-100">
          <Products itemsPerPage={6} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
