
import Link from 'next/link';
import Image from 'next/image';
import Header from "@/components/Header";
import livingImg from "/public/sofa1.jpg";
import diningImg from "/public/chair6.jpg";
import bedroomImg from "/public/table1.jpg";
import kitchenImg from "/public/k1.jpg";
import officeImg from "/public/o7.jpg";
import outdoorImg from "/public/d1.jpg";
import Footer from '@/components/Footer';

const categories = [
  { 
    id: 'sofas', 
    name: 'Sofas', 
    image: livingImg, 
    details: 'Comfortable sofas for your living space. Available in various styles and colors, designed to fit any decor. Whether you prefer a sleek modern look or a cozy traditional feel, our collection has something for everyone.'
  },
  { 
    id: 'chairs', 
    name: 'Chairs', 
    image: diningImg, 
    details: 'Stylish chairs for every room. From dining to office chairs, our collection enhances any setting. Each chair is crafted with precision, providing not just aesthetics but also ergonomic support.' 
  },
  { 
    id: 'tables', 
    name: 'Tables', 
    image: bedroomImg, 
    details: 'Elegant tables for dining and coffee. Crafted with quality materials, perfect for gatherings. Our tables are designed to be functional while adding charm to your space.' 
  },
  { 
    id: 'kitchen', 
    name: 'Kitchen', 
    image: kitchenImg, 
    details: 'Functional kitchen furniture. Designed for maximum utility while adding style to your cooking space. Our kitchen tables and islands offer ample workspace, while our storage solutions keep everything organized.' 
  },
  { 
    id: 'office', 
    name: 'Office', 
    image: officeImg, 
    details: 'Furniture for your productive workspace. Ergonomically designed to keep you comfortable during long hours. Our office chairs and desks are crafted to promote good posture and efficiency.' 
  },
  { 
    id: 'outdoor', 
    name: 'Outdoor', 
    image: outdoorImg, 
    details: 'Durable furniture for outdoor living. Weather-resistant and stylish for all your outdoor needs. From patio sets to loungers, our collection allows you to enjoy the outdoors in comfort and style.' 
  },
];

export default function Categories() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-green-100">
      <Header />
      <div className="container mx-auto p-4 flex-grow">
        <h1 className="text-4xl text-center italic text-teal-900 font-serif font-bold mb-8">Our Furniture Categories</h1>
        
        {categories.map((category) => (
          <div key={category.id} className="mb-8 flex flex-col md:flex-row items-center justify-center mx-4 md:mx-0">
            <div className="flex-1 flex justify-center">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 h-full">
                <Image src={category.image} alt={category.name} width={400} height={300} className=" h-80 object-cover" />
              </div>
            </div>
            <div className="flex-1 flex flex-col text-teal-950 font-serif justify-between md:ml-4  p-4 h-60">
              <h2 className="text-2xl font-bold mb-2 text-center">{category.name}</h2>
              <p className="text-start flex-grow">{category.details}</p>
              <Link href={`/products`} className="mt-4 inline-block text-green-500 hover:underline text-center font-bold">
                See More---
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

