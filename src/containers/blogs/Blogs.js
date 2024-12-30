import React, {useState, useEffect, useContext} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import img1 from '../../assets/images/products/5935973140893122447.jpg'


export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  const [mediumBlogs, setMediumBlogs] = useState([]);
  function setMediumBlogsFunction(array) {
    setMediumBlogs(array);
  }
  //Medium API returns blogs' content in HTML format. Below function extracts blogs' text content within paragraph tags
  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split(/<\/p>/i)
          .map(part => part.split(/<p[^>]*>/i).pop())
          .filter(el => el.trim().length > 0)
          .map(el => el.replace(/<\/?[^>]+(>|$)/g, "").trim())
          .join(" ")
      : NaN;
  }
  useEffect(() => {
    if (blogSection.displayMediumBlogs === "true") {
      const getProfileData = () => {
        fetch("/blogs.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setMediumBlogsFunction(response.items);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error Blogs section could not be displayed. Blogs section has reverted to default)`
            );
            setMediumBlogsFunction("Error");
            blogSection.displayMediumBlogs = "false";
          });
      };
      getProfileData();
    }
  }, []);

  const ProductData = [
    {
      id:1,
      img:img1,
      title:'گردنبد طلای طرح گوزن',
      price:'7,200,000 تومان'    },
    {
      id:2,
      img:img1,
      title:'گردنبد طلای طرح گوزن',
      price:'7,200,000 تومان'    },
    {
      id:3,
      img:img1,
      title:'گردنبد طلای طرح گوزن',
      price:'7,200,000 تومان'    },
    {
      id:4,
      img:img1,
      title:'گردنبد طلای طرح گوزن',
      price:'7,200,000 تومان'    },
    {
      id:5,
      img:img1,
      title:'گردنبد طلای طرح گوزن',
      price:'7,200,000 تومان'    },
    {
      id:6,
      img:img1,
      title:'گردنبد طلای طرح گوزن',
      price:'7,200,000 تومان'    },
    {
      id:7,
      img:img1,
      title:'گردنبد طلای طرح گوزن',
      price:'7,200,000 تومان'
    },
    {
      id:8,
      img:img1,
      title:'گردنبد طلای طرح گوزن',
      price:'7,200,000 تومان'    }
  ]

  if (!blogSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {ProductData.map((blog, i) => {
                  return (
                    <BlogCard
                      key={blog.id}
                      img={blog.img}
                      price={blog.price}
                      isDark={isDark}
                      blog={{
                        title: blog.title,
                      }}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
