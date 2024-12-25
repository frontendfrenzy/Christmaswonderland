import { useRef, useState } from "react"


const Subscription = () => {
  const [Subemail,setSubemail] = useState("");
  const inputReff = useRef();

  const handleSubscription = (event) => {
    if(event){
      alert('Subscription email was succesfully submited!');
    }
  }


  return (
    <main>
      <div className="Subscription_Content mt-40">
       
       <div className="-translate-y-24">
       <h1 className="text-red-600 mb-5 text-4xl -translate-x-16">Christmas Subscription</h1>
       <p className="mb-2">Celebrate the season with our Christmas Subscriptions,<br /> delivering festive surprises like decor, treats, and gifts to <br /> your doorstep. Enjoy exclusive discounts and weekly <br /> or monthly joy-filled packages!</p>
         <form onSubmit={handleSubscription}>
          <input ref={inputReff} className="subscription_email" type="email" onChange={(e) => setSubemail(e.target.value)} value={Subemail} placeholder="Enter a Email Address" required/>
          <button className="subscription_btn p-3 ml-1" type="Submit">Submit</button>
         </form>
         </div>
         <div className="subscription-images">
          <img className="price_img_one shadow-2xl" src="https://i.ibb.co/7pkkdGf/Whats-App-Image-2024-11-03-at-20-55-48-14e2fb8d.jpg" alt="Whats-App-Image-2024-11-03-at-20-55-48-14e2fb8d"/>
          <div className="price_gift">
          <img className="price_img_two shadow-2xl" src="https://i.ibb.co/8BZfCvb/Whats-App-Image-2024-11-03-at-20-55-53-a5c66955.jpg" alt="Whats-App-Image-2024-11-03-at-20-55-53-a5c66955" />
          </div>
         </div>
      </div>
    </main>
  )
}

export default Subscription