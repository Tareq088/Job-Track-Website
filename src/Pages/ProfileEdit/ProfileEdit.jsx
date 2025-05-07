import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';

const ProfileEdit = () => {
    const{updateUser,setUser,user} = use(AuthContext);
    const navigate =useNavigate();
    // console.log(user)
    const handleUpdateInfo =(e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(name, photo);
        const profile = {
            displayName: name,
            photoURL: photo
        }
        console.log(profile)
        updateUser(profile)
            .then(()=>{
                setUser({...user,...profile});
                navigate("/");
            })
            .catch((error)=>{
                console.log(error.message);
            })
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
            <form onSubmit={handleUpdateInfo} className="card-body">
                <fieldset className="fieldset">
                                {/* Name */}
                    <label className="label">Name</label>
                    <input type="text" className="input" name='name' placeholder="Name" />
                                {/* photo */}
                    <label className="label">Photo</label>
                    <input type="text" className="input" name='photo' placeholder="Photo URL" />
                    <button type='submit' className="btn btn-neutral hover:btn-success mt-4">Update Information</button>

                </fieldset>
            </form>
        </div>
    );
};

export default ProfileEdit;