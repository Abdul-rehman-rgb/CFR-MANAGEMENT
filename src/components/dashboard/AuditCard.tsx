import Paragragh from "../ui/Paragrapg";
import HeadingOne from "../ui/heading/HeadinhOne";

const AuditCard = ({ icon, title, value }) => {
    return (
        <div className="flex w-full flex-col items-center gap-4 rounded-[12px] bg-white px-6 py-7 sm:flex-row sm:items-start dark:bg-[#0D0D0D] dark:text-white">
            <div className="flex-shrink-0">
                <img
                    src={icon}
                    alt="icon"
                    className="h-14 w-14 object-contain"
                />
            </div>
            <div className="text-center sm:text-left">
                <Paragragh
                    color="#737791"
                    className="font-medium"
                    para={title}
                />
                <HeadingOne
                    text={value}
                    fontSize="text-[40px]"
                    colorClass="#483415"
                />
            </div>
        </div>
    );
};

export default AuditCard;
