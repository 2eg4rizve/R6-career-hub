import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)

    // console.log(job);
    // console.log(id);

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You have applied successfully');
     
    }

    return (
        <div>


            <div className="grid grid-cols-4 gap-[20px]">

                <div className="border md: col-span-3">
                    Details Coming here
                    <h2>Job Details Id : {id}</h2>
                    <h2>Job Details Title : {job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>

                <div className=" border ">
                    Side Things

                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>


            </div>
            <ToastContainer />

        </div>
    );
};

export default JobDetails;