import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Cv = () => {
    return (
        <div>
            <header className='sticky top-0 z-10000 bg-base-200 '>
                <Navbar></Navbar>
            </header>
            <main>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <div className="card-body">
                <h2 className='text-center font-bold text-lg md:text-3xl pt-4'>Create Resume</h2>
                    <fieldset className="fieldset">
                            {/* Full Name */}
                    <label className="label">Full Name</label>
                    <input type="text" className="input" name='fullName' placeholder="Full Name" />
                     {/* father's name */}
                    <label className="label">Father's Name</label>
                    <input type="text" className="input" name='fullName' placeholder="Father's Name" />
                    {/* mother's name */}
                    <label className="label">Mother's Name</label>
                    <input type="text" className="input" name='fullName' placeholder="Mother's Name" />
                            {/* {Educational Qualification} */}
                    <label className="label">Educational Qualification</label>
                    <div className='flex gap-5'>
                        <select className='input'>
                            <option value="SSC" selected>SSC</option>
                            <option value="SSC">HSC</option>
                            <option value="Honors/Bsc level"> Honors/BSc level</option>
                        </select>
                        <select className='input'>
                            <option value="5.0" selected>5.00</option>
                            <option value="4.0">4.00</option>
                            <option value="3.0">3.00</option>
                        </select>
                    </div>
                    <div className='flex gap-5'>
                        <select className='input'>
                            <option value="SSC">SSC</option>
                            <option value="SSC" selected>HSC</option>
                            <option value="Honors/Bsc level"> Honors/BSc level</option>
                        </select>
                        <select className='input'>
                            <option value="5.0" selected>5.00</option>
                            <option value="4.0">4.00</option>
                            <option value="3.0">3.00</option>
                        </select>
                    </div>
                    <div className='flex gap-5'>
                        <select className='input'>
                            <option value="SSC" >SSC</option>
                            <option value="HSC">HSC</option>
                            <option value="Honors/Bsc level" selected> Honors/BSc level</option>
                        </select>
                        <select className='input'>
                            <option value="5.0" selected>5.00</option>
                            <option value="4.0">4.00</option>
                            <option value="3.0">3.00</option>
                        </select>
                    </div>
                                {/* date of birth */}
                    <label className="label">Date of Birth</label>
                    <input type="date" className="input" placeholder="Date of Birth" />
                                {/* email address */}
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                                {/* Mobile number */}
                    <label className="label">Contact Number</label>
                    <input type="tel" className="input" name='contact' placeholder="Contact Number" />
                            {/* Previous Experience */}
                    <label className="label">Experience </label>
                    <textarea className='input' cols={10} rows={10} placeholder='Write Your Previous Experience here'></textarea>
                                {/* excellency */}
                    <label className="label">Excellency</label>
                    <textarea className='input' cols={10} rows={10} placeholder='Excellence in'></textarea>
                                {/* gender */}
                    <label className="label">Gender</label>
                    <label className='flex'>
                        <input type="radio" name='gender' placeholder="" />
                        <span value="male"> Male</span>
                    </label>
                    <label className='flex'>
                        <input type="radio" name='gender' placeholder="" />
                        <span value="male"> FeMale</span>
                    </label>
                    <label className='flex'>
                        <input type="radio" name='gender' placeholder="" />
                        <span value="male"> Third</span>
                    </label>
                            
                                    {/* photo, signature */}
                    <label className="label">Upload Photo, signature</label>
                    <input type="file" className="input" name='photo' placeholder="Upload PHoto" />
                    <input type="file" className="input" name='signature' placeholder="Upload PHoto" />
                    <button className="btn btn-neutral mt-4">Make Your CV</button>
                    </fieldset>
                </div>
            </div>
            </main>
            <footer className='bg-red-50'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Cv;