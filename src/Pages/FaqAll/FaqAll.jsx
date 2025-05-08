import React, { use } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
const faqPromise = fetch("../ques.json").then(res => res.json());

const FaqAll = () => {
     const data = use(faqPromise);
    return (
        <div className='bg-base-100'>
            <header className='sticky top-0 z-10000 bg-base-200 '>
                <Navbar></Navbar>
            </header>
            <main>
            <div className='py-5 w-11/12 mx-auto'>
           <h2 className='text-lg md:text-xl lg:text-3xl font-bold mb-2 text-center'>Common Job Interview Questions</h2>      
        {
            data.map ( eachFaq => 
                <div key={eachFaq.id}>
                         <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title font-semibold">{eachFaq.question}
                            </div>
                            <div className="collapse-content text-sm">{eachFaq.answer}     
                            </div>
                        </div>
                </div>
            )
        }
        </div>

            </main>
            <footer className='bg-red-50'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default FaqAll;