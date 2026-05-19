'use client';

import {
    Button,
    Input,
    TextArea,
    Select,
    SelectTrigger,
    SelectValue,
    SelectIndicator,
    SelectPopover,
    ListBox,
    ListBoxItem,
} from '@heroui/react';

import { BookPlus, Image as ImageIcon, DollarSign, Clock, List } from 'lucide-react';


const CATEGORIES = ['Web Development', 'Data Science', 'Design', 'Business', 'Marketing', 'Personal Development'];

export default function AddCourse() {

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-2xl space-y-10">
                <div className="space-y-2 text-center">
                    <div className="mx-auto w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                        <BookPlus className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-black text-slate-900">
                        Create New{' '}
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-blue-800">Course</span>
                    </h1>
                    <p className="text-slate-500 font-medium">Share your knowledge with the world</p>
                </div>

                <form
                    className="space-y-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="md:col-span-2 space-y-2">
                            <label
                                htmlFor="title"
                                className="text-sm font-bold text-slate-700 ml-1"
                            >
                                Course Title
                            </label>
                            <Input
                                id="title"
                                required
                                placeholder="e.g. Next.js 15 Masterclass"
                                className="w-full h-14 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
                            />
                        </div>

                        <div className="md:col-span-2 space-y-2">
                            <label
                                htmlFor="description"
                                className="text-sm font-bold text-slate-700 ml-1"
                            >
                                Description
                            </label>
                            <TextArea
                                id="description"
                                required
                                placeholder="What will students learn in this course?"
                                className="w-full h-32 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-2xl bg-white transition-all duration-300 shadow-none resize-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="thumbnail"
                                className="text-sm font-bold text-slate-700 ml-1"
                            >
                                Thumbnail URL
                            </label>
                            <Input
                                id="thumbnail"
                                required
                                type="url"
                                placeholder="https://images.unsplash.com/..."
                                startContent={<ImageIcon className="w-5 h-5 text-slate-400" />}
                                className="w-full h-14 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Category</label>
                            <Select
                                id="category"
                                required
                                placeholder="Select a category"
                                className="w-full"
                            >
                                <SelectTrigger className="h-14 border-2 border-slate-200 hover:border-blue-600/50 data-[focus-within=true]:border-blue-600 rounded-2xl bg-white transition-all duration-300 flex items-center px-4 shadow-none outline-none group">
                                    <div className="flex items-center gap-3 w-full">
                                        <List className="w-5 h-5 text-slate-400 group-data-[focus-within=true]:text-blue-600 transition-colors" />
                                        <SelectValue className="font-medium text-slate-600" />
                                    </div>
                                    <SelectIndicator className="ml-auto">
                                        <div className="text-slate-400 group-data-[focus-within=true]:text-blue-600 transition-colors">
                                            <List className="w-4 h-4" />
                                        </div>
                                    </SelectIndicator>
                                </SelectTrigger>
                                <SelectPopover className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-2 mt-2">
                                    <ListBox>
                                        {CATEGORIES.map((cat) => (
                                            <ListBoxItem
                                                key={cat}
                                                id={cat}
                                                className="px-4 py-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl cursor-pointer transition-colors font-medium"
                                            >
                                                {cat}
                                            </ListBoxItem>
                                        ))}
                                    </ListBox>
                                </SelectPopover>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="price"
                                className="text-sm font-bold text-slate-700 ml-1"
                            >
                                Price ($)
                            </label>
                            <Input
                                id="price"
                                required
                                type="number"
                                placeholder="0.00"
                                startContent={<DollarSign className="w-5 h-5 text-slate-400" />}

                                className="w-full h-14 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="duration"
                                className="text-sm font-bold text-slate-700 ml-1"
                            >
                                Duration
                            </label>
                            <Input
                                id="duration"
                                required
                                type="text"
                                placeholder="e.g. 12h 30m"
                                startContent={<Clock className="w-5 h-5 text-slate-400" />}

                                className="w-full h-14 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
                            />
                        </div>
                    </div>

                    <div className="pt-4 flex gap-4">
                        <Button
                            variant="flat"
                            size="lg"
                            className="flex-1 font-bold rounded-2xl h-14"
                        >
                            Cancel
                        </Button>
                        <Button
                            color="primary"
                            type="submit"
                            size="lg"
                            isLoading={loading}
                            className="flex-2 font-black rounded-2xl h-14 shadow-xl shadow-blue-600/20"
                        >
                            Publish Course
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
