import { FaDollarSign } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

const Credit = () => {
  return (
    <main>
      <div className="Credit_Content">
        <div className="Credit_One shadow-2xl">
          <h2 className="text-3xl mb-6">Weekly Pass</h2>
          <p className="mb-4">All the basic feature to boost your <br />Shopping</p>

          <div className="flex mb-8">
          <FaDollarSign/>
          <h1 className="text-6xl">6</h1>
          <p className="translate-y-8 ml-1">/Week</p>
          </div>

          <div>
            <div className="flex mb-5">
              <GoArrowUpRight className="text-green-500"/>
              <p className="ml-1">Exclusive Holiday Deals</p>
            </div>
            <div className="flex mb-5">
              <GoArrowUpRight className="text-green-500"/>
              <p className="ml-1">Limited-Edition Products</p>
            </div>
            <div className="flex mb-5">
              <GoArrowUpRight className="text-green-500"/>
              <p className="ml-1">Priority Shipping</p>
            </div>
          </div>
          <button id="OneBtn">Start 7 days free trail</button>
        </div>

        <div className="Credit_Two shadow-2xl">
          <h2 className="text-3xl mb-6">Monthly Pass</h2>
          <p className="mb-4">All the basic feature to boost your <br />Shopping</p>

          <div className="flex mb-8">
          <FaDollarSign/>
          <h1 className="text-6xl">14</h1>
          <p className="translate-y-8 ml-1">/Month</p>
          </div>

          <div>
            <div className="flex mb-5">
              <GoArrowUpRight className="text-green-500"/>
              <p className="ml-1">Gift Wrapping Services</p>
            </div>
            <div className="flex mb-5">
              <GoArrowUpRight className="text-green-500"/>
              <p className="ml-1">Personalized Recommendations</p>
            </div>
            <div className="flex mb-5">
              <GoArrowUpRight className="text-green-500"/>
              <p className="ml-1">Premium Customer Support</p>
            </div>
          </div>
          <button id="TwoBtn">Start 30 days free trail</button>
        </div>

        <div className="Credit_Three shadow-2xl">
          <h2 className="text-3xl mb-6">Yearly Pass</h2>
          <p className="mb-4">All the basic feature to boost your <br />Shopping</p>
          
          <div className="flex mb-8">
          <FaDollarSign/>
          <h1 className="text-6xl">40</h1>
          <p className="translate-y-8 ml-1">/Year</p>
          </div>

          <div>
            <div className="flex mb-5">
              <GoArrowUpRight className="text-green-500"/>
              <p className="ml-1">Festive Membership Plans</p>
            </div>
            <div className="flex mb-5">
              <GoArrowUpRight className="text-green-500"/>
              <p className="ml-1">Customized Product Bundles</p>
            </div>
            <div className="flex mb-5">
              <GoArrowUpRight className="text-green-500"/>
              <p className="ml-1">Loyalty Rewards Program</p>
            </div>
          </div>
          <button id="ThreeBtn">Start 365 days free trail</button>
        </div>

      </div>
    </main>
  )
}

export default Credit