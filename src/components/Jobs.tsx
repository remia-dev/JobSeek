import { BiTimeFive } from "react-icons/bi";

const Data = [
  {
    id: 1,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!",
    company: "Linus Co.",
  },
  {
    id: 2,
    title: "Frontend Developer",
    time: "1hr",
    location: "Spain",
    desc: "Corrupti sed fugit enim. Eos porro aut amet rerum nam in. Facere necessitatibus ea quae praesentium optio error.",
    company: "Molate inc",
  },
  {
    id: 3,
    title: "Senior React Developer",
    time: "9Hrs",
    location: "America",
    desc: "Corrupti sed fugit enim. Eos porro aut amet rerum nam in. Facere necessitatibus ea quae praesentium optio error.",
    company: "Molate inc",
  },
  {
    id: 4,
    title: "Python Engineer",
    time: "10 Hrs",
    location: "Russia",
    desc: "Corrupti sed fugit enim. Eos porro aut amet rerum nam in. Facere necessitatibus ea quae praesentium optio error.",
    company: "Molate inc",
  },
  {
    id: 5,
    title: "Software Engineer",
    time: "1week",
    location: "Japan",
    desc: "Corrupti sed fugit enim. Eos porro aut amet rerum nam in. Facere necessitatibus ea quae praesentium optio error.",
    company: "Molate inc",
  },
  {
    id: 6,
    title: "Full Stack Developer",
    time: "2months",
    location: "UK",
    desc: "Corrupti sed fugit enim. Eos porro aut amet rerum nam in. Facere necessitatibus ea quae praesentium optio error.",
    company: "Molate inc",
  },
  {
    id: 7,
    title: "Embedded Developer",
    time: "1month",
    location: "Australia",
    desc: "Corrupti sed fugit enim. Eos porro aut amet rerum nam in. Facere necessitatibus ea quae praesentium optio error.",
    company: "Molate inc",
  },
  
];

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blue-400 shadow-lg shadow-gray-300 hover:shadow-lg "
            >
              <span className="flex justify-between items-cente gap-4">
                <h1 className="text-[16px] font-semibold text-gray-700 group-hover:text-white ">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive className="" />
                  {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>
              <div className="company flex items-center gap-2">
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-gray-600 hover:bg-white group-hover/item:text-gray-600 group-hover:text-white">
                Apply now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
