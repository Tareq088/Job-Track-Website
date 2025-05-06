import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import CompanyDetailsCard from '../CompanyDetailsCard/CompanyDetailsCard';


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
    //  console.log(company)
    return (
        <div>
            <header className='bg-base-200 '>
                <Navbar/>
            </header>
            <main>
                <CompanyDetailsCard company={company}></CompanyDetailsCard>
            </main>
            <footer className='bg-red-50'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default CompanyDetails;