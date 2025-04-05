interface NotificationSetting {
    title: string;
    description: string;
    defaultChecked: boolean;
}

export const notificationSettings: NotificationSetting[] = [
    {
        title: "Price alerts & reminders",
        description: "Get notified about discounts in your cart & Wish List, or when you still have unpurchased items in your cart",
        defaultChecked: true
    },
    {
        title: "Item recommendations",
        description: "Get notified about discounts in your cart & Wish List, or when you still have unpurchased items in your cart",
        defaultChecked: true
    },
    {
        title: "Member exclusives",
        description: "Get notified about discounts in your cart & Wish List, or when you still have unpurchased items in your cart",
        defaultChecked: true
    },
    {
        title: "Sales announcements",
        description: "Get notified about discounts in your cart & Wish List, or when you still have unpurchased items in your cart",
        defaultChecked: false
    },
    {
        title: "Daily deals",
        description: "Get notified about discounts in your cart & Wish List, or when you still have unpurchased items in your cart",
        defaultChecked: false
    },
    {
        title: "Order updates",
        description: "Get notified about discounts in your cart & Wish List, or when you still have unpurchased items in your cart",
        defaultChecked: true
    }
];