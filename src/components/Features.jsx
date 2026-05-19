import { Award, Play, Users } from "lucide-react";

const Features = () => {
    const featureItems = [
        {
            icon: Users,
            title: 'Expert Instructors',
            desc: 'Learn from industry professionals with real-world experience.',
        },
        {
            icon: Award,
            title: 'Verified Certificates',
            desc: 'Earn certificates that are recognized by top companies worldwide.',
        },
        {
            icon: Play,
            title: 'Lifetime Access',
            desc: 'Learn at your own pace with lifetime access to all your courses.',
        },
    ]
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-4 mb-16">
                    <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Benefits</h2>
                    <h3 className="text-4xl font-extrabold text-slate-900">Why Choose Mentora?</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {featureItems.map((f, i) => (
                        <div
                            key={i}
                            className="group p-8 bg-white border border-slate-200 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center space-y-6"
                        >
                            <div className="mx-auto w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <f.icon className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold">{f.title}</h4>
                            <p className="text-slate-500">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;