import React from "react";
import { AiOutlineEye, AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { BsFillTrashFill, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import backup from "../Resources/no-post-image.png";

const Post = ({ post }) => {
  return (
    <article className="col-md-6 col-xl-4 mb-3" key={post.published_at}>
      <div className="shadow border d-flex">
        <div
          className={`status bg-${
            post.status === 0
              ? "warning"
              : post.status === 1
              ? "success"
              : post.status === 2
              ? "dark"
              : post.status === 3
              ? "secondary"
              : "danger"
          } d-flex align-items-center`}
        >
          {post.account.link.includes("facebook") ? (
            <FaFacebookF className="icon" />
          ) : post.account.link.includes("twitter") ? (
            <BsTwitter className="icon" />
          ) : (
            <BsInstagram className="icon" />
          )}
        </div>

        <div className="post p-4">
          <div className="header d-flex justify-content-between mb-3">
            <small className="text-muted">{post.published_at}</small>
            <div className="options text-muted">
              <BsFillTrashFill className="fs-5 mx-1" />
              <TbDotsCircleHorizontal className="fs-5 mx-1" />
            </div>
          </div>

          <p className="lead fs-6">{post.entry.message}</p>

          <object data={post.entry.image} type="image/png">
            <img src={backup} alt="post" width="100%" height="100%" />
          </object>

          <div className="footer d-flex justify-content-between mt-3 px-1 text-muted fs-5">
            <span>
              <AiOutlineLike className="mb-1" /> 0
            </span>
            <span>
              <BiComment className="mb-1" /> 0
            </span>
            <span>
              <AiOutlineShareAlt className="mb-1" /> 0
            </span>
            <span>
              <AiOutlineEye className="mb-1" /> 0
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
