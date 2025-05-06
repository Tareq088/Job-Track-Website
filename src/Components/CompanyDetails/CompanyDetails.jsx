import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CompanyDetails = () => {
    const obj = useParams();
    const {id} = obj
    // console.log(id);
    const companiesData = useLoaderData();
    const [company, setCompany] = useState({})
    useEffect(()=>{
        const companyDetails = companiesData.find( company => company.id == id);
        setCompany(companyDetails);
    }, [companiesData,id])
    // console.log(company)
    return (
        <div>
            company
        </div>
    );
};

export default CompanyDetails;