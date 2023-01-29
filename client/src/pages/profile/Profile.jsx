import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/TopBar";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router';

import './profile.css'

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({})
    const username = useParams().username;

    useEffect(()=>{
      const fetchUser = async  () =>{
          const res = await axios.get(`/users?username=${username}`)
          setUser(res.data);
      }
      fetchUser();
  }, [username])

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
                        src={user.coverPicture || PF+ "person/noProfileCoverImg.png"}
                        alt=""
                    />
                    <img
                        className="profileUserImg"
                        src={user.profilePicture || PF+ "person/noAvatar.jpeg"}
                        alt=""
                    />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.username}</h4>
                        <span className="profileInfoDesc">{user.desc}</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed username={username}/>
                    <Rightbar user={user}/>
                </div>
                </div>
            </div>
        </>
    )
}
