import React, { Suspense, use } from 'react';
import CompanyCard from '../CompanyCard/CompanyCard';


const CompanyPromise = fetch("../companies.json")
                                .then(res => res.json())

const Companies = () => {
    
    const companies = use(CompanyPromise);
    // console.log(companies);
    return (
        <div>
            <h2 className='text-lg md:text-xl lg:text-2xl text-center'>Featured Companies</h2>
                <div >
                    <CompanyCard 
                        key={companies.id}
                        companies={companies}
                    ></CompanyCard>
                </div>
 
          
            
        </div>
    );
};

export default Companies;