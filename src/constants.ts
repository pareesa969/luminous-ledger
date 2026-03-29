import { Scenario } from "./types";

export const SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: "First Paycheck",
    description: "You've received your first major paycheck of $5,000. How do you want to allocate it?",
    icon: "Wallet",
    options: [
      {
        label: "Save & Invest",
        description: "Put $4,000 into savings and $1,000 into a tech index fund.",
        behavior: 'saver',
        impact: { savings: 4000, investments: 1000, score: 50 },
        recommended: true
      },
      {
        label: "Lifestyle Upgrade",
        description: "Spend $3,000 on a new setup and save the remaining $2,000.",
        behavior: 'spender',
        impact: { savings: 2000, score: -10 }
      }
    ]
  },
  {
    id: 2,
    title: "Market Dip",
    description: "The tech sector just dropped by 15%. It's a volatile moment for your portfolio.",
    icon: "TrendingDown",
    options: [
      {
        label: "Buy the Dip",
        description: "Invest $2,000 more from your savings into the market.",
        behavior: 'investor',
        impact: { savings: -2000, investments: 2500, score: 30 },
        recommended: true
      },
      {
        label: "Hold Position",
        description: "Keep your cash liquid and wait for stability.",
        behavior: 'saver',
        impact: { score: 10 }
      }
    ]
  },
  {
    id: 3,
    title: "Car Breakdown",
    description: "Your vehicle has experienced a critical engine failure. An unexpected repair cost of $1,200 is required.",
    icon: "Car",
    options: [
      {
        label: "Pay Cash",
        description: "Draw directly from your liquid emergency fund.",
        behavior: 'saver',
        impact: { savings: -1200, score: 20 },
        recommended: true
      },
      {
        label: "Use Credit Card",
        description: "Finance the repair at 18.5% APR.",
        behavior: 'spender',
        impact: { debt: 1200, score: -30 }
      }
    ]
  },
  {
    id: 4,
    title: "Side Hustle Boom",
    description: "Your weekend project just landed a major client. You have an extra $3,000.",
    icon: "Rocket",
    options: [
      {
        label: "Reinvest in Business",
        description: "Buy better equipment to scale your earnings.",
        behavior: 'investor',
        impact: { investments: 3000, score: 40 },
        recommended: true
      },
      {
        label: "Pay Down Debt",
        description: "Clear out your existing credit card balance.",
        behavior: 'saver',
        impact: { debt: -1200, savings: 1800, score: 50 }
      }
    ]
  },
  {
    id: 5,
    title: "Student Loan Decision",
    description: "You have $5,000 in student loans at 4% interest. You have $5,000 in cash.",
    icon: "ShieldCheck",
    options: [
      {
        label: "Pay Off Loan",
        description: "Eliminate the debt entirely.",
        behavior: 'saver',
        impact: { savings: -5000, debt: -5000, score: 60 },
        recommended: true
      },
      {
        label: "Invest in Crypto",
        description: "Try to double your money in a high-risk asset.",
        behavior: 'risk-taker',
        impact: { savings: -5000, investments: 10000, score: -100 }
      }
    ]
  },
  {
    id: 6,
    title: "Credit Card Offer",
    description: "You are offered a premium credit card with a $10,000 limit and 2% cashback.",
    icon: "Wallet",
    options: [
      {
        label: "Accept & Use Wisely",
        description: "Use it for daily expenses and pay it off monthly.",
        behavior: 'investor',
        impact: { score: 80 },
        recommended: true
      },
      {
        label: "Decline Offer",
        description: "Avoid the temptation of high-limit credit.",
        behavior: 'saver',
        impact: { score: 20 }
      }
    ]
  },
  {
    id: 7,
    title: "Emergency Fund Dilemma",
    description: "Your emergency fund is full. Should you start investing the surplus?",
    icon: "BarChart3",
    options: [
      {
        label: "Start Index Fund",
        description: "Put $2,000 into a diversified index fund.",
        behavior: 'investor',
        impact: { savings: -2000, investments: 2000, score: 30 },
        recommended: true
      },
      {
        label: "Keep in Savings",
        description: "Safety first, keep it in a high-yield savings account.",
        behavior: 'saver',
        impact: { score: 10 }
      }
    ]
  },
  {
    id: 8,
    title: "Luxury Vacation",
    description: "Friends are going on a $4,000 luxury trip. You have the money, but it's half your savings.",
    icon: "Rocket",
    options: [
      {
        label: "Go on Trip",
        description: "Life is for living! Spend the $4,000.",
        behavior: 'spender',
        impact: { savings: -4000, score: -20 }
      },
      {
        label: "Stay Home",
        description: "Save the money for a future down payment.",
        behavior: 'saver',
        impact: { score: 40 },
        recommended: true
      }
    ]
  },
  {
    id: 9,
    title: "Stock Market Rally",
    description: "The market is up 20% this year. Do you want to take some profits?",
    icon: "TrendingUp",
    options: [
      {
        label: "Sell & Rebalance",
        description: "Lock in $2,000 of gains and move to cash.",
        behavior: 'saver',
        impact: { investments: -2000, savings: 2000, score: 20 },
        recommended: true
      },
      {
        label: "Let it Ride",
        description: "Stay fully invested for more potential gains.",
        behavior: 'risk-taker',
        impact: { investments: 3000, score: -10 }
      }
    ]
  },
  {
    id: 10,
    title: "Medical Bill",
    description: "An unexpected medical bill of $800 arrives.",
    icon: "AlertCircle",
    options: [
      {
        label: "Pay in Full",
        description: "Use your savings to clear the bill.",
        behavior: 'saver',
        impact: { savings: -800, score: 30 },
        recommended: true
      },
      {
        label: "Payment Plan",
        description: "Pay $100/month with 5% interest.",
        behavior: 'spender',
        impact: { debt: 900, score: -10 }
      }
    ]
  },
  {
    id: 11,
    title: "Real Estate Opportunity",
    description: "A small rental property is available. You need a $20,000 down payment.",
    icon: "Target",
    options: [
      {
        label: "Take the Loan",
        description: "Borrow $20,000 to secure the asset.",
        behavior: 'investor',
        impact: { debt: 20000, investments: 25000, score: 50 }
      },
      {
        label: "Pass on Deal",
        description: "Too much debt for your current comfort level.",
        behavior: 'saver',
        impact: { score: 10 },
        recommended: true
      }
    ]
  },
  {
    id: 12,
    title: "Gym Membership",
    description: "A premium gym offers a $1,200 annual membership for $800 upfront.",
    icon: "Zap",
    options: [
      {
        label: "Pay Upfront",
        description: "Save $400 in the long run.",
        behavior: 'saver',
        impact: { savings: -800, score: 20 },
        recommended: true
      },
      {
        label: "Monthly Plan",
        description: "Pay $100/month to keep cash liquid.",
        behavior: 'spender',
        impact: { savings: -100, score: -5 }
      }
    ]
  },
  {
    id: 13,
    title: "Inheritance",
    description: "You inherit $10,000 from a distant relative.",
    icon: "Wallet",
    options: [
      {
        label: "Diversified Portfolio",
        description: "Split between stocks, bonds, and cash.",
        behavior: 'investor',
        impact: { savings: 3000, investments: 7000, score: 60 },
        recommended: true
      },
      {
        label: "New Car Down Payment",
        description: "Use it to get a better vehicle.",
        behavior: 'spender',
        impact: { savings: 2000, debt: 8000, score: -20 }
      }
    ]
  },
  {
    id: 14,
    title: "Crypto Hype",
    description: "A new meme coin is trending. Everyone is talking about it.",
    icon: "Rocket",
    options: [
      {
        label: "Invest $1,000",
        description: "High risk, high reward potential.",
        behavior: 'risk-taker',
        impact: { savings: -1000, investments: 5000, score: -150 }
      },
      {
        label: "Ignore the Hype",
        description: "Stick to your long-term plan.",
        behavior: 'saver',
        impact: { score: 50 },
        recommended: true
      }
    ]
  },
  {
    id: 15,
    title: "Tax Refund",
    description: "You get a $2,500 tax refund.",
    icon: "PieChart",
    options: [
      {
        label: "Max Out IRA",
        description: "Put it all into your retirement account.",
        behavior: 'investor',
        impact: { investments: 2500, score: 70 },
        recommended: true
      },
      {
        label: "Shopping Spree",
        description: "Treat yourself to new clothes and gadgets.",
        behavior: 'spender',
        impact: { savings: 500, score: -30 }
      }
    ]
  }
];
