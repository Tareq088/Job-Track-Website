import React, { use, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const faqPromise = fetch("../ques.json").then(res => res.json());

const Faq = () => {
    const navigate = useNavigate();
    
    const data = use(faqPromise);
    const[faqData, setFaqData] = useState([]);
    const[showAll, setShowAll] = useState(false)
    
    useEffect( ()=>{
        if(showAll){
            setFaqData(data);
        }
        else{
            setFaqData(data.slice(0,3))
        }
    },[data,showAll])
    // console.log(faqData)
    return (
        <div className='py-5 w-11/12 mx-auto'>
           <h2 className='text-lg md:text-xl lg:text-3xl font-bold mb-2 text-center'>Common Job Interview Questions</h2>
                   
        {
            faqData.map ( eachFaq => 
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
        <div className='text-center my-5'>
                <button 
                onClick={()=>{setShowAll(!showAll);
                                navigate("/faqAll")
                }}
                className='btn btn-success'>Show All</button>
        </div>
 
        </div>
    )
};

export default Faq;