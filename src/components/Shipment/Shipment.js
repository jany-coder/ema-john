import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import './Shipment.css';
import { UserContext } from './../../App';

const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => console.log(data);

    console.log(watch("example"));

    return (

        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your Name" />
            {errors.name && <span>Name is required</span>}
            <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Your Email" />
            {errors.email && <span>Email is required</span>}
            <input {...register("address", { required: true })} placeholder="Your Address" />
            {errors.address && <span>Address is required</span>}
            <input {...register("phone", { required: true })} placeholder="Your Phone Number" />
            {errors.phone && <span>Phone Number is required</span>}
            <input type="submit" />
        </form>
    );
};

export default Shipment;