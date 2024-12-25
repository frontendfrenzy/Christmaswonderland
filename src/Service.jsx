import { RiSettings4Fill } from "react-icons/ri";
import { BsBox2Fill } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";

const Service = () => {
  return (
    <main className="mt-56">
      <div>
        <h1 id="head_Ser" className="text-center text-4xl">Ordering Services</h1>

        <div id="service-part" className="flex justify-center items-center gap-20 flex-wrap">
          <div id="Ser_One" className="Service_christmas shadow-2xl">
          <RiSettings4Fill className="mb-5 border-2 border-blue-200 bg-blue-200 text-blue-700  shadow-2xl text-5xl p-2 rounded-md" />
          <h2 id="service_title" className="mb-1 font-bold text-2xl">Fast & Reliable Delivery</h2>
          <p>At Christmas Wonderland, we prioritize your convenience and satisfaction. With our fast and reliable delivery, you can rest assured that your orders will arrive at your doorstep on time, just in time for the festivities.</p>
          </div>

          <div id="Ser_two" className="Service_christmas shadow-2xl">
            <BsBox2Fill className="mb-5 border-2 border-yellow-400 bg-yellow-400 text-amber-700 shadow-2xl text-5xl p-2 rounded-md"/>
            <h2 id="service_title" className="mb-1 font-bold text-2xl">24/7 Customer Support</h2>
            <p>Our 24/7 customer support team is always here to help with any queries or issues. Whether you need assistance with your order or advice on products, were just a message away.</p>
          </div>
 
          <div id="Ser_three" className="Service_christmas shadow-2xl">
            <AiOutlineSafety className="mb-5 border-2 border-green-200 bg-green-200 text-green-400 shadow-2xl text-5xl p-2 rounded-md"/>
            <h2 id="service_title" className="mb-1 font-bold text-2xl">Easy Returns Exchanges</h2>
            <p>We also offer easy returns and exchanges, ensuring a stress-free shopping experience. Shop with confidence, knowing that we’re committed to making your holidays joyful and hassle-free!</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Service