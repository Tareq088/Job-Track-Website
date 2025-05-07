import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import CompanyDetailsCard from '../CompanyDetailsCard/CompanyDetailsCard';
import Button from '../UI/Button';


const CompanyDetails = () => {
    const obj = useParams();
    const {id} = obj
    // console.log(id);
    const companiesData = useLoaderData();
    const [company, setCompany] = useState({});
    const[idExist, setIdExist] = useState(false);
    useEffect(()=>{
        const companyDetails = companiesData.find( company => company.id == id);
        setCompany(companyDetails);
        if(companyDetails){
            setIdExist(true)
        }
        else{
            setIdExist(false)
        }
    }, [companiesData,id])
    //  console.log(company)
    return (
        <div>
            {
                idExist ?
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
                :
                <div>
                    <header className='bg-base-200 '>
                        <Navbar/>
                    </header>
                    <div className='flex flex-col items-center space-y-5 p-2 mb-7'>
                        <h1 className='text-9xl text-red-700 font-extrabold mt-10 mb-5'>404</h1>
                        <p>Oops! The page You are looking for doesn't exist.</p>
                        <Link to='/'><Button label='Go Back Home'></Button></Link>
                    </div>
                    <footer className='bg-red-50'>
                        <Footer></Footer>
                    </footer>
                </div>

            }
            {/* <header className='bg-base-200 '>
                <Navbar/>
            </header>
            <main>
                <CompanyDetailsCard company={company}></CompanyDetailsCard>
            </main>
            <footer className='bg-red-50'>
                <Footer></Footer>
            </footer> */}
        </div>
    );
};

export default CompanyDetails;