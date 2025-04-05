import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

const accordionData = [
    {
        value: "item-1",
        title: "Awaiting Order Arrival",
        content: [
            { text: "When will the seller send out the order?", href: "#", textColor: "" },
            { text: "What can I do if my order is late and I have not received it.", href: "#", textColor: "" },
            { text: "Do I have to pay for customs and import taxes?", href: "#", textColor: "" },
            { text: "More questions", href: "#", textColor: "text-primary-foreground" }
        ]
    },
    {
        value: "item-2",
        title: "Aftersales",
        content: [
            { text: "More questions", href: "#", textColor: "text-primary-foreground" }
        ]
    },
    {
        value: "item-3",
        title: "Ordering & Payment",
        content: [
            { text: "When will the seller send out the order?", href: "#", textColor: "" },
            { text: "More questions", href: "#", textColor: "text-primary-foreground" }
        ]
    },
    {
        value: "item-4",
        title: "Awaiting Order Arrival",
        content: [
            { text: "When will the seller send out the order?", href: "#", textColor: "" },
            { text: "What can I do if my order is late and I have not received it.", href: "#", textColor: "" },
            { text: "Do I have to pay for customs and import taxes?", href: "#", textColor: "" },
            { text: "More questions", href: "#", textColor: "text-primary-foreground" }
        ]
    }
];

const TopicsAccordion = () => {
    return (
        <Accordion type="single" collapsible>
            <div className="grid grid-cols-2 items-start gap-x-10 gap-y-3">
                {accordionData.map((item) => (
                    <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger className="text-base font-medium hover:text-primary-foreground transition-all duration-300 hover:no-underline">
                            {item.title}
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-inside list-disc">
                                {item.content.map((question, index) => (
                                    <li key={index} className={`py-2 ${question.text ? question.textColor : "text-accent-foreground"} hover:text-primary-foreground transition-all duration-500`}>
                                        <Link href={question.href}>{question.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </div>
        </Accordion>
    );
};

export default TopicsAccordion;