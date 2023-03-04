import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./topbar.css";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function TopBar(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
    
  const { user } = useContext(AuthContext)
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">PandaChat</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchIcon/>
                    <input placeholder="Search for friends, posts or videos" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatIcon/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsIcon/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                <img
                    src={
                    user.profilePicture
                        ? PF + user.profilePicture
                        : PF + "person/noAvatar.jpeg"
                    }
                    alt=""
                    className="topbarImg"
                />
                </Link>
            </div>
        </div>
    )
}
