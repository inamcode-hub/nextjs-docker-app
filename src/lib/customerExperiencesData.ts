import { Users, Wheat, TrendingUp, Award } from 'lucide-react';

export interface CustomerTestimonial {
  id: number;
  name: string;
  location: string;
  since: string;
  volume: string;
  crops: string;
  equipment: string;
  quote: string;
  image: string;
  installationImages?: string[];
  dryer?: string;
  dryerModel?: string;
  calibrationFrequency?: string;
  usesMobile?: boolean;
  detailedQA?: {
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  yearsPecialist?: number;
  trainingTime?: string;
  keyBenefit?: string;
  surprise?: string;
  slug: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: any;
}

export const customerTestimonials: CustomerTestimonial[] = [
  {
    id: 1,
    name: "Greg",
    location: "Ontario, Canada",
    since: "1993",
    volume: "1.4 million bushels",
    crops: "Corn & Soybeans",
    equipment: "2 Zimmerman Dryers (VT2541, Farm Fans CMS-1000H)",
    quote: "TechSupp was excellent at preparing us for the switch over. The system has been reliable for over 30 years.",
    image: "/customer-experiences/greg-ontario.jpg",
    installationImages: [
      "/customer-experiences/greg-ontario-dryer-1.jpg",
      "/customer-experiences/greg-ontario-installation.jpg"
    ],
    dryer: "Zimmerman",
    dryerModel: "VT2541, Farm Fans CMS-1000H",
    calibrationFrequency: "Twice daily",
    usesMobile: false,
    yearsPecialist: 30,
    trainingTime: "4-6 hours initially",
    keyBenefit: "Reliable automation for over 30 years",
    slug: "greg-ontario",
    detailedQA: {
      questions: [
        {
          question: "How long have you been using Dryer Master?",
          answer: "I've been using Dryer Master since 1993, so that's over 30 years now. Started with the older systems and upgraded to the DM510."
        },
        {
          question: "How much training was required to operate the Dryer Master?",
          answer: "4-6 hours initially, then some followup when we upgraded models."
        },
        {
          question: "How often do you calibrate your sensors?",
          answer: "Twice daily, unless there is a wide variation in wet test weight, then we check more often."
        },
        {
          question: "Have you contacted the Dryer Master Support Centre? What was your experience?",
          answer: "Yes, we upgraded one unit and replaced another. TechSupp was excellent at preparing us for the switch over and correcting the minor problems that cropped up."
        },
        {
          question: "Is there anything you would like to see improved in the Dryer Master?",
          answer: "There are read outs for inlet grain temp, outlet grain temp, and plenum temp, but not for grain temp (in the column). We have to go outside to the dryer panel to view this. DM Comment: This could be an option in the future. For now we have tried to keep the operation and installation as simple as possible and only gather information that will be used in the control calculations."
        }
      ]
    }
  },
  {
    id: 2,
    name: "Lowell",
    location: "Minnesota",
    since: "2015",
    volume: "1 million bushels",
    crops: "Corn",
    equipment: "DM510 on Grain Handler 4024",
    quote: "I can go do other work and not worry about the dryer adjustments. The automation is incredible.",
    image: "/customer-experiences/lowell-minnesota.jpg",
    installationImages: [
      "/customer-experiences/lowell-minnesota-dryer-1.jpg",
      "/customer-experiences/lowell-minnesota-installation.jpg"
    ],
    dryer: "Grain Handler",
    dryerModel: "4024",
    calibrationFrequency: "Daily",
    usesMobile: true,
    trainingTime: "A couple hours",
    keyBenefit: "Remote monitoring and automation",
    surprise: "The simplicity",
    slug: "lowell-minnesota",
    detailedQA: {
      questions: [
        {
          question: "How much training was required to operate the Dryer Master?",
          answer: "A couple hours."
        },
        {
          question: "Did anything surprise you about the Dryer Master?",
          answer: "The simplicity."
        },
        {
          question: "How does the Dryer Master change the way you dry?",
          answer: "I can go do other work and not worry about the dryer adjustments."
        },
        {
          question: "Do you use DM Mobile? If so, when/how do you use it?",
          answer: "Yes we love to be able to see the dryer info remotely. We do make some adjustments from the mobile device."
        },
        {
          question: "Have you contacted the Dryer Master Support Centre? What was your experience?",
          answer: "Great service."
        }
      ]
    }
  },
  {
    id: 3,
    name: "Mike",
    location: "Michigan",
    since: "2003",
    volume: "600,000 bushels",
    crops: "Corn",
    equipment: "2 DM510s on FFI Dryers",
    quote: "Real time samples are helpful to our operation... to know moisture even when we're not there. Game changer for our operation.",
    image: "/customer-experiences/mike-michigan.jpg",
    installationImages: [
      "/customer-experiences/mike-michigan-dryer-1.jpg",
      "/customer-experiences/mike-michigan-dryer-2.jpg",
      "/customer-experiences/mike-michigan-installation.jpg"
    ],
    dryer: "FFI",
    calibrationFrequency: "As needed",
    usesMobile: true,
    yearsPecialist: 20,
    keyBenefit: "Real-time moisture monitoring",
    slug: "mike-michigan",
    detailedQA: {
      questions: [
        {
          question: "What convinced you to buy a Dryer Master in the first place?",
          answer: "We were convinced to buy one because our neighbors and the local co-op had one."
        },
        {
          question: "Compared to manual sampling how much difference does having real time moisture information make?",
          answer: "The real time samples are helpful to our operation by having the peace of mind to know the moisture of the corn going into the bin even when were not there."
        },
        {
          question: "How much training was required to operate the Dryer Master?",
          answer: "It is fairly simple to operate. Not much training is required."
        },
        {
          question: "Have you contacted the Dryer Master Support Center? What was your experience?",
          answer: "We have contacted the support center. They have always been very helpful and timely in getting the Dryer Master running again."
        }
      ]
    }
  },
  {
    id: 4,
    name: "Kenton",
    location: "Illinois",
    since: "2014",
    volume: "250,000 bushels",
    crops: "Corn",
    equipment: "DM510 with DM Mobile",
    quote: "DM Mobile gave me confidence to be away from the dryer. I can monitor everything from my phone.",
    image: "/customer-experiences/kenton-illinois.jpg",
    installationImages: [
      "/customer-experiences/kenton-illinois-dryer-1.jpg",
      "/customer-experiences/kenton-illinois-installation.jpg",
      "/customer-experiences/kenton-illinois-mobile-app.jpg"
    ],
    dryer: "Grain Handler",
    calibrationFrequency: "Every 2 hours during harvest",
    usesMobile: true,
    keyBenefit: "Remote monitoring confidence",
    slug: "kenton-illinois",
    detailedQA: {
      questions: [
        {
          question: "What convinced you to buy a Dryer Master in the first place?",
          answer: "What I first liked about the Dryer Master was that it has an input sensor as well as an output sensor so it can anticipate changes."
        },
        {
          question: "How often do you calibrate your sensors?",
          answer: "I calibrate the input sensor twice a year and the output sensor about every 3 hours of drying time or when there is a bigger change of input moisture or a hybrid change."
        },
        {
          question: "Do you use DM Mobile? If so, when/how do you use it?",
          answer: "I used DM Mobile for the first full season this year and it gave me the confidence to be away from the dryer and do other things and still know what is going on."
        },
        {
          question: "Have you contacted the Dryer Master Support Centre? What was your experience?",
          answer: "Everyone at the support center has always been extremely helpful with any situation that I have had come up."
        }
      ]
    }
  },
  {
    id: 5,
    name: "Richard",
    location: "South Dakota",
    since: "2011",
    volume: "800,000 bushels",
    crops: "Corn & Soybeans",
    equipment: "DM510 System",
    quote: "The moisture consistency is outstanding. We've seen significant improvements in grain quality and reduced energy costs.",
    image: "/customer-experiences/richard-southdakota.jpg",
    installationImages: [
      "/customer-experiences/richard-southdakota-dryer-1.jpg",
      "/customer-experiences/richard-southdakota-installation.jpg",
      "/customer-experiences/richard-southdakota-control-system.jpg"
    ],
    dryer: "Diamond",
    calibrationFrequency: "1-3 hours during peak season",
    usesMobile: true,
    keyBenefit: "Consistent moisture control",
    slug: "richard-southdakota",
    detailedQA: {
      questions: [
        {
          question: "What convinced you to buy a Dryer Master in the first place?",
          answer: "We needed better moisture control consistency for our high-volume operation. The ability to maintain precise target moisture levels was critical for our grain quality."
        },
        {
          question: "How does the Dryer Master change the way you dry?",
          answer: "Using the Dryer Master changes the way we harvest, such as which fields we are going to harvest next. We are not as concerned about the moisture content in each field."
        },
        {
          question: "How often do you calibrate the outlet sensor, and what procedure do you use?",
          answer: "We probably calibrate the outlet sensor twice a day. We take 4-5 samples during the calibration time, mix them together, and bench sample them to get an average moisture."
        },
        {
          question: "Do you use DM Mobile?",
          answer: "We started using DM Mobile this year on my cell phone. I watch the outlet moisture from my phone as well as the drying rate and the drying temp. I like being able to change it from Auto to Local or Manual from my combine or my house."
        },
        {
          question: "Have you found a financial difference in your drying performance using Dryer Master?",
          answer: "Absolutely. The consistency in moisture control has reduced our shrink and dock charges significantly. The energy savings from not over-drying are substantial with our volume."
        },
        {
          question: "Have you contacted the Dryer Master Support Centre? What was your experience?",
          answer: "Yes, their technical support has been excellent. They respond quickly during harvest season when we need help the most."
        }
      ]
    }
  },
  {
    id: 6,
    name: "Mark",
    location: "Indiana",
    since: "2015",
    volume: "500,000 bushels",
    crops: "Corn & Wheat",
    equipment: "DM510 Controller",
    quote: "The system pays for itself through energy savings and improved grain quality. Best investment we've made.",
    image: "/customer-experiences/mark-indiana.jpg",
    installationImages: [
      "/customer-experiences/mark-indiana-dryer-1.jpg",
      "/customer-experiences/mark-indiana-installation.jpg"
    ],
    dryer: "Delux",
    calibrationFrequency: "2-4 hours",
    usesMobile: true,
    keyBenefit: "Energy savings and ROI",
    slug: "mark-indiana",
    detailedQA: {
      questions: [
        {
          question: "Why did you buy a Dryer Master in the first place?",
          answer: "It was recommended by my dealer."
        },
        {
          question: "How much training was required to operate the Dryer Master?",
          answer: "The learning curve was very manageable. After a few hours of hands-on training with our dealer, we felt comfortable operating the system."
        },
        {
          question: "How often do you calibrate your sensors?",
          answer: "We calibrate every 2-4 hours during peak season, or whenever we change grain types. The calibration process is straightforward and quick."
        },
        {
          question: "Have you found a financial difference in your drying performance using Dryer Master? In what way?",
          answer: "The Dryer Master is a management tool. It saves money by not over drying or under drying the grain. This saves in minimizing grain shrink and moisture dock and it gives gas savings."
        },
        {
          question: "Do you use DM-Mobile? If so how do you use it?",
          answer: "DM Mobile is my favorite feature. I use it all day while in the combine and it is on when I go to bed, so I can wake during the night and check the dryer in bed. It is great peace of mind!"
        },
        {
          question: "Have you contacted the Dryer Master Support Centre? What was your experience?",
          answer: "Yes, their support team has been fantastic. They're knowledgeable and always available when we need assistance during harvest."
        }
      ]
    }
  },
  {
    id: 7,
    name: "Joe",
    location: "Ohio",
    since: "2019",
    volume: "500,000 bushels",
    crops: "Corn, Wheat & Soybeans",
    equipment: "DM510 with Moisture Sensors",
    quote: "Installation was smooth and the technical support has been exceptional. Highly recommend to other farmers.",
    image: "/customer-experiences/joe-ohio.jpg",
    installationImages: [
      "/customer-experiences/joe-ohio-dryer-1.jpg",
      "/customer-experiences/joe-ohio-installation.jpg",
      "/customer-experiences/joe-ohio-control-system.jpg"
    ],
    dryer: "Zimmerman",
    calibrationFrequency: "1-2 hours",
    usesMobile: false,
    keyBenefit: "Exceptional technical support",
    yearsPecialist: 20,
    slug: "joe-ohio",
    detailedQA: {
      questions: [
        {
          question: "Why did you buy a Dryer Master in the first place?",
          answer: "The Dryer Master allowed us to have an inlet sensor which helps with anticipating the speed of the dryer whether in automatic or manual. Before we were chasing and guessing but after it was installed it allowed us to be a lot more consistent in our drying."
        },
        {
          question: "How much training was required to operate the Dryer Master?",
          answer: "The system is very user-friendly. A few hours of initial training was sufficient to get us comfortable with all the features and operations."
        },
        {
          question: "How often do you typically calibrate your outlet moisture sensor? And what is your calibration procedure?",
          answer: "Depending on time, help and operator we usually calibrate it every hour to once or twice a day. The calibration process is so easy we have incorporated it into our dryer checks."
        },
        {
          question: "How does the Dryer Master change the way you dry?",
          answer: "It gives us much more confidence in our drying operation. We can focus on other harvest tasks knowing the dryer is maintaining consistent moisture levels automatically."
        },
        {
          question: "Have you found a financial difference in your drying performance using Dryer Master?",
          answer: "Definitely. The consistency in moisture control has reduced our shrink losses and eliminated over-drying costs. The fuel savings alone make it worthwhile."
        },
        {
          question: "Any other advice or comments you would like to pass on to someone?",
          answer: "The Dryer Master team does a great job providing service and technical support to their customers. It is reassuring knowing that during the middle of harvest you can call and troubleshoot a problem with a person who knows the product and cares."
        }
      ]
    }
  },
  {
    id: 8,
    name: "Jared",
    location: "Illinois",
    since: "2016",
    volume: "250,000 bushels",
    crops: "Corn",
    equipment: "DM510 Controller",
    quote: "The precision control has improved our grain quality significantly. We're seeing better test weights and less cracked corn.",
    image: "/customer-experiences/jared-illinois.jpg",
    installationImages: [
      "/customer-experiences/jared-illinois-dryer-1.jpg",
      "/customer-experiences/jared-illinois-dryer-2.jpg",
      "/customer-experiences/jared-illinois-installation.jpg"
    ],
    dryer: "Grain Handler",
    calibrationFrequency: "2 hours",
    usesMobile: true,
    keyBenefit: "Improved grain quality",
    slug: "jared-illinois",
    detailedQA: {
      questions: [
        {
          question: "What convinced you to buy a Dryer Master in the first place?",
          answer: "We needed better precision control for our grain quality. The automated adjustments and real-time monitoring capabilities were exactly what our operation required."
        },
        {
          question: "How much training was required to operate the Dryer Master?",
          answer: "The training was minimal thanks to the user-friendly design. Within a few hours, we were comfortable with all the operations and settings."
        },
        {
          question: "How often do you calibrate your sensors?",
          answer: "We calibrate approximately every 2 hours during active drying, or whenever we change grain varieties. The process is quick and straightforward."
        },
        {
          question: "Did anything surprise you about how your Dryer Master worked when you first used it?",
          answer: "I was very pleased with the simplicity and how user friendly the DM510 was to learn and operate."
        },
        {
          question: "Do you use DM-Mobile? If so how do you use it?",
          answer: "Since I'm in the field and not at our dryer, I use DM Mobile all day every day to continually monitor the dryer. I also check DM-Mobile just before I go to bed and get text alerts if something goes wrong."
        },
        {
          question: "Any other advice or comments you would like to pass on to someone?",
          answer: "Don't let the price of the DM 510 scare you away. Its definitely worth the investment because over or under dried grain can be very costly. Also, Dryer Master's customer support has exceeded my expectations!"
        }
      ]
    }
  },
  {
    id: 9,
    name: "Chris",
    location: "Illinois",
    since: "2015",
    volume: "500,000 bushels",
    crops: "White & Yellow Food Grade Corn",
    equipment: "DM510 System",
    quote: "The automated adjustments have eliminated the guesswork. We can focus on other operations while the dryer runs efficiently.",
    image: "/customer-experiences/chris-illinois.jpg",
    installationImages: [
      "/customer-experiences/chris-illinois-dryer-1.jpg",
      "/customer-experiences/chris-illinois-installation.jpg"
    ],
    dryer: "Grain Handler",
    dryerModel: "2416",
    calibrationFrequency: "1-1.5 hours",
    usesMobile: true,
    keyBenefit: "Automated precision",
    slug: "chris-illinois",
    detailedQA: {
      questions: [
        {
          question: "Why did you buy a Dryer Master in the first place?",
          answer: "We bought the DM510 to automate and remotely control our Grain Handler 2416."
        },
        {
          question: "How much training was required to operate the Dryer Master?",
          answer: "The system is very intuitive. After a few hours of initial setup and training with our dealer, we were able to operate it confidently."
        },
        {
          question: "How often do you typically calibrate your outlet moisture sensor? And what is your calibration procedure?",
          answer: "During harvest we sample and calibrate every 1 to 1.5 hours. We press the sample button, run it through our Perten tester three times, average the results, and enter the moisture into the DM510."
        },
        {
          question: "How does the Dryer Master change the way you dry?",
          answer: "The automated adjustments have eliminated the guesswork from our drying operation. We can focus on other harvest activities while maintaining consistent grain quality."
        },
        {
          question: "Do you use DM-Mobile? If so how do you use it?",
          answer: "Yes, I monitor the dryer via an iPad while in the combine during the day and use my iPhone at home after work. It is used all the time the dryer is running."
        },
        {
          question: "Have you contacted the Dryer Master Support Centre? What was your experience?",
          answer: "Their support team has been excellent. They're always available when we need assistance and provide clear, helpful guidance."
        }
      ]
    }
  },
  {
    id: 10,
    name: "Trevor",
    location: "North Dakota",
    since: "2014",
    volume: "250,000 bushels",
    crops: "Corn & Wheat",
    equipment: "DM510 Systems",
    quote: "Scaling up our operation required reliable automation. Dryer Master delivered exactly what we needed.",
    image: "/customer-experiences/trevor-northdakota.jpg",
    installationImages: [
      "/customer-experiences/trevor-northdakota-dryer-1.jpg"
    ],
    dryer: "Grain Handler",
    calibrationFrequency: "1-3 hours",
    usesMobile: true,
    keyBenefit: "Scalable automation",
    slug: "trevor-northdakota",
    detailedQA: {
      questions: [
        {
          question: "What had you heard about Dryer Master before you purchased one?",
          answer: "Advanced Grain Handling suggested a Dryer Master because that is what they had and really liked it. We wanted something that was smart phone capable and we are glad we got the Dryer Master."
        },
        {
          question: "Why did you buy a Dryer Master in the first place?",
          answer: "To be more productive. We couldn't run 24 hours a day before the Dryer Master because we didn't want to under dry or over dry. With the Dryer Master we can run 24 hours a day which is huge to getting our crop off before the weather changes in North Dakota."
        },
        {
          question: "How much training was required to operate the Dryer Master?",
          answer: "The system was very easy to learn. Our dealer provided excellent training, and within a few hours we were comfortable with all the features."
        },
        {
          question: "How often do you calibrate your sensors?",
          answer: "We calibrate every 1-3 hours during peak drying season, or whenever we notice any variations in grain moisture content."
        },
        {
          question: "Do you use DM Mobile? If so, when/how do you use it?",
          answer: "Yes, DM Mobile is essential for our 24-hour operation. We monitor the dryer remotely and can make adjustments from anywhere on the farm."
        },
        {
          question: "Have you found a financial difference in your drying performance using Dryer Master? In what way?",
          answer: "Any kind of product that can give you a return on your investment is crucial in this business. This monitoring system pays for itself yearly in our eyes with the elevators being so aggressive on drying and shrink charges."
        }
      ]
    }
  },
  {
    id: 11,
    name: "Brian",
    location: "Indiana",
    since: "1996",
    volume: "1 million bushels",
    crops: "Non-GMO Waxy Corn",
    equipment: "2 DM510 Controllers",
    quote: "The real-time monitoring has transformed how we operate. We can maintain optimal moisture levels consistently.",
    image: "/customer-experiences/brian-indiana.jpg",
    installationImages: [
      "/customer-experiences/brian-indiana-dryer-1.jpg",
      "/customer-experiences/brian-indiana-installation.jpg",
      "/customer-experiences/brian-indiana-control-panel.jpg"
    ],
    dryer: "Zimmerman",
    dryerModel: "AP4500, VT3026",
    calibrationFrequency: "30-45 minutes",
    usesMobile: true,
    keyBenefit: "Real-time monitoring",
    yearsPecialist: 25,
    slug: "brian-indiana",
    detailedQA: {
      questions: [
        {
          question: "Why did you buy Dryer Masters in the first place?",
          answer: "We were looking for a way to take the guesswork out of drying. Because we are a long term storage facility with minimal outbound blending capabilities, we needed consistent moisture and quality going into storage."
        },
        {
          question: "How much training was required to operate the Dryer Master?",
          answer: "The learning process was smooth. Our team picked it up quickly with proper training from Dryer Master. The key is trusting the system to do its job."
        },
        {
          question: "How often do you calibrate your sensors?",
          answer: "We calibrate every 30-45 minutes during active drying to ensure optimal accuracy, especially with our high-volume operations."
        },
        {
          question: "How does the Dryer Master change the way that you dry?",
          answer: "We had to learn to let the Dryer Master do its job. I tell my operators that every adjustment they make when drying, is probably undermining what the Dryer Master has planned."
        },
        {
          question: "Do you use DM Mobile? If so, when/how do you use it?",
          answer: "Yes, DM Mobile is crucial for monitoring our multiple dryer systems. We can track performance and make adjustments from anywhere on our facility."
        },
        {
          question: "Have you found a financial difference in your drying performance using Dryer Master?",
          answer: "Yes. Anytime we overdry corn or underdry corn and have to recirculate, we are not getting efficient use of our utilities expense or our drying assets. The Dryer Master minimizes those situations."
        }
      ]
    }
  },
  {
    id: 12,
    name: "Aaron",
    location: "Illinois",
    since: "2015",
    volume: "200,000 bushels",
    crops: "Oats & Corn",
    equipment: "DM510 with DM Mobile",
    quote: "Being able to monitor the dryer remotely has given us peace of mind and improved our efficiency significantly.",
    image: "/customer-experiences/aaron-illinois.jpg",
    installationImages: [
      "/customer-experiences/aaron-illinois-dryer-1.jpg",
      "/customer-experiences/aaron-illinois-installation.jpg"
    ],
    dryer: "Grain Handler",
    dryerModel: "1610",
    calibrationFrequency: "1-2 hours",
    usesMobile: true,
    keyBenefit: "Remote peace of mind",
    slug: "aaron-illinois",
    detailedQA: {
      questions: [
        {
          question: "Why did you buy a Dryer Master in the first place?",
          answer: "I had not heard anything about Dryer Master but my bin dealer and the Grain Handler folks recommended it."
        },
        {
          question: "How much training was required to operate the Dryer Master?",
          answer: "The training was very straightforward. The system is designed to be user-friendly, and we were comfortable operating it after just a few hours."
        },
        {
          question: "How often do you calibrate your sensors?",
          answer: "We calibrate every 1-2 hours during harvest season to maintain accuracy. The process is simple and doesn't take much time."
        },
        {
          question: "How does the Dryer Master change the way that you dry?",
          answer: "It allows me to be a little freer to do other tasks."
        },
        {
          question: "How much difference does it make to have real time moisture information versus having to go out and take a sample?",
          answer: "A lot. I'm able to check the moisture of the dryer discharge no matter where I am."
        },
        {
          question: "Do you use DM-Mobile for remote access?",
          answer: "Yes, I use it on my smartphone all the time, day and night."
        }
      ]
    }
  },
  {
    id: 13,
    name: "Brian",
    location: "Pennsylvania",
    since: "2015",
    volume: "250,000 bushels",
    crops: "Corn & Soybeans",
    equipment: "DM510 Controller",
    quote: "The system's reliability during our first full season exceeded our expectations. No downtime during harvest.",
    image: "/customer-experiences/brian-pennsylvania.jpg",
    installationImages: [
      "/customer-experiences/brian-pennsylvania-dryer-1.jpg",
      "/customer-experiences/brian-pennsylvania-installation.jpg"
    ],
    dryer: "Grain Handler",
    dryerModel: "1610",
    calibrationFrequency: "2-3 hours",
    usesMobile: true,
    keyBenefit: "Exceptional reliability",
    slug: "brian-pennsylvania",
    detailedQA: {
      questions: [
        {
          question: "Why did you buy a Dryer Master in the first place?",
          answer: "It was recommended by the Dealer and Rep from Grain Handler."
        },
        {
          question: "How much training was required to operate the Dryer Master?",
          answer: "The training was minimal because the system is so intuitive. Within a few hours, we understood all the key functions and felt confident using it."
        },
        {
          question: "Did anything surprise you about how your Dryer Master worked when you first used it?",
          answer: "I was surprised how it could compensate for different input moisture after it had run long enough to build the data it needed. Compensates better for large input changes than any other controller I have used."
        },
        {
          question: "How often do you typically calibrate your outlet moisture sensor?",
          answer: "Check / Calibrate several times daily especially if we changed varieties of corn. Also check before overnight. I recalibrate if its more than a couple tenths off."
        },
        {
          question: "Do you use DM Mobile? If so, when/how do you use it?",
          answer: "Yes, DM Mobile gives us great peace of mind. We can monitor the dryer performance remotely and make adjustments when needed."
        },
        {
          question: "Have you contacted the Dryer Master Support Centre? What was your experience?",
          answer: "Their support has been excellent. They're responsive and knowledgeable, which is crucial during the busy harvest season."
        }
      ]
    }
  },
  {
    id: 14,
    name: "Ryan",
    location: "Ontario, Canada",
    since: "1999",
    volume: "750,000 bushels",
    crops: "Corn",
    equipment: "2 DM510 Systems",
    quote: "The precision and reliability of the Dryer Master system has helped us improve our grain quality and reduce costs.",
    image: "/customer-experiences/ryan-ontario.jpg",
    installationImages: [
      "/customer-experiences/ryan-ontario-dryer-1.jpg",
      "/customer-experiences/ryan-ontario-installation.jpg",
      "/customer-experiences/ryan-ontario-control-system.jpg"
    ],
    dryer: "Dorssers",
    calibrationFrequency: "1.5-4 hours",
    usesMobile: true,
    keyBenefit: "Quality improvement",
    slug: "ryan-ontario",
    detailedQA: {
      questions: [
        {
          question: "Why did you buy a Dryer Master in the first place?",
          answer: "The ease of controlling the dryer and improving the output consistency for storage. We also liked the idea that you could run it in an automatic mode which allowed us to focus time on other areas of the business during harvest."
        },
        {
          question: "How much training was required to operate the Dryer Master?",
          answer: "The system is well-designed for ease of use. Our team was comfortable with the operations after a few hours of training and hands-on experience."
        },
        {
          question: "How often do you calibrate your sensors?",
          answer: "We calibrate every 1.5-4 hours depending on grain conditions and moisture variations. Consistent calibration is key to maintaining accuracy."
        },
        {
          question: "How does the Dryer Master change the way that you dry?",
          answer: "When operating the Dryer Master, patience is key. You have to have trust in the system to follow the targets that you set out to achieve. It allows you to focus on other areas of operations during the peak time."
        },
        {
          question: "Do you use DM Mobile? If so, when/how do you use it?",
          answer: "Yes, DM Mobile is essential for our operation. We monitor dryer performance remotely and can make adjustments from anywhere on our facility."
        },
        {
          question: "What drying tips would you like to pass on to other dryer owners?",
          answer: "Patience is key, give the DM time to learn the characteristics of the grain and it will meet your requirements. Keep an eye on all the moisture pods for blockage as this can give false readings."
        }
      ]
    }
  },
  {
    id: 15,
    name: "Pete",
    location: "Michigan",
    since: "1996",
    volume: "2 million bushels",
    crops: "Corn, Soybeans & Soft Red Wheat",
    equipment: "2 DM510 Controllers",
    quote: "The system is incredibly user-friendly and the support from Dryer Master has been outstanding from day one.",
    image: "/customer-experiences/pete-michigan.jpg",
    installationImages: [
      "/customer-experiences/pete-michigan-dryer-1.jpg",
      "/customer-experiences/pete-michigan-dryer-2.jpg",
      "/customer-experiences/pete-michigan-installation.jpg"
    ],
    dryer: "Delux & Meyer",
    dryerModel: "DPX16GT, Meyer 2000 bu./hr.",
    calibrationFrequency: "3 hours",
    usesMobile: false,
    keyBenefit: "Outstanding support",
    yearsPecialist: 25,
    slug: "pete-michigan",
    detailedQA: {
      questions: [
        {
          question: "Why did you buy a Dryer Master in the first place?",
          answer: "I was unhappy with our drying results. We would over dry and also under dry. Also we had acquired another location where the drying was even more erratic due to varying corn moistures and an inability to control the dryer."
        },
        {
          question: "How much training was required to operate the Dryer Master?",
          answer: "The training was very manageable. After working with our dealer for a few hours, we felt confident operating both systems at our facilities."
        },
        {
          question: "How often do you calibrate your sensors?",
          answer: "We calibrate approximately every 3 hours during active drying seasons. The calibration process is straightforward and helps maintain consistent accuracy."
        },
        {
          question: "Did anything surprise you about how your Dryer Master worked when you first used it?",
          answer: "Yes it would adjust the speed when we did not think it should but it was correct and the dry corn coming out of the dryer was much more stable."
        },
        {
          question: "How does the Dryer Master change the way you dry?",
          answer: "It's given us much more confidence in our drying operations. We can focus on other harvest activities knowing our grain quality is being maintained consistently."
        },
        {
          question: "Have you found a financial difference in your drying performance using Dryer Master?",
          answer: "Yes we can ship corn right at the target level of moisture that we want to. The over drying of corn costs much more than most people realize. Also we dry wheat to ship to flour mills that have strict moisture requirements."
        }
      ]
    }
  },
  {
    id: 16,
    name: "Kevin",
    location: "Indiana",
    since: "2009",
    volume: "650,000 bushels",
    crops: "Corn & Soybeans",
    equipment: "2 DM510 Systems",
    quote: "The energy savings alone have made this investment worthwhile. Plus the grain quality improvements are significant.",
    image: "/customer-experiences/kevin-indiana.jpg",
    installationImages: [
      "/customer-experiences/kevin-indiana-dryer-1.jpg",
      "/customer-experiences/kevin-indiana-installation.jpg"
    ],
    dryer: "Zimmerman",
    dryerModel: "2,000 bu. & 4,000 bu. towers",
    calibrationFrequency: "1-2 hours",
    usesMobile: true,
    keyBenefit: "Energy savings",
    yearsPecialist: 15,
    slug: "kevin-indiana",
    detailedQA: {
      questions: [
        {
          question: "What had you heard about Dryer Master before you purchased your first system?",
          answer: "I talked to a guy who owned one and he told me that I would not want to dry another bushel without it."
        },
        {
          question: "How much training was required to operate the Dryer Master?",
          answer: "The learning curve was very reasonable. After a few hours of training with our dealer, we were comfortable with all the system features."
        },
        {
          question: "How often do you calibrate your sensors?",
          answer: "We calibrate every 1-2 hours during peak drying. The sensors hold their calibration well, but regular checks ensure optimal performance."
        },
        {
          question: "Did anything surprise you about how your Dryer Master worked when you first used it?",
          answer: "I was surprised with how accurate the sensors are & how well they keep their calibration. The sensors are also very durable, I had one sitting in rotten corn and water all summer and did not know it, cleaned it off and it still worked as it should."
        },
        {
          question: "Have you found a financial difference in your drying performance using Dryer Master?",
          answer: "Absolutely. The energy savings from not over-drying, combined with reduced shrink losses, make the system pay for itself year after year."
        },
        {
          question: "Do you use DM-Mobile? If so how do you use it?",
          answer: "Yes, on an iPhone and on a PC. All the time when it is running, I no longer have to make midnight runs to the dryer to check on it, I can check on it without having to get out of bed."
        }
      ]
    }
  },
  {
    id: 17,
    name: "Larry",
    location: "Ontario, Canada",
    since: "2015",
    volume: "15,000 tons",
    crops: "Corn, Wheat, Soybeans & Canola",
    equipment: "2 DM510 Controllers",
    quote: "The automation has allowed us to run longer hours with confidence. We can dry more grain in less time.",
    image: "/customer-experiences/larry-ontario.jpg",
    installationImages: [
      "/customer-experiences/larry-ontario-dryer-1.jpg"
    ],
    dryer: "Grain Handler",
    dryerModel: "4020 (40 feet long, 20 sections high)",
    calibrationFrequency: "2 hours",
    usesMobile: true,
    keyBenefit: "Extended operating hours",
    slug: "larry-ontario",
    detailedQA: {
      questions: [
        {
          question: "Why did you buy a Dryer Master in the first place?",
          answer: "To get a reliable controller for the dryer."
        },
        {
          question: "How much training was required to operate the Dryer Master?",
          answer: "The training was minimal. The system is intuitive and user-friendly, so we were up and running smoothly after just a few hours."
        },
        {
          question: "How often do you calibrate your sensors?",
          answer: "We calibrate about every 2 hours during active drying. The sensors are very accurate, so we don't need to calibrate as frequently as with other systems."
        },
        {
          question: "How does the Dryer Master change the way that you dry?",
          answer: "Makes life easier not having to keep adjusting the output of the dryer."
        },
        {
          question: "How much difference does it make to have real time moisture information versus having to go out and take a sample?",
          answer: "It's a huge difference because at harvest time it gets busy unloading trucks and grading samples. I used to take moisture samples every hour but now with where the inlet and outlet sensors are, they are really accurate, so now if there is a lull with crop coming in I will take a sample, maybe twice a day."
        },
        {
          question: "Do you use DM Mobile? If so, when/how do you use it?",
          answer: "Yes, DM Mobile is very helpful for monitoring our operations remotely. We can check dryer status and make adjustments from anywhere on the farm."
        }
      ]
    }
  },
  {
    id: 18,
    name: "Anthony",
    location: "Ohio",
    since: "2007",
    volume: "1.5 million bushels",
    crops: "Corn & Soybeans",
    equipment: "2 DM510 Systems",
    quote: "The consistent moisture control has improved our storage quality and reduced shrink. Very impressed with the results.",
    image: "/customer-experiences/anthony-ohio.jpg",
    installationImages: [
      "/customer-experiences/anthony-ohio-dryer-1.jpg",
      "/customer-experiences/anthony-ohio-dryer-2.jpg",
      "/customer-experiences/anthony-ohio-installation.jpg"
    ],
    dryer: "Zimmerman",
    calibrationFrequency: "1-3 hours",
    usesMobile: true,
    keyBenefit: "Reduced shrink",
    slug: "anthony-ohio",
    detailedQA: {
      questions: [
        {
          question: "Why did you buy a Dryer Master in the first place?",
          answer: "We purchased DM because any of the factory controls we had tried just did not work. We spoke to a neighbor that was running a DM at the time and they were completely satisfied."
        },
        {
          question: "How much training was required to operate the Dryer Master?",
          answer: "The training was straightforward. The system is user-friendly, and after working with our dealer for a few hours, we felt confident operating it."
        },
        {
          question: "How often do you calibrate your sensors?",
          answer: "We calibrate every 1-3 hours during peak drying season. The sensors are reliable and hold their calibration well between checks."
        },
        {
          question: "How does the Dryer Master change the way that you dry?",
          answer: "The DM allows me to be more available during harvest season. I do not have to babysit the dryers all day and night I just have much more confidence in the DM sensors and don't feel I have to check constantly."
        },
        {
          question: "Do you use DM Mobile? If so, when/how do you use it?",
          answer: "Yes, DM Mobile has been a game-changer for our operation. We can monitor and adjust our dryers remotely, which is especially valuable during our busy harvest season."
        },
        {
          question: "Have you found a financial difference in your drying performance using Dryer Master?",
          answer: "The DM system has saved us time and money. I have consistent moistures coming out of the bin, we are not over drying like we did with previous controls, and the system is user friendly."
        }
      ]
    }
  }
];

export const stats: StatItem[] = [
  { label: "Years of Experience", value: "40+", icon: Award },
  { label: "Satisfied Customers", value: "500+", icon: Users },
  { label: "Bushels Dried Daily", value: "50M+", icon: Wheat },
  { label: "Average Savings", value: "25%", icon: TrendingUp }
];

export const pageContent = {
  hero: {
    badge: "Customer Success Stories",
    title: "Dryer Master Customer Experiences",
    description: "Discover how farmers across North America are transforming their grain drying operations with Dryer Master technology. Real stories from real customers."
  },
  sections: {
    testimonials: {
      title: "What Our Customers Say",
      subtitle: "From small family farms to large commercial operations, our customers share their experiences with Dryer Master technology."
    },
    cta: {
      title: "Ready to Join Our Satisfied Customers?",
      description: "Experience the same efficiency, reliability, and cost savings that have made our customers successful. Contact us today to learn more.",
      buttons: [
        { text: "Get Started Today", href: "/contact", primary: true },
        { text: "View Products", href: "/products/dm510-controller", primary: false }
      ]
    }
  }
};