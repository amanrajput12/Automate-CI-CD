import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./PlanPage.css";
import { createSubscription } from "./api/subscriptionApi";
import { toast } from "react-toastify";


function PlanPage() {
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();

useEffect(()=>{
  const razorpayScript = document.querySelector("#razorpay-script");
 const script = document.createElement("script");

 script.src ="https://checkout.razorpay.com/v1/checkout.js";
 script.async = true;
 script.id = "razorpay-script";
 document.body.appendChild(script);
},[])

const plans = [
  {
    storage: 1,
    monthlyPrice: 29,
    yearlyPrice: 299,
    monthlyPlanId: "plan_SOJLm4E5Shea62",
    yearlyPlanId: "plan_SOJNg8UJYUFjkm",
  },
  {
    storage: 2,
    monthlyPrice: 49,
    yearlyPrice: 499,
    monthlyPlanId: "plan_SOJO9vGmUoMi6w",
    yearlyPlanId: "plan_SOJP7x2KaKj2fx",
  },
  {
    storage: 5,
    monthlyPrice: 89,
    yearlyPrice: 899,
    monthlyPlanId: "plan_SNh9UZUuowdg3s",
    yearlyPlanId: "plan_SOJQ5T3mmtXGNV",
  },
];

  const currentPrice = (plan) => (isYearly ? plan.yearlyPrice : plan.monthlyPrice);

const handleBuyNow = async(plan) => {

  const selectedPlanId = isYearly
    ? plan.yearlyPlanId
    : plan.monthlyPlanId;

  alert(
    `Plan ID: ${selectedPlanId}
Storage: ${plan.storage}GB
Billing: ${isYearly ? "Yearly" : "Monthly"}
Price: ₹${currentPrice(plan)}`
  );
 
  const {subscriptionId} = await createSubscription(selectedPlanId);

  openRazorpayPopup(subscriptionId)

};

  return (
    <div className="plan-page">
      <div className="plan-container">
        <button
          className="back-button"
          onClick={() => navigate("/")}
          title="Go Back"
        >
          <FaArrowLeft /> Back
        </button>

        <div className="plan-header">
          <h1>Storage Plans</h1>
          <p>Choose the perfect plan for your storage needs</p>
        </div>

        <div className="pricing-toggle">
          <button
            className={`toggle-btn ${!isYearly ? "active" : ""}`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button
            className={`toggle-btn ${isYearly ? "active" : ""}`}
            onClick={() => setIsYearly(true)}
          >
            Yearly
            <span className="badge">Save 17%</span>
          </button>
        </div>

        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="plan-card"
            >
              <div className="plan-card-content">
                <h2 className="plan-storage">{plan.storage} GB</h2>
                <div className="plan-price-section">
                  <div className="plan-price">₹{currentPrice(plan)}</div>
                  <div className="plan-billing">
                    /{isYearly ? "year" : "month"}
                  </div>
                </div>

                {isYearly && (
                  <div className="plan-savings">
                    ₹{(plan.yearlyPrice / 12).toFixed(0)}/month when paid yearly
                  </div>
                )}

                <button
                  className="buy-now-btn"
                  onClick={() => handleBuyNow(plan)}
                >
                  Buy Now
                </button>

                <div className="plan-features">
                  <p>✓ {plan.storage} GB cloud storage</p>
                  <p>✓ File sync & sharing</p>
                  <p>✓ Version history</p>
                  <p>✓ Priority support</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="plan-info">
          <h3>Why upgrade?</h3>
          <div className="info-grid">
            <div className="info-item">
              <h4>🔒 Secure Storage</h4>
              <p>Your files are encrypted and securely stored</p>
            </div>
            <div className="info-item">
              <h4>🔄 Sync Everywhere</h4>
              <p>Access your files from any device, anytime</p>
            </div>
            <div className="info-item">
              <h4>👥 Easy Sharing</h4>
              <p>Share files and folders with customizable permissions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



async function openRazorpayPopup(selectedPlanId){




    const options =({
    key:import.meta.env.VITE_RAZORPYA_KEY,
  
    currency:"INR",
   subscription_id:selectedPlanId,
    name:"Storage Cloud",
      redirect: true,
  callback_url: "https://tryonics.shop/",
    theme:{
        color:"#9f8c40b4"
    },
        handler:async function (response) {
        console.log("response from razorpay",response)


         toast.success("Payment Successful 🎉");
        
    }
})

    const rzp = new window.Razorpay(options);

rzp.on("payment.failed",function (respnse){
  console.log(respnse)


    toast.error("Payment Failed ❌ Please try again.");
})
// console.log("rzp are",response)
rzp.open()

}
export default PlanPage;
