// import { useParams } from "react-router";
import { useState } from "react";
import Header from "../../Header";
import "./style.css";
import { Camera, PicIcon, ArrowUp } from "../../../svg/index.tsx";
import PicAndInfos from "./picAndInfos.tsx";
import BgImg from "./bgImg.tsx";
import ProfileMenu from "./profileMenu.tsx";

export type profileType = {
  firstName: string;
  lastName: string;
  otherDetails: string;
  pictureUrl: string;
  id: number;
};

let user: profileType;

user = {
  firstName: "Name",
  lastName: "/ Company",
  otherDetails: "Other Details about you or company",
  pictureUrl: "images/profile-pic.png",
  id: 123,
};

export default function Profile() {
  // const { username } = useParams();

  const [showCoverMenu, setShowCoverMenu] = useState<boolean>(false);
  return (
    <div className="profile">
      <Header page="profile" />
      <div className="profile-top">
        <div className="profile-container">
          {/* Cover image */}
          <div className="profile-cover">
            {/* Background image */}
            <BgImg />
            {/* The image in the cover area */}
            <img src="" alt="" className="img-cover" />
            {/* Menu for upload the cover photo */}
            <div className="update-cover-wrapper">
              <div
                className="open-cover-update"
                onClick={() => setShowCoverMenu(!showCoverMenu)}
              >
                <Camera color="var(--top-menu-icon-color-2)" />
                Add cover photo
              </div>
              {showCoverMenu && (
                <div className="open-cover-menu">
                  <div className="open-cover-menu-item hover2">
                    <PicIcon color="#44A1D7" />
                    Select photo
                  </div>
                  <div className="open-cover-menu-item hover2">
                    <ArrowUp color="#44A1D7" />
                    Upload photo
                  </div>
                </div>
              )}
            </div>
            {/* Profile picture and infos */}
            <PicAndInfos user={user} />
            {/* Profile Menu */}
            <ProfileMenu />
          </div>
        </div>
      </div>
      <div className="profile-bottom">
        <div className="profile-bottom-container">
          <div className="bottom-container"></div>
        </div>
      </div>
    </div>
  );
}
