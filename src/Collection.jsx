import { useRef, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import Cart from "./Cart";

const Collection = () => {

  const [SearchItem,setSearchItem] = useState("");
  const inputRefff = useRef();

  const ChristmasProducts =[
    { id:1,image:'https://i.ibb.co/Rpc21FF/Whats-App-Image-2024-11-03-at-20-55-52-1c594711.jpg',title:'Black Goun',description:'Get into the holiday sprit with our crazy christmas dress Festive design premium comfort its perfect for your all holiday moments',Prize:'$19'},
    { id:2,image:'https://i.ibb.co/phCQgtd/Whats-App-Image-2024-11-03-at-20-55-53-9d03dba6.jpg',title:'Fantasy Christmas Goun',description:'Get into the holiday sprit with our crazy christmas dress Festive design premium comfort its perfect for your all holiday moments',Prize:'$21'},
    { id:3,image:'https://i.ibb.co/Tqt6R8B/Whats-App-Image-2024-11-03-at-20-55-53-c47d8c01.jpg',title:'Marron Christmas Goun',description:'Get into the holiday sprit with our crazy christmas dress Festive design premium comfort its perfect for your all holiday moments',Prize:'$20'},
    { id:4,image:'https://i.ibb.co/DbtQ2ZY/Whats-App-Image-2024-11-03-at-20-55-51-02c207ae.jpg',title:'Christmas Bakery T-shirt',description:'Get into the holiday sprit with our crazy christmas dress Festive design premium comfort its perfect for your all holiday moments',Prize:'$10'},
    { id:5,image:'https://i.ibb.co/n0Wy7zd/Whats-App-Image-2024-11-03-at-20-55-52-ae144a4d.jpg',title:'Gangster Santa T-shirt',description:'Get into the holiday sprit with our crazy christmas dress Festive design premium comfort its perfect for your all holiday moments',Prize:'$6'},
    { id:6,image:'https://i.ibb.co/bdJcjrp/Whats-App-Image-2024-11-03-at-20-55-52-5dc34099.jpg',title:'Meowy Christmas T-shirt',description:'Get into the holiday sprit with our crazy christmas dress Festive design premium comfort its perfect for your all holiday moments',Prize:'$8'},
    { id:7,image:'https://i.ibb.co/d2yhKvd/Whats-App-Image-2024-11-03-at-20-55-51-62dccf54.jpg',title:'X-mas Tree T-shirt',description:'Get into the holiday sprit with our crazy christmas dress Festive design premium comfort its perfect for your all holiday moments',Prize:'$14'},
    { id:8,image:'https://i.ibb.co/5GSqGSV/Whats-App-Image-2024-11-03-at-20-55-51-f7bfad66.jpg',title:'Merry Christmas T-shirt',description:'Get into the holiday sprit with our crazy christmas dress Festive design premium comfort its perfect for your all holiday moments',Prize:'$15'},
    { id:9,image:'https://i.ibb.co/v3z6Dnk/Whats-App-Image-2024-11-03-at-20-55-55-8e05e0d2.jpg',title:'Deer Headphone',description:'Get into the holiday sprit with our crazy christmas dress Festive design premium comfort its perfect for your all holiday moments',Prize:'$3'},
    { id:10,image:'https://i.ibb.co/8DWqrTJ/Whats-App-Image-2024-11-03-at-20-55-50-346ed570.jpg',title:'Deer Christmas Toy',description:'Get into the holiday sprit with our crazy christmas dress Festive design premium comfort its perfect for your all holiday moments',Prize:'$23'},
    { id:11,image:'https://i.ibb.co/gMkVDXC/Whats-App-Image-2024-11-03-at-20-55-47-c6d6357d.jpg',title:'Deer Nightly Shoes',description:'Get into the holiday sprit with our crazy christmas dress Festive design premium comfort its perfect for your all holiday moments',Prize:'$11'},
    { id:12,image:'https://i.ibb.co/swBZvnP/Whats-App-Image-2024-11-03-at-20-55-48-cb75bde1.jpg',title:'LoveLight Book',description:'Get into the holiday sprit with our crazy christmas dress Festive design premium comfort its perfect for your all holiday moments',Prize:'$9'},
  ];

  const FilterChristmasProducts = ChristmasProducts.filter((ChristmasProduct) => 
    ChristmasProduct.title.toLowerCase().includes(SearchItem.toLowerCase()));

  const [CartItemId,setCartItemId ] = useState(null);

  const handlefindCardId = ChristmasProducts.find((ChristmasProduct) => ChristmasProduct.id === CartItemId);

  const handleProductClick = (id) => {
    setCartItemId(id);
  }

  return (
    <main id="Collection-world-home" className="mt-52 -translate-y-32">
      <div>
        <div className="Search_Background flex justify-center items-center">
        <div className="Search_Product">
          <input ref={inputRefff} type="text" value={SearchItem} onChange={(e) => setSearchItem(e.target.value)} placeholder="Search Products..." />
          <IoSearchSharp  id="search_icon" className="translate-y-1 text-2xl cursor-pointer"/>
        </div>
        </div>

        <div>
          <marquee behavior="8" direction="left">
            <div className="Brand_Logo">
              <img className="shadow-2xl" src="https://i.ibb.co/YcXkRSp/Breezy-Boutique-Logo-Design.jpg" alt="Breezy-Boutique-Logo-Design" />
              <img className="shadow-2xl" src="https://i.ibb.co/nbDxx31/Dress-shop-logo.jpg" alt="Dress-shop-logo" />
              <img className="shadow-2xl" src="https://i.ibb.co/r0yqXXv/Women-S-Clothing-Logo-Design-Template-Download-on-Pngtree-brandingtip.jpg" alt="Women-S-Clothing-Logo-Design-Template-Download-on-Pngtree-brandingtip" />
              <img className="shadow-2xl" src="https://i.ibb.co/YBcY2Rv/Men-S-Clothing-Store-Logo-Template-Stock-Illustration-Illustration-of-graphic-vintage-311259847.jpg" alt="Men-S-Clothing-Store-Logo-Template-Stock-Illustration-Illustration-of-graphic-vintage-311259847" />
              <img className="shadow-2xl" src="https://i.ibb.co/0cc3HKG/tuxedo-logo-vector-illustration-design-for-use-brand-company-icon.jpg" alt="tuxedo-logo-vector-illustration-design-for-use-brand-company-icon" />
              <img className="shadow-2xl" src="https://i.ibb.co/7NSphhG/Premium-Vector-Logo-of-a-fashionable-childrens-clothing-store-kids-fashion-flat.jpg" alt="Premium-Vector-Logo-of-a-fashionable-childrens-clothing-store-kids-fashion-flat" />
              <img className="shadow-2xl" src="https://i.ibb.co/NFLdcGq/Shrtca-I-will-design-kids-child-baby-logo-for-95-on-fiverr-com.jpg" alt="Shrtca-I-will-design-kids-child-baby-logo-for-95-on-fiverr-com" />
            </div>
          </marquee>
        </div>


        <div>
        <ul className="ProductWhole_Content">
          {FilterChristmasProducts.length > 0 ? (
            FilterChristmasProducts.map((ChristmasProduct) => (
              <li className="Product_forChristmas" key={ChristmasProduct.id}>
                <img className="shadow-2xl mb-3" src={ChristmasProduct.image} alt="" />
              <h2 className="mb-6 translate-x-3 text-2xl">{ChristmasProduct.title}</h2>
              <p className="translate-x-3 mb-7">{ChristmasProduct.description}</p>
              <button onClick={() => handleProductClick(ChristmasProduct.id)} className="translate-x-3 mb-3">View Now</button>
            </li>
            ))
          ):(
            <li>Product Not Found!</li>
          )}
          <Cart handlefindCardId={handlefindCardId}  />
        </ul>
      </div>
      </div>
    </main>
  )
}

export default Collection