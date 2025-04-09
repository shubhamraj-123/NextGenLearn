import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import RichTextEditor from "@/components/ui/RichTextEditor";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEditCourseMutation, useGetCourseByIdQuery, usePublishCourseMutation, useRemoveCourseMutation } from "@/features/api/courseApi";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const CourseTab = () => {
  const [input, setInput] = useState({
    courseTitle: "",
    subTitle: "",
    description: "",
    category: "",
    courseLevel: "",
    coursePrice: "",
    courseThumbnail: "",
  });
  const params = useParams();
  const courseId = params.courseId;

  const {data:courseByIdData, isLoading:courseByIdLoading,refetch} = useGetCourseByIdQuery(courseId);

  const [publishCourse, {}] =usePublishCourseMutation();
  // useEffect(() => {
  //   if (courseId) {
  //     refetch();
  //   }
  // }, [courseId]);
  
  useEffect(() => { // populate course // after getting course by id, it will show data in course edit page
    if(courseByIdData?.course){
      refetch()
      const course = courseByIdData?.course;
      setInput({
        courseTitle: course.courseTitle,
        subTitle: course.subTitle,
        description: course.description,
        category: course.category,
        courseLevel: course.courseLevel,
        coursePrice: course.coursePrice,
        courseThumbnail: "",
      })
    }
  }, [courseByIdData])
  

  const [previewThumbnail, setPreviewThumbnail] =useState("");
  const navigate = useNavigate();
 
  

  const [editCourse,{data,isLoading,isSuccess,error}] = useEditCourseMutation();

  const [removeCourse, { isLoading: isDeleting }] = useRemoveCourseMutation();

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const selectCategory = (value) => {
    setInput({...input, category:value});
  }
  const selectCourseLevel = (value) => {
    setInput({...input, courseLevel:value});
  }
  // get file
  const selectThumbnail = (e) => {
    const file = e.target.files?.[0];
    if(file){
      setInput({...input, courseThumbnail:file});
      const fileReader = new FileReader(); // user jo file upload krega wo directly browser mei nhi dikha skte
      fileReader.onloadend = () => setPreviewThumbnail(fileReader.result) // data url pass
      fileReader.readAsDataURL(file);
    }
  };

  const updateCourseHandler = async () => {
    // console.log(input);
    const formData = new FormData(); // b/c we using image in thumnail to convert to form data
    formData.append("courseTitle", input.courseTitle);
    formData.append("subTitle", input.subTitle);
    formData.append("description", input.description);
    formData.append("category", input.category);
    formData.append("courseLevel", input.courseLevel);
    formData.append("coursePrice", input.coursePrice);
    formData.append("courseThumbnail", input.courseThumbnail);
    await editCourse({formData, courseId});
  };

  const publishStatusHandler = async (action) => {
    try {
      const response = await publishCourse({courseId, query:action});
      if(response.data){
        refetch();
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to publish or unpublish course");
    }
  }

  useEffect(() => {
    if(isSuccess){
      refetch()
      toast.success(data.message || "Course update.")
    }
    if(error){
      toast.error(error.data.message || "Failed to update course");
    }
  }, [isSuccess,error])

  useEffect(() => {
    
  }, [])
  

  if(courseByIdLoading) return <Loader2 className="h-4 w-4 animate-spin"/>

  const removeCourseHandler = async () => {
    try {
      const res = await removeCourse(courseId).unwrap();
      toast.success(res.message || "Course deleted successfully");
      navigate("/admin/course");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to delete course");
    }
  }; 

  
  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <div>
            <CardTitle>Basic Course Information</CardTitle>
            <CardDescription>
              Make changes to your courses here. Click save when you're done.
            </CardDescription>
          </div>
          <div className="space-x-2">
            <Button disabled={courseByIdData?.course.lectures.length === 0} variant="outline" onClick={() => publishStatusHandler(courseByIdData?.course.isPublished ? "false" : "true")}>
              {courseByIdData?.course.isPublished ? "Unpublish" : "Publish"}
            </Button>
            <Button variant="destructive" onClick={removeCourseHandler} disabled={isDeleting}>
              {isDeleting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Remove Course"
              )}
            </Button>

          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 mt-5">
            <div>
              <Label>Title</Label>
              <Input
                className="mt-2"
                type="text"
                name="courseTitle"
                value={input.courseTitle}
                onChange={changeEventHandler}
                placeholder="Ex. Fullstack developer"
              />
            </div>
            <div>
              <Label>SubTitle</Label>
              <Input
                className="mt-2"
                type="text"
                name="subTitle"
                value={input.subTitle}
                onChange={changeEventHandler}
                placeholder="Ex. Become a Fullstack developer from zero to hero in 3 months."
              />
            </div>
            <div>
              <Label>Description</Label>
              {/* using RichTextEditor */}
              <RichTextEditor input={input} setInput={setInput} />
            </div>
            <div className="flex items-center gap-5">
              <div>
                <Label>Category</Label>
                <Select onValueChange={selectCategory}>
                  <SelectTrigger className="w-[180px] mt-2">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Category</SelectLabel>
                      <SelectItem value="NextJS">NextJS</SelectItem>
                      <SelectItem value="Data Science">Data Science</SelectItem>
                      <SelectItem value="Frontend Development">
                        Frontend Development
                      </SelectItem>
                      <SelectItem value="MERN Stack Development">
                        MERN Stack Development
                      </SelectItem>
                      <SelectItem value="Javascript">Javascript</SelectItem>
                      <SelectItem value="Python">Python</SelectItem>
                      <SelectItem value="Docker">Docker</SelectItem>
                      <SelectItem value="MongoDB">MongoDB</SelectItem>
                      <SelectItem value="HTML">HTML</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Course Level</Label>
                <Select onValueChange={selectCourseLevel}>
                  <SelectTrigger className="w-[180px] mt-2">
                    <SelectValue placeholder="Select a course level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Course Level</SelectLabel>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Advance">Advance</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Price in (INR)</Label>
                <Input
                  type="number"
                  className="mt-2 w-fit"
                  name="coursePrice"
                  value={input.coursePrice}
                  onChange={changeEventHandler}
                  placeholder="₹ 499"
                />
              </div>
            </div>
            <div>
              <Label>Course Thumbnail</Label>
              <Input type="file" onChange={selectThumbnail} accept="image/*" className="w-fit mt-2" />
              {
                previewThumbnail && (
                  <img src={previewThumbnail} className="w-70  my-2" alt="Course Thumbnail" />
                )
              }
            </div>
            <div className="flex gap-5">
              <Button onClick={() => navigate("/admin/course")} variant="outline">Cancel</Button>
              <Button disabled={isLoading} onClick={updateCourseHandler}>
                {
                  isLoading ? (
                    <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Please wait
                    </>
                  ) : (
                    "Save"
                  )
                }
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseTab;
