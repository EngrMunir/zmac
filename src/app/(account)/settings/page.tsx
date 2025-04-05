import Link from "next/link"
import ChangeEmailPopup from "@/components/settingComponents/changeEmailPopup"
import ChangePasswordPopup from "@/components/settingComponents/changePasswordPopup"
import ChangNumberPopup from "@/components/settingComponents/changNumberPopup"
import CountryUpdatePopup from "@/components/settingComponents/countryUpdatePopup"
import EditProfilePopup from "@/components/settingComponents/editProfilePopup"
import UploadPicture from "@/components/settingComponents/uploadPicture"

const Settings = () => {
    return (
        <section>
            <div className="rounded-md bg-background px-5 py-5">
                <h6 className="font-semibold text-2xl">Settings</h6>
            </div>
            <div className="rounded-md bg-background px-5 py-10 mt-5">
                <div>
                    <p className="text-sm">Personal information</p>
                    <ul className="grid grid-cols-4 pl-10 mt-3">
                        <li><UploadPicture /></li>
                        <li><EditProfilePopup /></li>
                        <li><CountryUpdatePopup /></li>
                        <li><Link href={"#"} className="text-sm text-[#06c] hover:text-primary-foreground transition-all duration-300">Delete account</Link></li>
                    </ul>
                </div>
                <div className="mt-12">
                    <p className="text-sm">Security Information</p>
                    <ul className="grid grid-cols-4 pl-10 mt-3">
                        <li><ChangeEmailPopup /></li>
                        <li><ChangePasswordPopup/></li>
                        <li><Link href={"#"} className="text-sm text-[#06c] hover:text-primary-foreground transition-all duration-300">Set security question</Link></li>
                        <li><ChangNumberPopup/></li>
                    </ul>
                </div>
                <div className="mt-12">
                    <p className="text-sm">Activate email notifications</p>
                    <ul className="grid grid-cols-4 pl-10 mt-3">
                        <li><Link href={"/settings/notifications-settings"} className="text-sm text-[#06c] hover:text-primary-foreground transition-all duration-300">Activate</Link></li>
                    </ul>
                </div>
                <div className="mt-12">
                    <p className="text-sm">Social media accounts</p>
                    <ul className="grid grid-cols-4 pl-10 mt-3">
                        <li><Link href={"#"} className="text-sm text-[#06c] hover:text-primary-foreground transition-all duration-300">Messenger</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Settings