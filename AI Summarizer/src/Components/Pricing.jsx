import React from 'react'
import Card from './Card';
import './Pricing.css';
import Footer from './Footer';

const Pricing = () => {

    const plans = [
        {
          title: "Free",
          price: "0",
          use: "Trial",
          features: ["5 URL summaries", "5 Text Summaries", "Unlimited Translations", "Unlimited Downloads"],
        },
        {
          title: "Standard",
          price: "60.00",
          use: "Personal or Freelance",
          features: ["Free inc.","60 URL Summaries", "60 Text Summaries"],
        },
        {
          title: "Premium",
          price: "100.00",
          use: "Business or Enterprise",
          features: [
            "Standard inc.",
            "100 URL Summaries",
            "100 Text Summaries",
            "Customer support",
          ],
        },
      ];

  return (
    <>
        <div className='PriceSection'>
            <h1 className='headingSection'>Monthly Subscription</h1>
            <p className='paraStyle'>Choose your plan below based on your monthly/annual summarization or paraphrasing needs.</p>

            <div className='price'>
                {plans.map((plan, index) => (
                    <Card
                    key={index}
                    title={plan.title}
                    price={plan.price}
                    features={plan.features}
                    use={plan.use}
                    />
                ))}
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Pricing;
