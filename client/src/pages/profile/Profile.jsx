import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/TopBar";
import './profile.css'

export default function Profile(props) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <>
            <TopBar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                    <img
                        className="profileCoverImg"
                        src={`${PF}post/1.jpeg`}
                        alt=""
                    />
                    <img
                        className="profileUserImg"
                        src={`${PF}person/1.jpeg`}
                        alt=""
                    />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Vlad Panda</h4>
                        <span className="profileInfoDesc">Hello my friends!</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed />
                    <Rightbar profile/>
                </div>
                </div>
            </div>
        </>
    )
}
