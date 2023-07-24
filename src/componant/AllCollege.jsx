import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllCollege = () => {
    const collegeDatas = useLoaderData();
    return (
        <div>
            <h1 className='font-bold text-6xl text-center mt-6'>All College's</h1>
                <p className='text-center my-6'>It's time to build your bright future. Explore thousands of job openings with all the information you need.</p>

                <div className='grid lg:grid-cols-3 gap-8 mt-10 mb-24'>

                    {
                        collegeDatas.map(data => <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
                        <figure><img className='h-[250px] hover:scale-110 transition duration-500 cursor-pointer object-cover' src={data.Image} alt="Shoes" /></figure>
                        <div className="card-body">
                          <h2 className="card-title">{data.collegeName}</h2>
                          <p>Location: {data.location}</p>
                          <div className='flex justify-between'>
                          <p>Established: {data.establish}</p>
                          <p>Current Student: {data.currentStudent}</p>
                          </div>
                          <div className="card-actions justify-end">
                            <button className="btn btn-primary">Details</button>
                          </div>
                        </div>
                      </div>)
                    }

                </div>


        </div>
    );
};

export default AllCollege;