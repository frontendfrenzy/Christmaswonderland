import { FaShoppingCart } from "react-icons/fa";

const Cart = ({ handlefindCardId }) => {
  return (
    <main>
      <div>
       <ul>
       {
           handlefindCardId && (
            <div className="Including_Wholecontent">
              <div>
                <div className="Including_Productimgs">
                  <img className="shadow-2xl mb-4" src={handlefindCardId.image} alt="" />
                </div>
              </div>

              <div>
               <div className="Including_Productpara">
                  <h2 className="text-5xl mb-3">{handlefindCardId.title}</h2>
                  <p className="mb-14">{handlefindCardId.description}</p>
               </div>

               <div className="includig_btncontdnt">
                <div className="Including_Btn">
                  <button className="border-2 border-red-600 rounded-md bg-red-600 text-white mr-10">Buy Now</button>
                  <button className="border-2 border-red-600 rounded-md bg-white text-red-600">Add Cart</button>
                </div>

                <div className="flex flex-row translate-x-48 ml-1">
                  <FaShoppingCart className="translate-y-6"/>
                  <p className="translate-y-5 ml-1">{handlefindCardId.Prize}</p>
                </div>
               </div>
              </div>

            </div>
           )
        }
       </ul>

       {/*
        CartChristmasItem && FilterChristmasProducts.map((ChristmasProduct) => (
              <li key={ChristmasProduct.id}>
                <div>
                  <div>
                    <img src={ChristmasProduct.image} alt="" />
                  </div>

                  <div>
                    <div>
                    <h2>{ChristmasProduct.title}</h2>
                    <p>{ChristmasProduct.description}</p>
                    </div>

                    <div>
                      <button>Buy Now</button>
                      <button>Add Cart</button>
                    </div>
                  </div>
                </div>
              </li>
            ))
        */}
      </div>
    </main>
  )
}

export default Cart