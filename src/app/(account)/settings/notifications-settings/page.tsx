import { Switch } from "@/components/ui/switch"
import { notificationSettings } from "@/db/notificationSetting"


const NotificationsSettings = () => {
    return (
        <section className="bg-background px-5 py-5 rounded-md max-w-[500px]">
            <div className="grid gap-7">
                {notificationSettings.map((setting, index) => (
                    <div key={index}>
                        <div className="flex justify-between">
                            <b className="text-lg">{setting.title}</b>
                            <Switch defaultChecked={setting.defaultChecked} />
                        </div>
                        <p className="text-accent-foreground mt-3">{setting.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default NotificationsSettings