import { Chip } from "@heroui/react";
import { Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedCard = ({ course }) => {
    const { _id, thumbnail, title, price, category } = course;


    return (
        <div
            className="group flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
            <div className="relative aspect-16/10 overflow-hidden">
                <Image src={thumbnail || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600'}

                    alt="Course Image"
                    height={400}
                    width={640}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3">
                    <Chip
                        size="sm"
                        color="primary"
                        variant="solid"
                        className="font-bold text-[10px] uppercase"
                    >
                        {category}
                    </Chip>
                </div>
            </div>
            <div className="p-5 flex flex-col grow space-y-3">
                <Link href={`/courses/${_id}`}>
                    <h4 className="font-bold text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {title}
                    </h4>
                </Link>
                <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                        <Users className="w-3 h-3" />
                        <span>0</span>
                    </div>
                    <span className="font-black text-blue-600">${price}</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;