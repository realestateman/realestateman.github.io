function my_onload(){
    var my_text_map = new Map();
    my_text_map.set("title-line-1", "Get a Cash Offer on");
    my_text_map.set("title-line-2", "Your House Today");
    my_text_map.set("phone-button-1", "(xxx) xxx-xxxx");
    my_text_map.set("header-bar-1", "Fill out a form or call now to get a free, no-obligation consulation.");
    my_text_map.set("subtitle-line-1", "Fill out the form below to get a free, no-obligation consultation.");
    my_text_map.set("subtitle-line-2", "WP Walker makes it easy.");
    my_text_map.set("start-now-btn", "START NOW");
    my_text_map.set("paragraph-1", "Discover the true value of your home with our cutting-edge valuation tool, designed to provide home sellers with unparalleled accuracy and market insights. Our proprietary techniques surpass industry leaders by utilizing advanced algorithms and in-depth local market knowledge. This ensures you receive the most precise valuation report to guide your home sale process.");
    my_text_map.set("paragraph-2", "Our valuation tool accounts for a wide range of factors, including property features, local amenities, neighborhood trends, and recent sales data. This comprehensive approach allows us to consistently deliver superior results, providing you with the most up-to-date information for informed decision-making.");
    my_text_map.set("paragraph-3", "In addition to our state-of-the-art technology, our experienced team of real estate professionals offers personalized guidance and support throughout the home selling process. With our unrivaled home valuation tool and dedicated expertise, you can confidently maximize the value of your home and navigate the sale process with ease. Choose our innovative and superior valuation tool and experience the difference for yourself.");
    my_text_map.set("box-title-line-1", "Get a Cash Offer Today");
    my_text_map.set("graybox-1", "Helping house owners get their cash quickly for relocating to a new home or town.");
    my_text_map.set("graybox-2", "Outdated houses that need renovations required in today’s market.");
    my_text_map.set("graybox-3", "Selling a rental property with troublesome tenants, squatters, or even sometimes, family members.");
    my_text_map.set("graybox-4", "Inherited houses that need to sell quickly.");
    my_text_map.set("graybox-5", "Relieving house owners who have fallen behind on mortgage payments or need to downsize.");
    my_text_map.set("aboutus-title-1", "WHO WE ARE");
    my_text_map.set("aboutus-title-2", "WP Walker is an industry-leading home buying company.");
    my_text_map.set("aboutus-1", "We specialize in buying homes, townhouses, condos, apartments, and multi-family units–for cash. With over 15 years in the industry and tens of thousands of properties purchased, we are the trusted experts in real estate transactions. We make your home selling experience fast, easy, and trusted.");
    //my_text_map.set("contactus-1", "Contact Us");
    //my_text_map.set("contactus-2", "Meridian Trust");
    //my_text_map.set("contactus-3", "1234 Main St, City, State 12345");
    my_text_map.set("reviews-1", "Read reviews from satisfied WP Walker customers just like you.");
    my_text_map.set("reviewer-name-1", "Marvin H");
    my_text_map.set("reviewer-text-1", "WP Walker provided me with an exceptional experience when it came to selling my property. They offered me a great price and closed the deal in no time. I had some outstanding medical bills to pay off, and WP Walker really went the extra mile for me. They sent me a contract via email, and I was able to close the sale just 10 days later. The process was straightforward and stress-free, which I truly appreciated. Their Representative, Chris, was extremely helpful in guiding me through every step of the process, and there were no unexpected surprises along the way. I highly recommend WP Walker for anyone looking to sell their property with ease and confidence.");
    my_text_map.set("reviewer-name-2", "Walter & Judy K");
    my_text_map.set("reviewer-text-2", "I was hesitant to sell my property at first, but WP Walker made the process so easy and stress-free. Their team was professional and knowledgeable, and they were able to sell my property for a great price. They kept me informed throughout the entire process and answered any questions I had promptly. I highly recommend WP Walker to anyone looking to sell their property. Their commitment to customer satisfaction is truly impressive.");
    my_text_map.set("reviewer-name-3", "Grace R.");
    my_text_map.set("reviewer-text-3", "WP Walker exceeded my expectations when it came to selling my property. Their team was responsive, professional, and made the process a breeze. They offered me a great price for my property and closed the deal quickly, which was a huge relief. Their Representative, John, was always available to answer my questions and provided me with regular updates throughout the process. I felt completely informed and confident in my decision to sell with WP Walker. I highly recommend them to anyone looking for a stress-free and seamless property selling experience.");
    my_text_map.set("howitworks-1", "How It Works");
    my_text_map.set("howitworks-2", "1. Tell us about your property");
    my_text_map.set("howitworks-3", "2. We’ll review the details");
    my_text_map.set("howitworks-4", "3. We’ll make you an offer");
    my_text_map.set("howitworks-5", "4. You get paid");
    my_text_map.set("cashoffer-btn-text", "GET A CASH OFFER");
    my_text_map.set("callnow-1", "Call Now");
    my_text_map.set("callnow-2", "xxx-xxx-xxxx");
    my_text_map.set("footer-1", "WP Walker");
    my_text_map.set("footer-2", "1234 Main St, City, State 12345");


    for (var key of my_text_map.keys()) {
        var element = document.getElementById(key);
        element.innerHTML = my_text_map.get(key);
    }

    // experimental color rotation on a loop/timer
    // confirms an idea i am going to play with
    //var mytimeoutfunction = function() {
    //    var mybody = document.getElementById("mybody");
    //    mybody.classList.toggle("mybgcolor1");
    //    mybody.classList.toggle("mybgcolor2");
    //};
    //setInterval(mytimeoutfunction, 1000);

}
