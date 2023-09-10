import React from "react";
import Blog from "../../components/blog_Card/blog";
import Profile from "../../components/profile_card/profile";
import Post from "../../components/post_card/post";
import img1 from "../../assets/img/blog/woods.jpg";
import img2 from "../../assets/img/blog/bridge.jpg";
import profile from "../../assets/img/profile/profile.jpg";
import Tag from "../../components/tag_card/tag"
const home = () => {
  return (
    <div className="h-[2100px] md:h-[1200px] md:mt-10">
      <p className=" text-center text-2xl  font-mono mt-2 md:mt-0 ">Welcome to the blog of <span className="bg-black text-white">unknown</span></p>
      <div className=" flex flex-col md:grid md:grid-cols-3 md:gap-2  ">
        <div className=" md:col-span-2 md:h-[1000px] m-1">
          <Blog
            img={img1}
            title="TITLE HEADING"
            desc="Title description, April 7, 2014"
            para="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
          />
          <Blog
            img={img2}
            title="BLOG ENTRY"
            desc="Title description, April 7, 2014"
            para="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
          />
        </div>
        <div className=" md:col-span-1  md:h-[1000px] m-1">
          <Profile
            img={profile}
            title="My name"
            para="Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you."
          />
          <Post
            img={profile}
            title="My name"
            para="Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you."
          />
          <Tag/>
        </div>
      </div>
    </div>
  );
};

export default home;
