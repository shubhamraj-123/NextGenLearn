// double security in course-progress b/c when user logged in goes to http://localhost:5173/course-progress/67e5b369da43ca3446876f26 then they able to go then user will not pay, so we need to stop

import { useGetCourseDetailWithStatusQuery } from "@/features/api/purchaseApi";
import { useParams,Navigate } from "react-router-dom";

const PurchaseCourseProtectedRoute = ({children}) => {
    const {courseId} = useParams();
    const {data,isLoading} = useGetCourseDetailWithStatusQuery(courseId);

    if(isLoading) return <p>Loading...</p>

    return data?.purchased ? children : <Navigate to={`/course-detail/${courseId}`}/>
}

export default PurchaseCourseProtectedRoute;