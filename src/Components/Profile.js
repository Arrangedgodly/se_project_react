import '../blocks/profile.css';
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

function Profile({ openModal, onClose }) {
    return (
        <div className="profile">
            <SideBar />
            <ClothesSection 
                openModal={openModal}
            />
        </div>
    );
}

export default Profile;