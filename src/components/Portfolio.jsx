import React from 'react'
import uiHasil1 from  "../assets/uiHasil1.png";
import uiHasil2 from  "../assets/uiHasil2.png";
// import uiHasil3 from  "../assets/uiHasil3.png";
// import uiHasil5 from  "../assets/uiHasil5.png";

const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            src: uiHasil1
        },
        {
            id: 2,
            src: uiHasil2
        },
        
    ];

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify center w-full h-full'>
            <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
              <p className='py-6'>Lihat karya karya yang sudah saya buat dibawah ini</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
              {portfolio.map(({ id, src }) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                  <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                  <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white bg-gradient-to-br from-blue-500 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white bg-gradient-to-br from-blue-500 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Code</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
              }      
export default Portfolio