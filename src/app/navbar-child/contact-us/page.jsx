 
 "use client";
import {useState} from 'react';
import swal from 'sweetalert2';
import Link from 'next/link';
import Image from 'next/image';
import contact from '/src/images/contact_us.jpg';
import FooterSection from '@/components/FooterSection';
import styles from './contact.module.css';

const Contactpage = () => {

    
    const [Fullname, pickFullname] = useState('');
    const [Number, pickNumber] = useState('');
    const [Email, pickEmail] = useState('');
    const [City, pickCity] = useState('');
    const [Zipcode, pickZipcode] = useState('');
    const [Querry, pickQuerry] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || (process.env.NODE_ENV === 'development' ? 'https://betelkartserverapi.indianpaansamrat.com' : 'https://betelkartserverapi.indianpaansamrat.com');
const orderUrl = process.env.NEXT_PUBLIC_ORDER_URL || (process.env.NODE_ENV === 'development' ? 'http://localhost:1234' : 'http://localhost:1234');

console.log("Environment:", process.env.NODE_ENV);
console.log("API URL:", apiUrl);
console.log("ORDER URL:", orderUrl);



if (process.env.NODE_ENV === 'development'){
    console.log('Development mode')
    console.log("API URL",apiUrl);
    console.log("ORDER URL",orderUrl);
  } else {
    console.log('Production mode');
    console.log('API URL', apiUrl);
    console.log('ORDER URL', orderUrl);
  }

  const formattedMobile = `+91${Number}`;
  const [isLoading, setIsLoading] = useState(false);

  
  const sendOtp = () => {
    if (Number.trim() === "" || Number.length !== 10) {
      swal.fire('Error', 'Please enter a valid 10-digit phone number.', 'error');
      return;
    }
  
    setIsLoading(true);
    const formattedMobile = `+91${Number}`;
    const url = `${apiUrl}/sendOtp`;
    const data = { mobile: formattedMobile };
  
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((serverResponse) => {
        setIsLoading(false);
        if (serverResponse.success) {
          setIsOtpSent(true);
          swal.fire('OTP Sent', 'Please check your mobile for the OTP.', 'success');
        } else {
          swal.fire('Error', 'Failed to send OTP. Please try again.', 'error');
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Error sending OTP:', error);
        swal.fire('Error', 'Failed to send OTP. Please try again.', 'error');
      });
  };
  
  
  const verifyOtp = () => {
    setIsLoading(true);
    const formattedMobile = `+91${Number}`;
    const url = `${apiUrl}/verifyOtp`;
    const data = { mobile: formattedMobile, otp };
  
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((serverResponse) => {
        setIsLoading(false);
        if (serverResponse.success) {
          setIsOtpVerified(true);
          swal.fire('OTP Verified', 'You can now submit the form.', 'success');
        } else {
          swal.fire('Error', 'Invalid OTP. Please try again.', 'error');
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Error verifying OTP:', error);
        swal.fire('Error', 'Failed to verify OTP. Please try again.', 'error');
      });
  };
  
  const details = (event) => {
    event.preventDefault();

    if (!isOtpVerified) {
      swal.fire('Error', 'Please verify your OTP before submitting the form.', 'error');
      return;
    }

    let postDate = new Date().toLocaleString();
    let url = `${orderUrl}/orderEnquiry`;

    const formattedMobileNumber = `+91${Number}`;

    let newForm = {
      name: Fullname,
      mobile: formattedMobileNumber,
      mail: Email,
      place: City,
      zip: Zipcode,
      query: Querry,
      postedOn: postDate
    };

    let postData = {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(newForm)
    };

    fetch(url, postData)
      .then(response => response.json())
      .then(serverResponse => {
        swal.fire({
          title: `${newForm.name} Submitted`,
          text: "Thank you for your interest in our products. We will get back to you soon",
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {

          pickFullname('');
          pickNumber('');
          pickEmail('');
          pickCity('');
          pickZipcode('');
          pickQuerry('');

        });
      });
  }

    return (
        <div className="mt-8 text-center">
            
        

<div className="relative" style={{ height: '500px', overflow: 'hidden' }}>
  <Image
    src={contact}
    layout="fill"
    objectFit="contain"
    alt="Contact Us"
  />
</div>
            
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row'>
                {/* Contact Info */}
                <div className="add_card flex-1 md:w-1/2 px-4 py-5">
                <h2 className="lg:text-6xl md:text-4xl sm:text-4xl text-[#f2c070]">
          Our Promise
        </h2>
                    <p className="font-cursive text-[#791917]">&quot;At IndianPaanSamrat, we promise to deliver the 
                        finest Saada Paan and Meetha Paan, crafted with the highest 
                        quality ingredients and utmost care. Each bite is a journey 
                        through tradition, ensuring an authentic, delightful,
                         and refreshing experience every time. Taste the legacy, 
                         savor the freshness, and celebrate the flavors with us.
                          Our commitment to quality and customer service has earned us
                           thousands of satisfied customers who keep coming back for
                            the delightful flavors and impeccable service.&quot;</p>
                    <div className="mt-6">
                        <p className="mb-3 font-cursive text-[#791917]">connect@indianpaansamrat.com</p>
                        <p className="mb-3 font-cursive text-[#791917]">+91 7090178901</p>
                    </div>
                </div>

                
                <div className="flex-1 lg:w-1/2 px-4 py-5">
                    <div className="shadow-lg bg-[#f3bd66] px-8 py-6 rounded-lg font-cursive">
                        <div className={`${styles.contactheadingStyle} px-6 py-4`}>
                            <h1>Fill In the Form To Explore More</h1>
                        </div>
                        <form className={styles.tpformStyle} id="lead_form" onSubmit={details} method="POST">

{/* Full Name */}
<div className="relative mt-6">
  <input
    type="text"
    id="fname"
    className="block w-full px-4 py-2 text-black bg-white border-2 
    border-gray-200 rounded-md peer focus:outline-none focus:border-black"
    required
    onChange={obj => pickFullname(obj.target.value)}
  />
  <label
    htmlFor="fname"
    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black bg-transparent
   transition-all duration-200 ease-in-out peer-focus:-translate-y-8 peer-focus:scale-75
   peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100
   peer-placeholder-shown:text-base peer-focus:bg-white peer-valid:-translate-y-8 peer-valid:scale-75"
  >
    Full Name
  </label>
</div>

{/* Contact Number */}
<div className="relative mt-6">
  <input
    type="tel"
    id="cnumber"
    className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:outline-none focus:border-black"
    required
    pattern="[0-9]{10}"
    maxLength="10"
    title="Enter a valid phone number"
    onInput={(e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
    }}
    onChange={obj => pickNumber(obj.target.value)}
  />
  <label
    htmlFor="cnumber"
    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black bg-transparent
   transition-all duration-200 ease-in-out peer-focus:-translate-y-8 peer-focus:scale-75
   peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100
   peer-placeholder-shown:text-base peer-focus:bg-white peer-valid:-translate-y-8 peer-valid:scale-75"
  >
    Contact Number
  </label>
</div>

{/* Email */}
<div className="relative mt-6">
  <input
    type="email"
    id="email"
    className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:outline-none focus:border-black"
    required
    onChange={obj => pickEmail(obj.target.value)}
  />
  <label
    htmlFor="email"
    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black bg-transparent
   transition-all duration-200 ease-in-out peer-focus:-translate-y-8 peer-focus:scale-75
   peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100
   peer-placeholder-shown:text-base peer-focus:bg-white peer-valid:-translate-y-8 peer-valid:scale-75"
  >
    Valid Email Id
  </label>
</div>

{/* City */}
<div className="relative mt-6">
  <input
    type="text"
    id="city"
    className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:outline-none focus:border-black"
    required
    onChange={obj => pickCity(obj.target.value)}
  />
  <label
    htmlFor="city"
    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black bg-transparent
   transition-all duration-200 ease-in-out peer-focus:-translate-y-8 peer-focus:scale-75
   peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100
   peer-placeholder-shown:text-base peer-focus:bg-white peer-valid:-translate-y-8 peer-valid:scale-75"
  >
    Your City
  </label>
</div>

{/* Zip Code */}
<div className="relative mt-6">
  <input
    type="number"
    id="zipcode"
    className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:outline-none focus:border-black"
    required
    onChange={obj => pickZipcode(obj.target.value)}
  />
  <label
    htmlFor="zipcode"
    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black bg-transparent
   transition-all duration-200 ease-in-out peer-focus:-translate-y-8 peer-focus:scale-75
   peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100
   peer-placeholder-shown:text-base peer-focus:bg-white peer-valid:-translate-y-8 peer-valid:scale-75"
  >
    Zip Code
  </label>
</div>

{/* Query */}
<div className="relative mt-6">
  <textarea
    id="querry"
    className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:outline-none focus:border-black"
    required
    onChange={obj => pickQuerry(obj.target.value)}
  />
  <label
    htmlFor="querry"
    className="absolute left-4 top-4 transform -translate-y-0 text-black bg-transparent
transition-all duration-200 ease-in-out peer-focus:-translate-y-7 peer-focus:scale-75
peer-placeholder-shown:translate-y-4 peer-placeholder-shown:scale-100
peer-placeholder-shown:text-base peer-focus:bg-white peer-valid:-translate-y-8 peer-valid:scale-75"
  >
    Please type your query
  </label>
</div>

<button
  className="bg-[#0a402b] text-yellow-500 px-4 mt-5 py-2 rounded-lg font-semibold"
  type="button"
  onClick={sendOtp}
>
  Send OTP
</button>

{isOtpSent && !isOtpVerified && (
                    <div className="relative mt-6">
                        <input
                            type="text"
                            id="otp"
                            className="block w-full px-4 py-2 text-black bg-white border-2 border-gray-200 rounded-md peer focus:outline-none focus:border-black"
                            required
                            onChange={(obj) => setOtp(obj.target.value)}
                            placeholder="Enter OTP"
                        />
                        <label
                            htmlFor="otp"
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black bg-transparent
                           transition-all duration-200 ease-in-out peer-focus:-translate-y-8 peer-focus:scale-75
                           peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100
                           peer-placeholder-shown:text-base peer-focus:bg-white peer-valid:-translate-y-8 peer-valid:scale-75"
                        >
                            OTP
                        </label>
                    </div>
                )}

                {/* OTP Verification Button */}
                {isOtpSent && !isOtpVerified && (
                    <button
                        className="bg-[#0a402b] text-yellow-500 px-4 mt-5 py-2 rounded-lg font-semibold"
                        type="button"
                        onClick={verifyOtp}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Verifying...' : 'Verify OTP'}
                    </button>
                )}

                {/* Submit Form Button (only enabled after OTP verification) */}
                {isOtpVerified && (
                    <button
                        className="bg-[#0a402b] text-yellow-500 px-4 mt-5 py-2 rounded-lg font-semibold"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                )}
            </form>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <FooterSection />
        </div>
    );
};

export default Contactpage;
