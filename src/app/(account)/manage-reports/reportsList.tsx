import Link from "next/link"
import { ChevronRight } from "lucide-react"


interface Complaint {
    title: string;
    description: string;
}

const complaints: Complaint[] = [
    {
        title: "Intellectual Property Complaint (For Rights Holders)",
        description: "If you are intellectual property rights holders, including copyright (pictures, artworks, etc.), portrait rights, trademark rights, and believe that the product infringes on your rights, please submit complaints on IPP Platform."
    },
    {
        title: "Intellectual Property Complaint (For Rights Holders)",
        description: "If you are intellectual property rights holders, including copyright (pictures, artworks, etc.), portrait rights, trademark rights, and believe that the product infringes on your rights, please submit complaints on IPP Platform."
    },
    {
        title: "Intellectual Property Complaint (For Rights Holders)",
        description: "If you are intellectual property rights holders, including copyright (pictures, artworks, etc.), portrait rights, trademark rights, and believe that the product infringes on your rights, please submit complaints on IPP Platform."
    }
];


const ReportsList = () => {
    return (
        <ul className="grid gap-4 pt-5">
            {complaints.map((complaint, index) => (
                <li key={index} className={`border-b pb-4 ${index === complaints.length - 1 ? '' : 'border-b'}`}>
                    <Link href={"#"} className="flex justify-between items-center mb-1">
                        <b>{complaint.title}</b>
                        <span><ChevronRight size={16} /></span>
                    </Link>
                    <small className="text-accent-foreground">{complaint.description}</small>
                </li>
            ))}
        </ul>
    )
}

export default ReportsList