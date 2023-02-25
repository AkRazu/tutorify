import React, { useEffect, useState } from "react";
import Course from "../../Course/Course";
import Join from "../../Join/Join";


const Courses = () => {
  const [selected, setSelected] = useState(new Date());
  const [service, setService] = useState([]);
  const [courseJoin, setCourseJoin] = useState(null);

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [service]);
  
  return (
    <div className="pb-10">
      
      <h1 className="text-5xl text-center py-8">Courses</h1>
      <div className="grid gap-5 px-5 lg:mx-10 lg:grid-cols-4 md:grid-cols-2 ">
        {service.map((course) => (
          <Course
            key={course._id}
            setCourseJoin={setCourseJoin}
            course={course}
          />
        ))}
      </div>
      {courseJoin && <Join selected={selected} setCourseJoin={courseJoin}></Join>}
    </div>
  );
};

export default Courses;
