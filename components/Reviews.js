import React from "react";

const Reviews = () => {
  const reviews = [
    {
      name: "andrei",
      username: "@andrei_barbu",
      comment: "Really Impressive man👏!",
    },
    {
      name: "andrei",
      username: "@andrei_barbu",
      comment: "This is great stuff right here..",
    },
    {
      name: "andrei",
      username: "@andrei_barbu",
      comment: "Your projects are amazing! 👍 💪",
    },
    {
      name: "andrei",
      username: "@andrei_barbu",
      comment: "This website is cool!",
    },
    {
      name: "andrei",
      username: "@andrei_barbu",
      comment: "This website is cool!",
    },
    {
      name: "andrei",
      username: "@andrei_barbu",
      comment: "This website is cool!",
    },
  ];
  return (
    <div>
      <div className="slide-body   py-12 ">
        <div className="slide-track space-x-4">
          {reviews.map((rev) => (
            <div className=" h-24 bg-[#22222e] rounded-[1rem] p-3">
              <p className="text-[0.7rem] text-[#706f6f]">{rev.name}</p>
              <p className="text-[0.7rem] text-[#706f6f]">{rev.username}</p>
              <p className="text-[#ffff] mt-2">{rev.comment}</p>
            </div>
          ))}
        </div>
        <div className="slide-track2 space-x-4 mt-8 ">
          {reviews.map((rev) => (
            <div className="w-[250px] h-24  bg-gray-400 rounded-[1rem]"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
