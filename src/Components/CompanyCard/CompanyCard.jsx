import React from 'react';
import { Link } from 'react-router';

const CompanyCard = ({companies}) => {
    // console.log(companies)
    // const {id,name,logo} = companies;
    // console.log(id,name)
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
            {
                companies.map( company => 
                    <Link to={`/company-details/${company.id}`} key={company.id} className='space-y-2 flex flex-col justify-center shadow-md items-center p-4 bg-gray-100'>
                            <img className='w-50 object-cover rounded-md' src={company.logo}></img>
                            <p className='font-bold text-center'>{company.name}</p>

                    </Link>
                )
            }
        </div>
    );
};

export default CompanyCard;