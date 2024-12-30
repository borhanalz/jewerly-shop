import React from "react";
import "./BlogCard.scss";

export default function BlogCard({blog,price,img, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div onClick={() => openUrlInNewTab(blog.url, blog.title)}>
      <div className={isDark ? "blog-container blog-card blog-card-shadow dark-mode" : "blog-container blog-card"}>
          <img src={img} style={{width:'100%',height:'200px'}}/>
        <div style={{padding:'10px'}}>
          <h5 className={isDark ? "small-dark blog-title" : "blog-title"}>
            {blog.title}
          </h5>
          <p className='product-detail'>1.25 گرم طلا و مروارد ترکیه</p>
          <div style={{textAlign:'left'}}>
            <p className={isDark ? "small-dark small" : "small"}>
              {price}
            </p>
          </div>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
      </div>
    </div>
  );
}
