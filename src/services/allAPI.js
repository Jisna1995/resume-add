import commonAPI from "./commonAPI";
import baseurl from "./baseurl"


//addResumeAPI
export const addResumeAPI=async(resume)=>{
    return await commonAPI('POST',`${baseurl}/resume`,resume)
    
}




//edit Resume API-PUT
export const editResumeAPI=async(id,resume)=>{
    return await commonAPI("PUT",`${baseurl}/resume/${id}`,resume);

}


//addDownload history

export const addDownloadHistoryAPI=async(resume)=>{
    return await commonAPI("POST",`${baseurl}/history`,resume)
}
//getDownnloadHistory
export const getDownnloadHistoryAPI=async()=>{
    return await commonAPI("GET",`${baseurl}/history`,{})
}
//deletedownload history
export const deletedownloadHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${baseurl}/history/${id}`,{})
}

//getResumeAPI
export const getResumeAPI=async(id)=>{
    return await commonAPI("GET",`${baseurl}/resume/${id}`,{})
}