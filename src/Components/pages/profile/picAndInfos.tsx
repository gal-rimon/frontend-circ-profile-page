import "./style.css";
import { profileType } from "./index";
import { Camera } from "../../../svg/index.tsx";

export default function PicAndInfos({ user }: { user: profileType }) {
  const picUrl = "url(" + user.pictureUrl + ")";
  return (
    <div className="profile-img-wrap">
      <div className="img-wrap-left">
        {/* Profile image circle */}
        <div className="img-wrap">
          <div
            className="img-wrap-bg"
            style={{
              backgroundSize: "cover",
              backgroundImage: picUrl,
            }}
          ></div>
          <div className="pic-circle-camera hover4">
            <Camera color="var(--top-menu-icon-color-2)" />
          </div>
          <div className="name-wrap-col">
            <div className="profile-name">
              {user.firstName} {user.lastName}
            </div>
            <div className="name-other-details">{user.otherDetails}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
