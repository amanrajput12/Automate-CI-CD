import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./PlanPage.css";

function PlanPage() {
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();

  const plans = [
    {
      storage: 1,
      monthlyPrice: 30,
      yearlyPrice: 300,
    },
    {
      storage: 2,
      monthlyPrice: 50,
      yearlyPrice: 500,
    },
    {
      storage: 5,
      monthlyPrice: 100,
      yearlyPrice: 1000,
    },
  ];

  const currentPrice = (plan) => (isYearly ? plan.yearlyPrice : plan.monthlyPrice);

  const handleBuyNow = (plan) => {
    // You can add payment integration here
    alert(
      `Proceeding to upgrade to ${plan.storage}GB ${isYearly ? "yearly" : "monthly"} plan at ₹${currentPrice(plan)}`
    );
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

export default PlanPage;
