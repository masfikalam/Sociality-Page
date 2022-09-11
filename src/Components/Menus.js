import React from "react";
import { BiChat, BiMessageAltDetail } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { TbBellRinging, TbWaveSine } from "react-icons/tb";

const Menus = () => {
  return (
    <section className="menus px-4">
      <div>
        <p>
          <TbBellRinging className="icon" />
          NOTIFICATIONS <small>29</small>
        </p>
      </div>
      <div>
        <p>
          <BiMessageAltDetail className="icon" />
          SUMMARY
        </p>
      </div>
      <div>
        <details open="true">
          <summary>
            <FaRegEdit className="icon" />
            PUBLISH
          </summary>
          <p className="m-0 mt-2 py-2 px-3 bg-danger">Compose</p>
          <p className="m-0 py-2 px-3 bg-danger">Feed</p>
        </details>
      </div>
      <div>
        <p>
          <BiChat className="icon" />
          ENGAGE
        </p>
      </div>
      <div>
        <p>
          <TbWaveSine className="icon" />
          LISTEN
        </p>
      </div>
      <div>
        <p>
          <HiOutlineDocumentReport className="icon" />
          REPORT
        </p>
      </div>
    </section>
  );
};

export default Menus;
