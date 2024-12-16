import React from 'react';
import image1 from '@/assets/images/svg/i1.png';
import image2 from '@/assets/images/svg/i2.png';
import image3 from '@/assets/images/svg/i3.png';
import image4 from '@/assets/images/svg/i4.png';

const data = [
  {
    id: 1,
    img: image1,
    title: 'Free shipping',
    text: 'Orders above $200',
  },
  {
    id: 2,
    img: image2,
    title: 'Money-back',
    text: '30-day return guarantee',
  },
  {
    id: 3,
    img: image3,
    title: 'Secure payments',
    text: 'Secured by Stripe',
  },
  {
    id: 4,
    img: image4,
    title: '24/7 - Support',
    text: 'Phone and Email Support',
  },
];

function FreeShipping() {
  return (
    <div className="container flex h-[252px] items-center justify-center">
      <div className="flex justify-around w-full mr-3 ml-3 items-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-2 "
          >
            <img
              className="h-[48px] w-[48px] object-contain"
              src={item.img}
              alt={item.title}
            />
            <h3 className="font-medium text-lg">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FreeShipping;
