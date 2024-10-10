import Head from "next/head";
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import Image from "next/image";
 

export default function About() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder",
      image: "/u5.jpg", 
      description: "John has over 20 years of experience in the furniture industry.",
    },
    {
      name: "Jane Smith",
      role: "Designer",
      image: "/u2.jpg", 
      description: "Jane specializes in modern interior design and loves creating beautiful spaces.",
    },
    {
      name: "Mike Johnson",
      role: "Sales Manager",
      image: "/u3.jpg", 
      description: "Mike is dedicated to helping customers find the perfect furniture for their homes.",
    },
  ];

  return (
    <div className=" bg-gray-400 pt-20 ">
        <Header />
    <div className="min-h-screen flex items-center justify-center mb-4 ">
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our furniture store." />
      </Head>
      <div className="bg-gray-600  p-10 pb-10 rounded-3xl shadow-2xl max-w-4xl w-full">
        
        <h1 className="text-4xl  italic text-center font-bold font-serif mb-6 underline ">About Us</h1>
        
        <p className="text-black mb-4">
          Welcome to our furniture store! We are dedicated to providing high-quality furniture that combines style and comfort. Our mission is to help you create a beautiful and functional living space that reflects your personal style.
        </p>

        <h2 className="text-2xl font-semibold font-serif mt-6 mb-4 text-center italic">Our Mission</h2>
        <p className="text-black mb-4 text-center">
          Our mission is to deliver exceptional furniture that enhances your living spaces and improves your quality of life. We aim to provide stylish, functional, and sustainable solutions for every home.
        </p>
        

        <h2 className="text-2xl font-semibold  font-serif mt-6 mb-4 text-center italic">Our Values</h2>
        <ul className="list-disc list-inside text-black mb-4 ">
          <li>Quality: We believe in offering only the best products.</li>
          <li>Customer Satisfaction: Our customers are our top priority.</li>
          <li>Innovation: We stay ahead of trends to bring you the latest designs.</li>
          <li>Sustainability: We are committed to environmentally friendly practices.</li>
        </ul>
        

        <h2 className="text-2xl font-semibold font-serif mt-6 mb-4 text-center italic">Meet Our Team</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
  {teamMembers.map((member) => (
    <div key={member.name} className="bg-teal-200 p-4 rounded-lg shadow-md">
      <Image
        src={member.image}
        alt={member.name}
        width={100}
        height={68}
        className="w-full h-68 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold font-serif">{member.name}</h3>
      <h4 className="text-gray-900">{member.role}</h4>
      <p className="text-teal-900 mt-2">{member.description}</p>
    </div>
  ))}
</div>

      </div>
    </div>
    <Footer/>
    </div>
  );
}
