import React, { Suspense, use } from 'react';
import CompanyCard from '../CompanyCard/CompanyCard';


const CompanyPromise = fetch("../companies.json")
                                .then(res => res.json())

const Companies = () => {
    
    const companies = use(CompanyPromise);
    // console.log(companies);
    return (
        <div className='py-10 w-11/12 mx-auto'>
            <h2 className='text-lg md:text-xl lg:text-2xl text-center mb-5'>Featured Companies</h2>
            
            <div className=''>
                    <CompanyCard 
                        key={companies.id}
                        companies={companies}
                    ></CompanyCard>
                </div>
                   
              
 
          
            
        </div>
    );
};

export default Companies;