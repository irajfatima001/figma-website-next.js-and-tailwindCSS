import Facebook from "/public/fb.png";
import Instagram from "/public/insta.png";
import Linkedin from "/public/linkedin.png";
import Twitter from "/public/twitter.png";
import Image from "next/image";
import Logo from "/public/Logo.png"

const Footer = () => {
    return (
        <footer className="bg-slate-200 text-emerald-900 py-8">
            <div className="container mx-auto px-4">
                
                <div className="flex flex-col md:flex-row justify-between items-start"> {/* Change items-center to items-start */}

                    
                    <div className="flex flex-col text-sm items-center md:items-start mb-4 md:mb-0 pr-10 pl-7">
                        <Image src={Logo} alt="Company Logo"  className="mb-4 mt-2 h-5" /> 
                        <div className="flex space-x-4 mb-2">
                            <Image src={Facebook} alt="Facebook" className="h-4 w-4" />
                            <Image src={Instagram} alt="Instagram" className="h-4 w-4" />
                            <Image src={Linkedin} alt="LinkedIn" className="h-4 w-4" />
                            <Image src={Twitter} alt="Twitter" className="h-4 w-4" />
                        </div>
                        <p className="text-center md:text-left">Address:<br/>  
                            877 The Bronx, NY <br/> 
                            14568, USA
                        </p>
                        <div className="text-center mb-4 md:mb-0 pt-10">
                            <p className="text-sm">© {new Date().getFullYear()} INWOOD. All rights reserved.</p>
                        </div>
                    </div>

                    {/* Columns Section */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 flex-grow text-sm p-0">
                        <div className="mb-2 md:mb-0"> {/* Adjusted margin */}
                            <h5 className="font-bold mb-2">My Account</h5>
                            <ul>
                                <li>Sign in</li>
                                <li>Order</li>
                                <li>Status</li>
                            </ul>
                        </div>
                        <div className="mb-2 md:mb-0"> {/* Adjusted margin */}
                            <h5 className="font-bold mb-2">Help</h5>
                            <ul>
                                <li>Shipping</li>
                                <li>Return</li>
                                <li>Sizing</li>
                            </ul>
                        </div>
                        <div className="mb-2 md:mb-0"> {/* Adjusted margin */}
                            <h5 className="font-bold mb-2">Shop</h5>
                            <ul>
                                <li>All Products</li>
                                <li>Bedroom</li>
                                <li>Dinning Room</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold mb-2">Legal</h5>
                            <ul>
                                <li>Shipping & Delivery</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy & Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
