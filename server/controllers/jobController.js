import Job from "../models/job.js"

export const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find({visible : true})
        .populate({path : 'company_id', select : '-password'})

        res.json({
            success : true,
            jobs
        })


    } catch (error) {
        res.json({
            success : false,
            message : error.message
        })
    }
}

export const getJobById = async (req, res) => {
    try {
        const {id} = req.params
        const job = await Job.findById(id)
        .populate({
            path : 'company_id',
            select : '-password'
        })
        if (!job) {
            return res.json({
                success : false,
                message : "Job not found"
            })
        }

        res.json({
            success : true,
            job
        })


    } catch (error) {
        res.json({
            success : false,
            message : error.data
        })
    }


}